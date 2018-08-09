var category = "votes";

var apiList = {
    getActiveVotes:{
        title: "getActiveVotes",
        urlSyntax: "/getActiveVotes",
        syntax : "steem.api.getActiveVotes(author, permlink, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "author", name: "author", value: "teamsteem" },
            { description: "permlink", name: "permlink", value: "10bec260-585d-11e8-9f65-59abd0559264" },
        ]
    },
    getAccountVotes:{
        title: "getAccountVotes",
        urlSyntax: "/getAccountVotes",
        syntax : "steem.api.getAccountVotes(voter, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "voter", name: "voter", value: "teamsteem" }
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