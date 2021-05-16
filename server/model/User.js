const Sequelize = require('sequelize');

module.exports = function(sequelize, dataTypes) {
    // 定义User模型
  return sequelize.define('User', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER
    },
    username: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    password: {
      type: dataTypes.CHAR(255),
      allowNull: false,
    },
    userId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    }
  }, {
    sequelize
  });
};
