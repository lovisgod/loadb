const validator =  require('validator');
const chalk = require('chalk');
const yergs = require('yargs');
const { tests } = require('./test');


const basic = function(object) {
    const {n, c, u } = object
    return tests.basicTest(n, c, u);
    
}

const pxls = function(object) {
    const {n, c, u } = object;
    return tests.pxlsTest(n, c, u);
    
}  

const pTest = function(object) {
  const { n, c, u, file, T } = object;
  return tests.post(n, c, u, file, T);
}


module.exports = {
  basic,
  pxls,
  pTest,
};

  require('make-runnable');