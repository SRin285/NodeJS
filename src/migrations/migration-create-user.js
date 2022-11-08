"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      // id: DataTypes.INTEGER,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // email: DataTypes.STRING,
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      // firstName: DataTypes.STRING,
      firstName: {
        type: Sequelize.STRING,
      },
      // lastName: DataTypes.STRING,
      lastName: {
        type: Sequelize.STRING,
      },
      // address: DataTypes.STRING,
      address: {
        type: Sequelize.STRING,
      },
      // phoneNumber: DataTypes.STRING,
      phoneNumber: {
        type: Sequelize.STRING,
      },
      // gender: DataTypes.BOOLEAN,
      gender: {
        type: Sequelize.BOOLEAN,
      },
      // image : DataTypes.STRING,
      image: {
        type: Sequelize.STRING,
      },
      // roleId: DataTypes.STRING,
      roleId: {
        type: Sequelize.STRING,
      },
      // positionId: DataTypes.STRING,
      positionId: {
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
    await queryInterface.dropTable("Users");
  },
};
