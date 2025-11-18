const Tarefa = require("../models/tarefa");

exports.create = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    if (!titulo) return res.status(400).json({ erro: "Título obrigatório" });

    const tarefa = await Tarefa.create({ titulo, descricao, status });
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.getAll = async (_req, res) => {
  const tarefas = await Tarefa.findAll();
  res.json(tarefas);
};

exports.getById = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });
  res.json(tarefa);
};

exports.update = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });

  await tarefa.update(req.body);
  res.json(tarefa);
};

exports.updateStatus = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });

  const { status } = req.body;
  tarefa.status = status;
  await tarefa.save();
  res.json(tarefa);
};

exports.delete = async (req, res) => {
  const tarefa = await Tarefa.findByPk(req.params.id);
  if (!tarefa) return res.status(404).json({ erro: "Não encontrada" });

  await tarefa.destroy();
  res.json({ mensagem: "Tarefa removida!" });
};
