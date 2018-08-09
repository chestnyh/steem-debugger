var express = require('express');
var router = express.Router();
var steem  = require('steem');
var json2html = require('json-to-html');

/* GET home page. */

router.get('/', function(req, res, next) {

    function showPage(result){

        res.render(
            'indexmain', 
            {title : "Title", category: "global", header_info: result}
        );
    } 


    //steem.config.set('websocket','wss://gtg.steem.house:8090');


    steem.api.getRewardFundAsync("post", function(err, result) {

        console.log(result);


        showPage(result)
    });

});

module.exports = router;
