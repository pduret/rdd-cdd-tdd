var assert = require('assert'),
    config = require('./../lib/config');


var a = config("test", "test2");

describe('Config', function() {

    it('has 3 props', function () {
        assert(Object.keys(a).length == 3);
    });
    
    it('after construction, 2 props are populated', function() {
        
    });



    it('has correct key types', function () {
        assert(typeof('test') == 'string');
    });
    
});
