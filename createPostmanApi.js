const fs = require('fs');
var steemdApiArray = require('./api_lists/steemdApiArray');
var cliWalletApiArray = require('./api_lists/cliWalletApiArray');


var collection = "Steemd Production Api";
var dirName = "steemd";
var dirDescription = "Api For Steemd Daemon";
var method = "POST";
var protocol = "https";
var host = "api.steemit.com";
var port = "";


var jsonMain = {
    info: {
        _postman_id : "5ed2c31a-0db4-4d34-8c86-894e200924d2",
        name : collection,
        schema : "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    item: [
        {
            name : dirName,
            description : dirDescription,
            item : []
        }
    ]
};

for (var i = 0; i < steemdApiArray.length; i++)
{
    if(steemdApiArray[i].method === ""
        && steemdApiArray[i].description === ""
        && steemdApiArray[i].params === ""
        && steemdApiArray[i].returns === "") {
        continue;
    }

    var jsonMethod = {
        name : steemdApiArray[i].name,
        request : {
            method: method,
            header : [
                {
                    key : "Content-Type",
                    value : "application/json",
                }
            ],
            body : {
                mode : "raw",
                raw : "{\"jsonrpc\" : \"2.0\", \"method\" : \"" + steemdApiArray[i].method +"\", \"params\" : [], \"id\": \"323\"}"
            },
            url: {
                raw: protocol+"://"+host,
                protocol : protocol,
                host : [
                    host
                ],
                port: port,
            },
            description : "Description : "+steemdApiArray[i].description+"\n\n" +
            "Params : "+steemdApiArray[i].params+"\n\n" +
            "Return : "+steemdApiArray[i].returns+"\n\n"
        },
        response : [],
    };
    jsonMain.item[0].item.push(jsonMethod);
}

fs.writeFile("postmanApi.json", JSON.stringify(jsonMain, "\n", "   "), function(err) {
    if(err) {
        return console.log(err);
    }
});