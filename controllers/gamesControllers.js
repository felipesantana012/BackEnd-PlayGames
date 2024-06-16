const { Games: GamesModel } = require("../models/Games");
const { validationResult } = require("express-validator");
const {
  handleError,
  createResponse,
  verificaExistencia,
} = require("../utils/errorHandler");

const gamesControllers = {
  criar: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((error) => ({
          path: error.path,
          msg: error.msg,
        })),
      });
    }

    try {
      const gameData = req.body;
      const newGame = await GamesModel.create(gameData);
      return createResponse(res, 201, { newGame }, "Game criado com sucesso!");
    } catch (error) {
      return handleError(res, error, "Erro ao criar o jogo");
    }
  },

  buscarTodos: async (req, res) => {
    try {
      const games = await GamesModel.find();
      verificaExistencia(games, res);
      return createResponse(res, 200, games, "Games Encontrados");
    } catch (error) {
      return handleError(res, error, "Erro ao buscar os jogos");
    }
  },

  buscarUnico: async (req, res) => {
    try {
      const id = req.params.id;
      const game = await GamesModel.findById(id);

      verificaExistencia(game, res);

      return createResponse(res, 200, game, "Game Encontrado");
    } catch (error) {
      return handleError(res, error, "Erro ao buscar o jogo");
    }
  },

  deletar: async (req, res) => {
    try {
      const id = req.params.id;
      const game = await GamesModel.findById(id);

      verificaExistencia(game, res);

      await GamesModel.findByIdAndDelete(id);
      return createResponse(
        res,
        200,
        `Id ${id} Removido`,
        "Game deletado com sucesso!"
      );
    } catch (error) {
      return handleError(res, error, "Erro ao deletar o jogo");
    }
  },

  atualizar: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((error) => ({
          path: error.path,
          msg: error.msg,
        })),
      });
    }

    try {
      const id = req.params.id;

      const game = {
        nome: req.body.nome,
        imagemPrincipal: req.body.imagemPrincipal,
        pacoteImagensJogo: req.body.pacoteImagensJogo,
        descricao: req.body.descricao,
        preco: req.body.preco,
        dataLancamento: req.body.dataLancamento,
        vercao: req.body.vercao,
        quantidadeJogadores: req.body.quantidadeJogadores,
        estiloJogo: req.body.estiloJogo,
        compatibilidade: req.body.compatibilidade,
      };

      const gameAtualizado = await GamesModel.findByIdAndUpdate(id, game);

      verificaExistencia(gameAtualizado, res);

      return createResponse(
        res,
        200,
        { gameAtualizado },
        "Game atualizado com sucesso!"
      );
    } catch (error) {
      return handleError(res, error, "Erro ao atualizar o jogo");
    }
  },
};

module.exports = gamesControllers;
