"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // currentNumber: DataTypes.INTEGER,
      currentNumber: {
        type: Sequelize.INTEGER,
      },
      // maxNumber: DataTypes.INTEGER,
      maxNumber: {
        type: Sequelize.INTEGER,
      },
      // date: DataTypes.DATE,
      date: {
        type: Sequelize.DATE,
      },
      // timeType: DataTypes.STRING,
      timeType: {
        type: Sequelize.STRING,
      },
      // doctorId: DataTypes.INTEGER,
      doctorId: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("schedules");
  },
};
