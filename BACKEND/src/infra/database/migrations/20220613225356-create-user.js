"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("users", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
         },
         apartament: {
            type: Sequelize.INTEGER,
         },
         password: {
            type: Sequelize.STRING,
         },
         createdAt: {
            type: Sequelize.DATE,
         },
         updatedAt: {
            type: Sequelize.DATE,
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("users");
   },
};
