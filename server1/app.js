
require('dotenv').config({path:`${process.cwd()}/.env`});
const express = require('express');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
// const session = require('express-session');
const cors = require('cors');
// const { sequelize } = require('./db/models');
// const cookieParser = require('cookie-parser');

const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
// app.use(session({
//     store: new(require('connect-pg-simple')(session.Store))({
//         db: sequelize
//     }),
//     secret: 'Rahul1234@', 
//     resave: false,
//     saveUninitialized: false,
//     cookie: { 
//         path: '/',
//         httpOnly: false,
//         secure:false, 
//         maxAge: 30*60 * 1000, 
//     }
// }));

// app.use('/books', require('./routes/bookRoutes'));
app.use(require('./routes/authRoutes'));
app.use(require('./routes/bookRoutes'))
app.use(require('./routes/adminRoutes'))

app.use('*', 
    catchAsync(async(req,res,next)=>{
        throw new AppError(`can't find ${req.originalUrl} on this server`, 404);
})
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, ()=>{
    console.log("Server is listening on port", PORT )})
