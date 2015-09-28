/*
    Adapter Pattern
        Convert one interface into another
        An object's interface is its properties and methods
        Used to avoid extensive refactoring when a dependency changes
        Only used when necessary
*/

define(function(require){
    'use strict';


        return {
            init : function() {
                var oldInterfaceAdapter = require('adapter/oldInterfaceAdapter');
                oldInterfaceAdapter.doSomethingOld();

            }
        }
});
