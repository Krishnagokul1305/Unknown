const compileCode = require("./c.service");

async function compile(req, res) {
  const { code } = req.body;
  try {
    const result = await compileCode(code);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error)
    res.status(400).json({ error });
  }
}

module.exports = compile;
