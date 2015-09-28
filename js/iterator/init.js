define(function(require){
    'use strict';

    return {
        init : function() {

            var Iterator = require('iterator/iterator'),
                    testArray = [
                    { something: 'yaya', other: 123},
                    { something: 'yayi', other: 456},
                    { something: 'yayo', other: 789},
                    ],
                    myArrayIterator = Iterator.build(testArray),
                    testString = 'testString',
                    myStringIterator  = Iterator.build(testString);

                    console.log(myArrayIterator.next());
                    console.log(myArrayIterator.next());
                    console.log(myArrayIterator.next());

                    while (!myStringIterator.isDone()) {
                        console.log(myStringIterator.next());
                    }

                    console.log(myStringIterator.reset().take(4).join(''));

        }
    }

});