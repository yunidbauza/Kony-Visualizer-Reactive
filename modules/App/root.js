/* jshint esnext: true */
var store = store || (function(){
    var Store = require('Store');
    var actions = require('ActionList');
    var mutations = require('Mutations');
    
    return new Store ({
        actions,
        mutations,
        state
    });
})();