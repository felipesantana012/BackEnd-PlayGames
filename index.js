require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//db conexao
const conn = require("./db/conn");
conn();

// //Rotas
// app.get("/", (req, res) => {
//   res.send("Pagina pricipal Aplicação Games");
// });

const routes = require("./routes/router");
app.use("/", routes);

//Servidor Back
app.listen(process.env.PORT || 3002, () => {
  console.log("Servidor Conectado");
});
