var category = "content";

var apiList = {
    getContent:{
        title: "getContent",
        urlSyntax: "/getContent",
        syntax : "steem.api.getContent(author, permlink, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "author", name: "author", value: "happymoneyman" },
            { description: "permlink", name: "permlink", value: "new-eos-info-ns-james-update" }
        ]
    },
    getContentReplies:{
        title: "getContentReplies",
        urlSyntax: "/getContentReplies",
        syntax : "steem.api.getContentReplies(author, permlink, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "author", name: "author", value: "happymoneyman" },
            { description: "permlink", name: "permlink", value: "new-eos-info-ns-james-update" }
        ]
    },
    getDiscussionsByAuthorBeforeDate:{
        title: "getDiscussionsByAuthorBeforeDate",
        urlSyntax: "/getDiscussionsByAuthorBeforeDate",
        syntax : "steem.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "author", name: "author", value: "happymoneyman" },
            { description: "startPermlink", name: "startPermlink", value: "new-eos-info-ns-james-update" },
            { description: "beforeDate", name: "beforeDate", value: "2018-04-01" },
            { description: "limit", name: "limit", value: "10" }
        ]
    },
    getRepliesByLastUpdate:{
        title: "getRepliesByLastUpdate",
        urlSyntax: "/getRepliesByLastUpdate",
        syntax : "steem.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "startAuthor", name: "startAuthor", value: "happymoneyman" },
            { description: "startPermlink", name: "startPermlink", value: "new-eos-info-ns-james-update" },
            { description: "limit", name: "limit", value: "10" },
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