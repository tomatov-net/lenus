'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Timeline.init({
    title: DataTypes.INTEGER,
    date: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    happiness: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Timeline',
    underscored: true,
  });
  return Timeline;
};