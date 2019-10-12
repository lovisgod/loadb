const validator =  require('validator');
const chalk = require('chalk');
const yergs = require('yargs');
const { tests } = require('./test');



// exports.printMsg = function() {
//     yergs.command({
//         command:"basic",
//         describe:"perform basic test",
//           //here we configure the argurement to be passed into the commands
//           builder:{
//             n:{
//                 describe:'Number of request',
//                 demandOption: true,
//                 type:'number'
//             },
//             c:{
//                 describe:'Number of concurrency',
//                 demandOption: true,
//                 type:'number'
//             },
//             u:{
//                 describe:'Url to test',
//                 demandOption: true,
//                 type:'string'
//             }
//         },
//         handler(argv) {
//            tests.basicTest(argv.n, argv.c, argv.u);
//         }
//     })
    
//     //this should be after the commands that you created
//     //this parse the arguements  with all of the configurations
//     yergs.parse();
//   }

exports.basic = function(object) {
    const {n, c, u } = object
    return tests.basicTest(n, c, u);
    
  }

  require('make-runnable');