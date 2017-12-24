(function () {

    'use strict' ;

    printDuplicatedNumbers(10, 11, 28, 10, 37, 42, 10, 28);




    function printDuplicatedNumbers(...args) {
            for (let i = 0; i < args.length; i++) {
                let numOfDuplicated = 0;
                for (let j = 0; j < args.length; j++) {
                    if (args[i] === args[j]) {
                        numOfDuplicated++;
                    }
                }
                if (numOfDuplicated > 1) {
                    console.log(args[i] + ' - ' + numOfDuplicated)
                }
                args.slice(i, 1);
            }
    }

}());
