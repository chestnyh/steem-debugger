var category = "loginApi";

var apiList = {
    getApiByName:{
        title: "getApiByName",
        urlSyntax: "/getApiByName",
        syntax : "steem.api.getApiByName(apiName, function(err, result) {\n" +
        "  console.log(err, result);\n" +
        "});",
        query:[
            { description: "apiName", name: "apiName", value: "witnesses" }
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