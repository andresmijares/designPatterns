/*
Factory Pattern:
    - Creational Pattern
    - Wrap a constructor to return instances of objects
    - Commonly used in JavaScript
    - Create large numbers of similars objects
*/

define(function() {
    'use strict';

    var Video = function(attributes) {
        this.length = attributes.length || 0;
        this.name = attributes.name || '';
    };

    return Video;

});