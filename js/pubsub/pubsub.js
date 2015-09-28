define(function () {
    'use strict';

    var subscribers = {};

    return {
        publish: function (topic, data, unsub) {
            unsub = unsub || false;

            if (!subscribers[topic]) {
                return;
            }

            subscribers[topic].forEach(function (subscriber) {
                subscriber(data);
            });

            //if unsub equals true
            delete subscribers[topic];

        },
        subscribe: function (topic, callback) {
            var index;

            if (!subscribers[topic]) {
                subscribers[topic] = [];
            }

            subscribers[topic].push(callback) ;
        }
    };
});
