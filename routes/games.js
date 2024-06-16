const router = require("express").Router();

const gamesControllers = require("../controllers/gamesControllers");

const { gameValidationRules } = require("../middlewares/validationMiddleware");

router.post("/games", gameValidationRules(), gamesControllers.criar);
router.get("/games", gamesControllers.buscarTodos);
router.get("/games/:id", gamesControllers.buscarUnico);
router.delete("/games/:id", gamesControllers.deletar);
router.put("/games/:id", gameValidationRules(), gamesControllers.atualizar);

module.exports = router;
