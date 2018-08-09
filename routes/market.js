var category = "market";

var apiList = {
    getOrderBook:{
        title: "getOrderBook",
        urlSyntax: "/getOrderBook",
        syntax : "steem.api.getOrderBook(limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Limit", name: "limit", value: "10" }
        ]
    },
    getOpenOrders:{
        title: "getOpenOrders",
        urlSyntax: "/getOpenOrders",
        syntax : "steem.api.getOpenOrders(owner, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "Owner", name: "owner", value: "gtg" }
        ]
    },
    getLiquidityQueue:{
        title: "getLiquidityQueue",
        urlSyntax: "/getLiquidityQueue",
        syntax : "steem.api.getLiquidityQueue(startAccount, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "startAccount", name: "startAccount", value: "gtg" },
            { description: "limit", name: "limit", value: "10" },
        ]
    },
};

var errorObj = {
    category: category,
    title: "Error",
    data: null
};

module.exports.category = category;
module.exports.apiList = apiList;
module.exports.errorObj = errorObj;