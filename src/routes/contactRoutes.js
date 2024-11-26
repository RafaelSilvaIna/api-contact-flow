const express = require("express");
const Joi = require("joi");
const db = require("../services/firebaseService");

const router = express.Router();

const contactSchema = Joi.object({
  name: Joi.string().required(),
  subject: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

router.post("/submit-contact", async (req, res) => {
  const { error, value } = contactSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const ref = db.ref("contacts");
    await ref.push(value);
    res.status(200).json({ message: "Contato salvo com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao salvar contato." });
  }
});

module.exports = router;
