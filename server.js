const app = require("./src/app");
const sequelize = require("./src/config/database");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.sync();
    console.log("Banco conectado!");

    app.listen(PORT, () =>
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Erro ao iniciar:", err);
  }
}

start();
