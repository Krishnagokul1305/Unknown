// controllers/compilerController.js
import { compileAndRunJavaCode } from '../service/javaCompilerService.js';

export const compileJavaCode = async (req, res) => {
  const { code } = req.body;
  try {
    const result = await compileAndRunJavaCode(code);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error compiling Java code', error: error.message });
  }
};
