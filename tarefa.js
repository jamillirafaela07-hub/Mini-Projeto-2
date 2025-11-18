const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tarefa = sequelize.define("Tarefa", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM("a fazer", "em andamento", "concluída"),
    defaultValue: "a fazer",
    allowNull: false
  }
});

module.exports = Tarefa;
