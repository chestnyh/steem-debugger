var category = "witnesses";

var apiList = {
    getWitnesses:{
        title: "getWitnesses",
        urlSyntax: "/getWitnesses",
        syntax : "steem.api.getWitnesses(witnessIds, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "witnessIds", name: "witnessIds", value: ["happymoneyman"] }
        ]
    },
    getWitnessByAccount:{
        title: "getWitnessByAccount",
        urlSyntax: "/getWitnessByAccount",
        syntax : "steem.api.getWitnessByAccount(accountName, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "accountName", name: "accountName", value: "happymoneyman" }
        ]
    },
    getWitnessesByVote:{
        title: "getWitnessesByVote",
        urlSyntax: "/getWitnessesByVote",
        syntax : "steem.api.getWitnessesByVote(from, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "from", name: "from", value: "happymoneyman" },
            { description: "limit", name: "limit", value: "10" },
        ]
    },
    apiCommand:{
        title: "lookupWitnessAccounts",
        urlSyntax: "/lookupWitnessAccounts",
        syntax : "steem.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "lowerBoundName", name: "lowerBoundName", value: "happymoneyman" },
            { description: "limit", name: "limit", value: "10" },
        ]
    },
    getWitnessCount:{
        title: "getWitnessCount",
        urlSyntax: "/getWitnessCount",
        syntax : "steem.api.getWitnessCount(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n"
    },
    getActiveWitnesses:{
        title: "getActiveWitnesses",
        urlSyntax: "/getActiveWitnesses",
        syntax : "steem.api.getActiveWitnesses(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});"
    },
    getMinerQueue:{
        title: "getMinerQueue",
        urlSyntax: "/getMinerQueue",
        syntax : "steem.api.getMinerQueue(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n"
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