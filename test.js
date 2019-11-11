const shell = require('shelljs');


const tests = {
    basicTest(n, c, url) {
        shell.exec(`ab -n ${n} -c ${c} -g out.data ${url}`);
      },
    pxlsTest(n, c, url) {
      shell.exec(`ab -n ${n} -c ${c} -e result.csv ${url}`);
    },
    post(n, c, url, file, T) {
      shell.exec(`ab -p ${file} -T${T} -n ${n} -c ${c} -e result.csv ${url}`);
    }
}

module.exports = {
  tests
};
