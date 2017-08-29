const fs = require('fs');

module.exports = fs.readFileSync(`${__dirname}/guardian.graphqls`, 'utf8');
