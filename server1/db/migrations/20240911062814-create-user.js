'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userType:{
        type: Sequelize.ENUM('0','1','2'),
        allowNull: false,
        validate:{
          notNUll:{
            msg: 'userType cannot be null'
          },
          notEmpty:{
            msg: 'userType cannot be empty'
          },
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAT: {
        allownNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};