'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Surat.init({
    penerima_id: DataTypes.INTEGER,
    pengirim_id: DataTypes.INTEGER,
    kode_surat: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    asal_surat: DataTypes.STRING,
    jenis_surat: DataTypes.STRING,
    softfile: DataTypes.STRING,
    tipe: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Surat',
  });
  return Surat;
};