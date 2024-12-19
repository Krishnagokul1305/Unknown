// services/javaCompilerService.js
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

export const compileAndRunJavaCode = async (javaCode) => {
  const tempDir = path.join(process.cwd(), 'temp');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  const fileName = 'Main.java';
  const filePath = path.join(tempDir, fileName);

  // Write Java code to a file
  fs.writeFileSync(filePath, javaCode);

  // Compile the Java code
  return new Promise((resolve, reject) => {
    exec(`javac ${filePath}`, (compileError, compileStdout, compileStderr) => {
      if (compileError || compileStderr) {
        reject({ error: compileError || compileStderr });
      } else {
        // Run the compiled code
        exec(`java -cp ${tempDir} Main`, (runError, runStdout, runStderr) => {
          if (runError || runStderr) {
            reject({ error: runError || runStderr });
          } else {
            resolve({ output: runStdout });
          }
        });
      }
    });
  });
};
