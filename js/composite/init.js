/*
    Composite Pattern
        Treat single objects or collections of objects in the same way
        used to create nested structures of nodes
        a node may be a leaf or a container
        traversal of the tree is usually implicit
        */


        define(function(require){
            'use strict';


            return {
                init : function() {

                    var Node = require('composite/node'),
                    root = new Node('Fred'),
                    child1 = new Node('John'),
                    child2 = new Node('Jane'),
                    child3 = new Node('Jack'),
                    child4 = new Node('Jill'),
                    child5 = new Node('Jess'),
                    child6 = new Node('James');


                    root.addChild(child1);
                    root.addChild(child2);

                    child2.addChild(child3);
                    child2.addChild(child4);

                    child4.addChild(child5);

                    child5.addChild(child6);


                    //root.traverseDown();
                    //child6.traverseDown();
                    //child6.traverseUp();
                    //root.traverseUp();


                }
            };
        });
