'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Histori_pangkat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Histori_pangkat.init({
    nama_pangkat: DataTypes.STRING,
    status: DataTypes.STRING,
    tanggal_mulai: DataTypes.DATE,
    masa_jabatan: DataTypes.INTEGER,
    tanggal_akhir: DataTypes.DATE,
    members_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Histori_pangkat',
  });
  return Histori_pangkat;
};