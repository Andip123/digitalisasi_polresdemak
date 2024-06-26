'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Members.init({
    user_id: DataTypes.INTEGER,
    nomor_nrp: DataTypes.STRING,
    nama: DataTypes.STRING,
    nomor_telepone: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    divison: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Members',
  });
  return Members;
};