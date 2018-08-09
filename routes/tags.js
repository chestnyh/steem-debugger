var category = "tags";

var apiList = {
    getTrendingTags:{
        title: "getTrendingTags",
        urlSyntax: "/getTrendingTags",
        syntax : "steem.api.getTrendingTags(afterTag, limit, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "afterTag", name: "aftertag", value: "nature" },
            { description: "limit", name: "limit", value: "10" },
        ]
    },
    getDiscussionsByTrending:{
        title: "getDiscussionsByTrending",
        urlSyntax: "/getDiscussionsByTrending",
        syntax : "steem.api.getDiscussionsByTrending(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]

    },
    getDiscussionsByCreated:{
        title: "getDiscussionsByCreated",
        urlSyntax: "/getDiscussionsByCreated",
        syntax : "steem.api.getDiscussionsByCreated(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByActive:{
        title: "getDiscussionsByActive",
        urlSyntax: "/getDiscussionsByActive",
        syntax : "steem.api.getDiscussionsByActive(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByCashout:{
        title: "getDiscussionsByCashout",
        urlSyntax: "/getDiscussionsByCashout",
        syntax : "steem.api.getDiscussionsByCashout(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByPayout:{
        title: "getDiscussionsByPayout",
        urlSyntax: "/getDiscussionsByPayout",
        syntax : "steem.api.getDiscussionsByPayout(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByVotes:{
        title: "getDiscussionsByVotes",
        urlSyntax: "/getDiscussionsByVotes",
        syntax : "steem.api.getDiscussionsByVotes(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByChildren:{
        title: "getDiscussionsByChildren",
        urlSyntax: "/getDiscussionsByChildren",
        syntax : "steem.api.getDiscussionsByChildren(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[]
    },
    getDiscussionsByHot:{
        title: "getDiscussionsByHot",
        urlSyntax: "/getDiscussionsByHot",
        syntax : "steem.api.getDiscussionsByHot(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByFeed:{
        title: "getDiscussionsByFeed",
        urlSyntax: "/getDiscussionsByFeed",
        syntax : "steem.api.getDiscussionsByFeed(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByBlog:{
        title: "getDiscussionsByBlog",
        urlSyntax: "/getDiscussionsByBlog",
        syntax : "steem.api.getDiscussionsByBlog(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
        ]
    },
    getDiscussionsByComments:{
        title: "getDiscussionsByComments",
        urlSyntax: "/getDiscussionsByComments",
        syntax : "steem.api.getDiscussionsByComments(query, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "query", name: "name", value: {
                    tag: 'introduceyourself',
                    limit: 10,
                    start_author: 'lada94',
                    start_permlink: 'introduce-youself-steemit'
                } }
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