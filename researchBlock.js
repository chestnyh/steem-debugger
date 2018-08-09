var steem  = require('steem');


steem.api.getBlock(1092, function(err, result) {

    console.log(result);



});