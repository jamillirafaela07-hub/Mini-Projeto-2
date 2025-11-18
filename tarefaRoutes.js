const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefaController");

router.post("/tarefas", controller.create);
router.get("/tarefas", controller.getAll);
router.get("/tarefas/:id", controller.getById);
router.put("/tarefas/:id", controller.update);
router.patch("/tarefas/:id/status", controller.updateStatus);
router.delete("/tarefas/:id", controller.delete);

module.exports = router;
