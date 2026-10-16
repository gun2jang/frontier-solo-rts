import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
for(const file of ['data.js','engine.js','graphics.js','game.js']){
  execFileSync(process.execPath,['--check',fileURLToPath(new URL('../dist/'+file,import.meta.url))],{stdio:'inherit'});
  console.log('Syntax OK: '+file);
}
