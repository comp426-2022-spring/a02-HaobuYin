// Import the coinFlip function from your coin.mjs file
import { flipACoin } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2))
// Call the coinFlip function and put the return into STDOUT
//console.log(args);
//console.log(args.call);
console.log(flipACoin(args.call));