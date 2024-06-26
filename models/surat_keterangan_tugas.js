'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surat_keterangan_tugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Surat_keterangan_tugas.init({
    members_id: DataTypes.INTEGER,
    nomor_sk: DataTypes.STRING,
    tanggal_sk: DataTypes.DATE,
    deskripsi: DataTypes.STRING,
    softfile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Surat_keterangan_tugas',
  });
  return Surat_keterangan_tugas;
};