'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surat_keterangan_tugas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      members_id: {
        type: Sequelize.INTEGER
      },
      nomor_sk: {
        type: Sequelize.STRING
      },
      tanggal_sk: {
        type: Sequelize.DATE
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      softfile: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Surat_keterangan_tugas');
  }
};