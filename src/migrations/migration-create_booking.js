"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // statusId: DataTypes.STRING,
      statusId: {
        type: Sequelize.STRING,
      },
      // doctorId: DataTypes.INTEGER,
      doctorId: {
        type: Sequelize.INTEGER,
      },
      // patientId: DataTypes.INTEGER,
      patientId: {
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
    await queryInterface.dropTable("bookings");
  },
};
