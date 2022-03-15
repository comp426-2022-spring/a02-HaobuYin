// Import the coinFlip function from your coin.mjs file
import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2))
//console.log(args);
//console.log(args.number);
console.log(coinFlips(args.number));
