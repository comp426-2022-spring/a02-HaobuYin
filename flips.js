// Import the coinFlip function from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2))
//console.log(args);
//console.log(args.number);
const result = coinFlips(args.number);
console.log(result, countFlips(result));
