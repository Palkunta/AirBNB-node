
require('ts-node/register'); // will tell nodejs to dynamically compile and execute TypeScript files
//this line actually allows typescript support

const config = require('./db.config');

// console.log(config);

module.exports = config.default ;