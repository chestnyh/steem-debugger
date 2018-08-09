var category = "globals";

var apiList = {
    getConfig:{
        title: "getConfig",
        urlSyntax: "/getConfig",
        syntax : "steem.api.getConfig(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]
    },
    getDynamicGlobalProperties:{
        title: "getDynamicGlobalProperties",
        urlSyntax: "/getDynamicGlobalProperties",
        syntax : "steem.api.getDynamicGlobalProperties(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]
    },
    getChainProperties:{
        title: "",
        urlSyntax: "",
        syntax : "steem.api.getChainProperties(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]

    },
    getFeedHistory:{
        title: "getFeedHistory",
        urlSyntax: "/getFeedHistory",
        syntax : "steem.api.getFeedHistory(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]
    },
    getCurrentMedianHistoryPrice:{
        title: "getCurrentMedianHistoryPrice",
        urlSyntax: "/getCurrentMedianHistoryPrice",
        syntax : "steem.api.getCurrentMedianHistoryPrice(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]
    },
    getHardforkVersion:{
        title: "getHardforkVersion",
        urlSyntax: "/getHardforkVersion",
        syntax : "steem.api.getHardforkVersion(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[]
    },
    getNextScheduledHardfork:{
        title: "getNextScheduledHardfork",
        urlSyntax: "/getNextScheduledHardfork",
        syntax : "steem.api.getNextScheduledHardfork(function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[]
    },
    getRewardFund:{
        title: "getRewardFund",
        urlSyntax: "/getRewardFund",
        syntax : "steem.api.getRewardFund(name, function(err, result) {\n" +
        "  console.log(err, result);\n" +
        "});",
        query:[
            { description: "name", name: "name", value: "gtg" }
        ]
    },
    getVestingDelegations:{
        title: "getVestingDelegations",
        urlSyntax: "/getVestingDelegations",
        syntax : "steem.api.getVestingDelegations(account, from, limit, function(err, result) {\n" +
        "  console.log(err, result);\n" +
        "});",
        query:[
            { description: "after", name: "after", value: "steem" },
            { description: "from", name: "from", value: "2018-04-01" },
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