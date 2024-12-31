'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // authors: {
      //   type:Sequelize.JSONB,
      //   allowNull: true
      // },
      // translators: {
      //   type:Sequelize.JSONB,
      //   allowNull: true
      // },
      subjects: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      // bookshelves: {
      //   type: Sequelize.ARRAY(Sequelize.STRING),
      //   allowNull: true
      // },
      languages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      copyright: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      media_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      // formats: {
      //   type: Sequelize.JSONB,
      //   allowNull: true
      // },
      download_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        allowNull:true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book');
  }
};