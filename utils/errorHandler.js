const handleError = (res, error, message = "Erro no servidor") => {
  console.error(error);
  return res.status(500).json({ msg: message, error: error.message });
};

const createResponse = (res, status, games = null, msg = "") => {
  return res.status(status).json({ status, msg, games });
};

function verificaExistencia(game, res) {
  if (!game) {
    res.status(404).json({ msg: "Não foi encontado Games" });
    return;
  }
}

module.exports = {
  handleError,
  createResponse,
  verificaExistencia,
};
