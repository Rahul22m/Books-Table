const user = require('../db/models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const generateToken = (payload)=>{
    return jwt.sign(payload, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}

exports.signup = catchAsync(async(req,res,next)=>{
    const body = req.body;

    if(!['0','1','2'].includes(body.userType)){
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid user type'
        })
    }

    const newUser = await user.create({
        userType: body.userType,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
    })

    if(!newUser){
        return next(new AppError('Failed to create the user', 400));
    }

    const result = newUser.toJSON();

    delete result.password;
    delete result.deletedAt;

    result.token = generateToken({
        id: result.id
    })

    
    return res.status(200).json({
        status: 'success',
        data: result,
    });
});

exports.login = catchAsync(async(req,res,next)=>{
    const userType = user.userType;
    const {email, password} = req.body;

    if(!email||!password){
        return next(new AppError('Please provide email and password', 400));
    }

    const result = await user.findOne({where: {email}});
    if(!result||!(await bcrypt.compare(password, result.password))){
        return next(new AppError('Incorrect email or password', 401));
    }

    const token = generateToken({
        id: result.id,
    });
    
    return res.json({
        status:'success',
        token
    });
});

exports.authentication = catchAsync(async(req,res,next)=>{
    //1.get the token from headers
    let idToken ='';
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ){
        //Bearer hedhdeudeduededede
        idToken = req.headers.authorization.split(' ')[1];
    }
    if(!idToken){
        return next(new AppError('Please login to get access', 401))
    }



    //2.token verification
    const tokenDetail = jwt.verify(idToken, process.env.JWT_SECRET_KEY)

    //3.get the user detail from db and add to req object
    const freshUser = await user.findByPk(tokenDetail.id);

    if(!freshUser){
        return next(new AppError('User no longer exists', 400));
    }
    req.user = freshUser;
    return next();
});

exports.restrictTo= (...userType)=>{
    const checkPermission = (req,res,next)=>{
        if(!req.user||!userType.includes(req.user.userType.toString())){
            return next(
                new AppError("You don't have permission to perform this action",
                    403
                )
            );
        }
        return next();
    };
    return checkPermission;
};

exports.logout = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully. Please remove your token from storage.'
    });
});