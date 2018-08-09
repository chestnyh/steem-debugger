const { Client } = require('pg');
var steem  = require('steem');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'steem',
    password: 'steem',
    database: 'steem_db'
});

client.connect((err) => {
    if (err) {
        console.error('Postgresql connection error', err.stack)
    } else {
        console.log('Postgresql connected')
    }
});

function steemGetBlock(block_height){

    steem.api.getBlock(block_height, function(err, result) {

        console.log(block_height);

        if (err){
            console.log("Some Error");
            process.exit(-1);
        }

        if (result.extensions.length > 0){
            console.log(result.extensions);
            process.exit(-1);
        }

        data = [
            block_height,
            result.block_id,
            result.extensions,
            result.previous,
            result.signing_key,
            result.timestamp,
            result.transaction_merkle_root,
            result.transactions,
            result.witness,
            result.witness_signature
        ];

        add_block(data, add_extension, add_transaction);

        steemGetBlock(block_height + 1);

    });

}

function add_block(data, callbackExtension, callbackTransaction){

    if(data[2].length <= 0){
        data[2] = false;
    } else{
        callbackExtension(data[2], data[0]);
        data[2] = true;
    }

    if(data[7].length <= 0){
        data[7] = false;
    }
    else{
        callbackTransaction(data[7], data[0]);
        data[7] = true;
    }

    var sqlQuery = "INSERT INTO blocks(" +
        "block_height, " +
        "block_id, " +
        "extensions, " +
        "previous, " +
        "signing_key, " +
        "timestamp, " +
        "transaction_merkle_root, " +
        "transactions, " +
        "witness, " +
        "witness_signature) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";

    client.query(sqlQuery, data, (err, res) => {
        if (err) {
            console.log(err.stack);
            process.exit(-1);
        } else {
            console.log("Block added");
            //console.log(res.rows[0])
            // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
        }
    });
}

function add_transaction(data, block_height){

    var sqlQuery = "INSERT INTO transactions(" +
        "ref_block_num, " +
        "ref_block_prefix, " +
        "expiration, " +
        "operations, " +
        "extensions, " +
        "signatures, " +
        "transaction_id, " +
        "block_num, " +
        "transaction_num, " +
        "block_height) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";

    for (var i = 0; i < data.length; i++) {

        if(data[i].operations.length <= 0){
            data[i].operations = false;
        }else{
            add_transaction_operation(data[i].operations, block_height);

            data[i].operations = false;
        }

        if(data[i].extensions.length <= 0){
            data[i].extensions = false
        }else{
            console.log("TODO point 1 ");
            process.exit(-1);
        }

        if(data[i].signatures.length <= 0){
            data[i].signatures = false;
        }
        else {
            add_transaction_signature(data[i].signatures, block_height);
            data[i].signatures = true;
            //console.log("TODO point 2 ");
            //process.exit(-1);
        }

        var dataInsert = [
            data[i].ref_block_num,
            data[i].ref_block_prefix,
            data[i].expiration,
            data[i].operations,
            data[i].extensions,
            data[i].signatures,
            data[i].transaction_id,
            data[i].block_num,
            data[i].transaction_num,
            block_height
        ];

        client.query(sqlQuery, dataInsert, (err, res) => {
            if (err) {
                console.log(err.stack);
                process.exit(-1);
            } else {
                console.log("Transaction added");
                //console.log(res.rows[0])
                // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
            }
        });
    }

}

function add_transaction_operation (operations, block_height) {

    var addTransactionOperationQuery = "INSERT INTO transaction_operation(" +
        "block_height, " +
        "transaction_type, " +
        "transaction_info ) VALUES($1, $2, $3) RETURNING *";

    for(var i = 0; i < operations.length; i++){

        if((operations[i][0] === "pow" || operations[i][0] === "transfer"  || operations[i][0] === "transfer_to_vesting")
            && operations[i].length == 2){

            var dataInsert = [
                block_height,
                operations[i][0],
                JSON.stringify(operations[i][1])
            ];

            console.log(dataInsert);

            client.query(addTransactionOperationQuery, dataInsert, (err, res) => {
                if (err) {
                    console.log(err.stack);
                    process.exit(-1);
                } else {
                    console.log("Transaction_operation added");
                    //console.log(res.rows[0])
                    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
                }
            });

        }
        else{

            console.log("TODO point 3");

            process.exit(-1);

        }
    }
}

function add_transaction_extension () {

}

function add_transaction_signature (signatures, block_height) {

    var addTransactionSignatureQuery = "INSERT INTO transaction_signature(" +
        "block_height, " +
        "signature ) VALUES($1, $2) RETURNING *";

    for(var i=0; i < signatures.length; i++){

       if (typeof signatures[i] === "string"){

           var dataInsert = [
               block_height,
               signatures[i]
           ];

           console.log(dataInsert);

           client.query(addTransactionSignatureQuery, dataInsert, (err, res) => {
               if (err) {
                   console.log(err.stack);
                   process.exit(-1);
               } else {
                   console.log("Transaction_signature added");
                   //console.log(res.rows[0])
                   // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
               }
           });
       }
       else{

           console.log("TODO point 4");

           process.exit(-1);

       }
    }
}

function add_extension(data){

}

steemGetBlock(29843);

