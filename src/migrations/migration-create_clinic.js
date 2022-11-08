"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clinics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // name : DataTypes.STRING,
      name: {
        type: Sequelize.STRING,
      },
      // address: DataTypes.STRING,
      address: {
        type: Sequelize.STRING,
      },
      // description: DataTypes.TEXT,
      description: {
        type: Sequelize.TEXT,
      },
      // image: DataTypes.STRING,
      image: {
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
    await queryInterface.dropTable("clinics");
  },
};
