var category = "blocksAndTransactions";

var apiList = {
    getBlockHeader:{
        title: "getBlockHeader",
        urlSyntax: "/getBlockHeader",
        syntax : "steem.api.getBlockHeader(blockNum, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Block Num", name: "blocknum", value: "12345678" }
        ]
    },
    getBlock:{
        title: "getBlock",
        urlSyntax: "/getBlock",
        syntax : "steem.api.getBlock(blockNum, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Block Num", name: "blocknum", value: "12345678" }
        ]
    },
    getState:{
        title: "getState",
        urlSyntax: "/getState",
        syntax : "steem.api.getState(path, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Path", name: "path", value: "love-is-everything" }
        ]
    },
    getTrendingCategories:{
        title: "getTrendingCategories",
        urlSyntax: "/getTrendingCategories",
        syntax : "steem.api.getTrendingCategories(after, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "after", name: "after", value: "steem" },
            { description: "limit", name: "limit", value: "10" }
        ]
    },
    getBestCategories:{
        title: "getBestCategories",
        urlSyntax: "/getBestCategories",
        syntax : "steem.api.getBestCategories(after, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "after", name: "after", value: "steem" },
            { description: "limit", name: "limit", value: "10" }
        ]
    },
    getActiveCategories:{
        title: "getActiveCategories",
        urlSyntax: "/getActiveCategories",
        syntax : "steem.api.getActiveCategories(after, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "after", name: "after", value: "steem" },
            { description: "limit", name: "limit", value: "10" }
        ]
    },
    getRecentCategories:{
        title: "getRecentCategories",
        urlSyntax: "/getRecentCategories",
        syntax : "steem.api.getRecentCategories(after, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "after", name: "after", value: "steem" },
            { description: "limit", name: "limit", value: "10" }
        ]
    }
};

var errorObj = {
    category: category,
    title: "Error",
    data: null
};

module.exports.category = category;
module.exports.apiList = apiList;
module.exports.errorObj = errorObj;