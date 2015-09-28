define(function(require) {
    'use strict';

    return {
        init : function() {
            var call, sms, email, handler,
            Handler = require('cor/handler'),
            callHandler = require('cor/handlers/call');


         call = {
            type : 'call',
            number : '123456789',
            ownNumber : '1126457363'
         };

         sms = {
            type : 'sms',
            number: '123456789',
            message: 'Hey Sil'
         };

         email = {
            type : 'email',
            recipient: 'andresmijares@gmail.com',
            message: 'Hey andrew'
         };


         handler = new Handler(null, null, callHandler);

         handler.handleCommunication(sms);
         handler.handleCommunication(call);
        handler.handleCommunication(email);

        }
    };

});