const { DataTypes } = require("sequelize");

const sequelize = require("../config/bd_postgre");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  priority: {
    type: DataTypes.STRING,
    defaultValue: "media"
  },

  category: {
    type: DataTypes.STRING,
    defaultValue: "general"
  },

  dueDate: {
    type: DataTypes.DATE,
    allowNull: true
  }

}, {
  tableName: "tasks",
  timestamps: true
});

module.exports = Task;