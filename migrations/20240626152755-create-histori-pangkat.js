'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histori_pangkats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_pangkat: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      tanggal_mulai: {
        type: Sequelize.DATE
      },
      masa_jabatan: {
        type: Sequelize.INTEGER
      },
      tanggal_akhir: {
        type: Sequelize.DATE
      },
      members_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Histori_pangkats');
  }
};