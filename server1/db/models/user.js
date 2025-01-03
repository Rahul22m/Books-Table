'use strict';
const {Model, Sequelize, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');


const user = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userType:{
    type: DataTypes.ENUM('0','1','2'),
    allowNull: false,
    validate:{
      notNull: {
        msg: 'userType cannot be null',
      },
      notEmpty: {
        msg: 'userType cannot be empty'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:'email cannot be null'
      },
      notEmpty:{
        msg:'email cannot be empty'
      },
      isEmail:{
        msg: 'Invalid email id'
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:'password cannot be null'
      },
      notEmpty:{
        msg:'password cannot be empty'
      },
    },
  },
  confirmPassword: {
    type: DataTypes.VIRTUAL,
    set(value){
      if(this.password.length<8){
        throw new AppError(
          'Password length must be greater than 8',
          400
        );
      }
      if(value === this.password){
        const hashedPassword = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hashedPassword);
      }else{
        throw new AppError(
          'Password and confirm password must be the same',
          400
        );
      }
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  deletedAT: {
    allownNull: true,
    type: DataTypes.DATE,
  },
}, {
  paraoid: true,
  freezeTableName: true,
  modelName: 'user',
});

module.exports = user; 