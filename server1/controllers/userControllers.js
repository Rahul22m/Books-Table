const user = require('../db/models/user');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers= catchAsync(async (req, res, next) => {
    try {
        const users = await user.findAll();

        return res.status(200).json({
            status: 'success',
            data: users,
        })
    }   
    catch(error){
        res.status(500).json({
            msg: error.message,
        })
    }
});

exports.createUser=  catchAsync(async(req,res,next)=>{
    try{

        if(!['1','2'].includes(req.body.userType)){
            return res.status(400).json({
                status: 'fail',
                message: 'Invalid user type'
            })
        }

        const newUser = await user.create({
            userType: req.body.userType,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        })

        if(!newUser){
            return next(new AppError('Failed to create the user', 400));
        }

        const result = newUser.toJSON();

        return res.status(201).json({
            status: 'success',
            data: result,
        })

    }catch(error){
        return res.status(500).json({
            msg: error.message,
        })
    }
});

exports.deleteUser=catchAsync(async(req,res,next)=>{
    try{
        await user.destroy({where:{id: req.params.id}})
        return res.json({ message: 'User deleted successfully' });
    }catch(error){
        return res.status(500).json({
            msg: error.message,
        })
    }
});