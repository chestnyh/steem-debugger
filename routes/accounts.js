var category = "accounts";

var apiList = {
    getAccounts:{
        title: "getAccounts",
        urlSyntax: "/getAccounts",
        syntax : "steem.api.getAccounts(names, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Account Name", name: "names[]", value: ["gtg"] }
        ]
    },
    getAccountReferences : {
        title: "getAccountReferences",
        urlSyntax: "/getAccountReferences",
        syntax : "steem.api.getAccountReferences(accountId, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query: [
            { description: "Account Id", name: "accountId", value: "14007" }
        ]
    },
    lookupAccountNames : {
        title: "getChainProperties",
        urlSyntax: "/getChainProperties",
        syntax : "steem.api.lookupAccountNames(accountNames, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Account name", name: "name[]", value: "gtg" }
        ]
    },
    lookupAccounts : {
        category: "accounts",
        title: "getFeedHistory",
        urlSyntax: "/getFeedHistory",
        syntax : "steem.api.lookupAccounts(lowerBoundName, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "Lower Bound Name", name: "name", value: "gtg" },
            { description: "Limit", name: "limit", value: "1000" }
        ]
    },
    getAccountCount : {
        title: "getAccountCount",
        urlSyntax: "/getAccountCount",
        syntax : "steem.api.getAccountCount(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});"

    },
    getConversionRequests : {
        title: "getConversionRequests",
        urlSyntax: "/getConversionRequests",
        syntax : "steem.api.getConversionRequests(accountName, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query : [
            { description: "Account Name", name: "name", value: "gtg" }
        ]
    },
    getAccountHistory : {
        title: "getAccountHistory",
        urlSyntax: "/getAccountHistory",
        syntax : "steem.api.getAccountHistory(account, from, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query : [
            { description: "Account", name: "account", value: "STM8LxpJ9fsKFneGXaUdUtcegTemtt5HHAJ8vLYAVrUsUWbGE8Jf6" },
            { description: "From", name: "from", value: "steem" },
            { description: "Limit", name: "limit", value: "gtg" }
        ]
    },
    getOwnerHistory : {
        title: "getOwnerHistory",
        urlSyntax: "/getOwnerHistory",
        syntax : "steem.api.getOwnerHistory(account, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query : [
            { description: "Account", name: "account", value: "gtg" }
        ]
    },
    getRecoveryRequest : {
        title: "getRecoveryRequest",
        urlSyntax: "/getRecoveryRequest",
        syntax : "steem.api.getRecoveryRequest(account, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query: [
            { description: "Account", name: "account", value: "gtg" }
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