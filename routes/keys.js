var category = "keys";

var apiList = {
    getKeyReferences:{
        title: "getKeyReferences",
        urlSyntax: "/getKeyReferences",
        syntax : "steem.api.getKeyReferences(key, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Key", name: "key", value: "STM8LxpJ9fsKFneGXaUdUtcegTemtt5HHAJ8vLYAVrUsUWbGE8Jf6" }
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