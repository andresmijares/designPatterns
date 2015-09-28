/*
    Proxy Pattern
        Use one object as the interface of another object
        Sits between clients and the object being proxied
        Clients may or may not know if they are using proxy
        Proxy controls access to the original object
        May throttle requests to the object
        //////////Delay initialisation of the object///////////////
*/

define(function(require){
    'use strict';


        return {
            init: function() {
                var myProxy,
                slowObjectProxy = require('proxy/slowObjectProxy');


                myProxy = slowObjectProxy.init();
                myProxy.someMethod();
            }
        };
});
