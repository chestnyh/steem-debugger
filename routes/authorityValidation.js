var category = "authorityValidation";

var apiList = {
    getTransactionHex:{
        title: "getTransactionHex",
        urlSyntax: "/getTransactionHex",
        syntax : "steem.api.getTransactionHex(trx, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "Trx", name: "trx", value: "5fc6a6429b4bd506f645b93f41de93549fbda8e4" }
        ]
    },
    getTransaction:{
        title: "getTransaction",
        urlSyntax: "/getTransaction",
        syntax : "steem.api.getTransaction(trxId, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "trxId", name: "trxid", value: "07fd3fa4a26ef8081ba5aa8003c8c97248d78d56" }
        ]
    },
    getRequiredSignatures:{
        title: "getRequiredSignatures",
        urlSyntax: "/getRequiredSignatures",
        syntax : "steem.api.getRequiredSignatures(trx, availableKeys, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "trx", name: "trx", value: "val" },
            { description: "availableKeys", name: "availableKeys", value: "val" },
        ]
    },
    getPotentialSignatures:{
        title: "getPotentialSignatures",
        urlSyntax: "/getPotentialSignatures",
        syntax : "steem.api.getPotentialSignatures(trx, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});\n",
        query:[
            { description: "trx", name: "trx", value: "5fc6a6429b4bd506f645b93f41de93549fbda8e4" }
        ]
    },
    verifyAuthority:{
        title: "verifyAuthority",
        urlSyntax: "/verifyAuthority",
        syntax : "steem.api.verifyAuthority(trx, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query:[
            { description: "trx", name: "trx", value: "5fc6a6429b4bd506f645b93f41de93549fbda8e4" }
        ]
    },
    verifyAccountAuthority: {
        title: "verifyAccountAuthority",
        urlSyntax: "/verifyAccountAuthority",
        syntax: "steem.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {\n" +
        "    console.log(err, result);\n" +
        "});",
        query: [
            {description: "nameOrId", name: "nameOrId", value: ""},
            {description: "signers", name: "signers", value: ""},
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