const { body } = require("express-validator");

const gameValidationRules = () => {
  return [
    body("nome").notEmpty().withMessage("Nome é obrigatório"),
    body("imagemPrincipal").notEmpty().withMessage("Imagem principal é obrigatória"),
    body("pacoteImagensJogo").isArray().withMessage("Pacote de imagens deve ser um array"),
    body("descricao").notEmpty().withMessage("Descrição é obrigatória"),
    body("preco").isFloat({ gt: 0 }).withMessage("Preço deve ser um número positivo"),
    body("dataLancamento").notEmpty().withMessage("A data é obrigatória"),
    body("vercao").notEmpty().withMessage("Versão é obrigatória"),
    body("quantidadeJogadores").isInt({ gt: 0 }).withMessage("Quantidade de jogadores deve ser um número inteiro positivo"),
    body("estiloJogo").notEmpty().withMessage("Estilo de jogo é obrigatório"),
    body("compatibilidade").notEmpty().withMessage("Compatibilidade é obrigatória"),
  ];
};

module.exports = {
  gameValidationRules,
};
