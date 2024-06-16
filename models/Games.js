const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const gamesSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },

    imagemPrincipal: {
      type: String,
      required: true,
    },

    pacoteImagensJogo: {
      type: [String],
    },

    descricao: {
      type: String,
      required: true,
    },

    preco: {
      type: Number,
      required: true,
    },

    dataLancamento: {
      type: String,
      required: true,
    },

    vercao: {
      type: String,
      required: true,
    },

    quantidadeJogadores: {
      type: Number,
      required: true,
    },

    estiloJogo: {
      type: String,
      required: true,
    },

    compatibilidade: {
      type: String,
      required: true,
    },
  },
  { Timestamp: true }
);

const Games = mongoose.model("Games", gamesSchema);

module.exports = {
  gamesSchema,
  Games,
};
