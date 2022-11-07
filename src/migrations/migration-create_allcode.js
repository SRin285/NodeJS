"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("allcodes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // key: DataTypes.STRING,
      key: {
        type: Sequelize.STRING,
      },
      // type: DataTypes.STRING,
      type: {
        type: Sequelize.STRING,
      },
      // value_en: DataTypes.STRING,
      valueEn: {
        type: Sequelize.STRING,
      },
      // value_vi: DataTypes.STRING,
      valueVi: {
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
    await queryInterface.dropTable("allcodes");
  },
};
