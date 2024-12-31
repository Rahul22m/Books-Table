'use strict';
const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../../config/database');
module.exports = sequelize.define('book',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // authors: {
  //   type: DataTypes.JSONB,
  //   allowNull: true
  // // },
  // translators: {
  //   type: DataTypes.JSONB,
  //   allowNull: true
  // },
  subjects: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  // bookshelves: {
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  //   allowNull: true
  // },
  languages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  copyright: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    validate: {
      isIn: {
        args: [[true,false]],
        msg: 'copyright value must be true or false',
    }
  },
  },
  media_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  // formats: {
  //   type: DataTypes.JSONB,
  //   allowNull: true
  // },
  download_count: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
},{
  paranoid:true,
  freezeTableName:true,
  modelName: 'book'
})