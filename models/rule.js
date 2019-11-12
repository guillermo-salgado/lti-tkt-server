'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING,
    template: DataTypes.STRING,
    type: DataTypes.STRING,
    language: DataTypes.STRING,
    programId: DataTypes.INTEGER,
    includeDynamicDate: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};