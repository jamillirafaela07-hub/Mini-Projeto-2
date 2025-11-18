const express = require("express");
const tarefaRoutes = require("./routes/tarefaRoutes");

const app = express();
app.use(express.json());

app.use(tarefaRoutes);

module.exports = app;
