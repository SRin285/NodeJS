"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("doctor_clinic_specialty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // doctorId: DataTypes.INTEGER,
      doctorId: {
        type: Sequelize.INTEGER,
      },
      // clinicId: DataTypes.INTEGER,
      clinicId: {
        type: Sequelize.INTEGER,
      },
      // specialtyId: DataTypes.INTEGER,
      specialtyId: {
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
    await queryInterface.dropTable("doctor_clinic_specialty");
  },
};
