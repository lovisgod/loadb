const fs = require('fs');
const chalk = require('chalk');
const shell = require('shelljs');


const tests = {
    basicTest(n, c, url) {
        shell.exec(`ab -n ${n} -c ${c} -g out.data ${url}`);
      },
}

module.exports = {
  tests
};
