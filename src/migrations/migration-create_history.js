"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // patientId: DataTypes.INTEGER,
      patientId: {
        type: Sequelize.INTEGER,
      },
      // doctorId: DataTypes.INTEGER,
      doctorId: {
        type: Sequelize.INTEGER,
      },
      // description: DataTypes.TEXT,
      description: {
        type: Sequelize.TEXT,
      },
      // files: DataTypes.TEXT,
      files: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("Histories");
  },
};
