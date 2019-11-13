'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    template: DataTypes.STRING,
    language: DataTypes.STRING,
    programId: DataTypes.INTEGER,
    includeDynamicDate: DataTypes.BOOLEAN
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};