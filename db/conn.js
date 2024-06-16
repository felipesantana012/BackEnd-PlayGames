const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_LINK_CONEXAO);

    console.log("Conectado ao Banco");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
