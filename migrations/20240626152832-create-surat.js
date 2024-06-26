'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      penerima_id: {
        type: Sequelize.INTEGER
      },
      pengirim_id: {
        type: Sequelize.INTEGER
      },
      kode_surat: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.DATE
      },
      asal_surat: {
        type: Sequelize.STRING
      },
      jenis_surat: {
        type: Sequelize.STRING
      },
      softfile: {
        type: Sequelize.STRING
      },
      tipe: {
        type: Sequelize.ENUM
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Surats');
  }
};