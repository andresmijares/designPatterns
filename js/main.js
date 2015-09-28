require(
    ['factory/init', 'pubsub/init', 'strategy/init', 'cor/init', 'iterator/init',
    'facade/init', 'decorator/init', 'adapter/init', 'composite/init', 'proxy/init'],
    function (factory, pubsub, strategy, cor, iterator, facade, decorator,adapter, composite, proxy) {
        'use strict';

        var examples = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            cor: cor,
            iterator: iterator,
            facade : facade,
            decorator :decorator,
            adapter:adapter,
            composite : composite,
            proxy : proxy
        };

        window.runExample = function (example) {
            examples[example].init();
        };
    }
);
