module.exports = [
    {
        name: "account_by_key_api.get_key_references (vector<public_key_type> key)",
        method: "get_key_references",
        description: "",
        params: "vector<public_key_type> key",
        returns: "vector<set<string>> get_key_references"
    },
    {
        name: "block_api.get_block (uint32_t block_num) ",
        method: "get_block",
        description: "Retrieve a full, signed block",
        params: "uint32_t block_num block_num Height of the block to be returned",
        returns: "optional<signed_block_api_obj> the referenced block, or null if no matching block was found"
    },
    {
        name: "block_api.get_block_header ( uint32_t block_num )",
        method: "get_block_header",
        description: "Retrieve a block header",
        params: "uint32_t block_num Height of the block whose header should be returned",
        returns: "optional<block_header> header of the referenced block, or null if no matching block was found"
    },
    {
        name: "condenser_api.broadcast_block",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.broadcast_transaction",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.broadcast_transaction_synchronous",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_account_bandwidth",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_account_count ( )",
        method: "get_account_count",
        description: "Get the total number of accounts registered with the blockchain",
        params: "No params",
        returns: "uint64_t"
    },
    {
        name: "condenser_api.get_account_history (string account, uint64_t from, uint32_t limit)",
        method: "get_account_history",
        description: "Account operations have sequence numbers from 0 to N where N is the most recent operation. This method\n" +
        "returns operations in the range [from-limit, from]",
        params: "string account, uint64_t from - the absolute sequence number, -1 means most recent, limit is the number of operations before from, \n" +
        "uint32_t limit - the maximum number of items that can be queried (0 to 1000], must be less than from",
        returns: "map<uint32_t, applied_operation>"
    },
    {
        name: "condenser_api.get_account_references ( account_id_type account_id )",
        method: "get_account_references",
        description: "",
        params: "account_id_type account_id",
        returns: "vector<account_id_type> all accounts that referr to the key or account id in their owner or active authorities."
    },
    {
        name: "condenser_api.get_account_reputations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_account_votes ( string voter )",
        method: "get_account_votes",
        description: "",
        params: "string voter",
        returns: "vector<account_vote>"
    },
    {
        name: "condenser_api.get_accounts ( vector< string > names )",
        method: "get_accounts",
        description: "",
        params: "vector< string > names",
        returns: "vector< extended_account >"
    },
    {
        name: "condenser_api.get_active_votes ( string author, string permlink )",
        method: "get_active_votes",
        description: "if permlink is \"\" then it will return all votes for author",
        params: "string author, string permlink",
        returns: "vector<vote_state>"
    },
    {
        name: "condenser_api.get_active_witnesses()",
        method: "get_active_witnesses",
        description: "",
        params: "",
        returns: "vector< account_name_type >"
    },
    {
        name: "condenser_api.get_block",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_block_header",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_blog",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_blog_authors",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_blog_entries",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_chain_properties ( )",
        method: "get_chain_properties",
        description: "",
        params: "",
        returns: "chain_properties"
    },
    {
        name: "condenser_api.get_comment_discussions_by_payout ( const discussion_query& query )",
        method: "get_comment_discussions_by_payout",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_config () ",
        method: "get_config",
        description: "Retrieve compile-time constants",
        params: "",
        returns: "fc::variant_object "
    },
    {
        name: "condenser_api.get_content ( string author, string permlink )",
        method: "get_content",
        description: "",
        params: "string author, string permlink",
        returns: "discussion"
    },
    {
        name: "condenser_api.get_content_replies ( string parent, string parent_permlink )",
        method: "get_content_replies",
        description: "",
        params: "string parent, string parent_permlink",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_conversion_requests ( const string& account_name )",
        method: "get_conversion_requests",
        description: "",
        params: "const string& account_name",
        returns: "vector<convert_request_api_obj>"
    },
    {
        name: "condenser_api.get_current_median_history_price()",
        method: "get_current_median_history_price",
        description: "",
        params: "",
        returns: "price"
    },
    {
        name: "condenser_api.get_discussions_by_active ( const discussion_query& query )",
        method: "get_discussions_by_active",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_author_before_date ( string author, string start_permlink, time_point_sec before_date, uint32_t limit )",
        method: "get_discussions_by_author_before_date",
        description: "This method is used to fetch all posts/comments by start_author that occur after before_date and start_permlink with up to limit being returned.\n" +
        "If start_permlink is empty then only before_date will be considered. If both are specified the eariler to the two metrics will be used. This\n" +
        "should allow easy pagination.",
        params: "string author, string start_permlink, time_point_sec before_date, uint32_t limit",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_blog ( const discussion_query& query )",
        method: "get_discussions_by_blog",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_cashout",
        method: "get_discussions_by_cashout ( const discussion_query& query )",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_children ( const discussion_query& query )",
        method: "get_discussions_by_children",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_comments ( const discussion_query& query )",
        method: "get_discussions_by_comments",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_created ( const discussion_query& query )",
        method: "get_discussions_by_created",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_feed ( const discussion_query& query )",
        method: "get_discussions_by_feed",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_hot ( const discussion_query& query )",
        method: "get_discussions_by_hot",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_promoted ( const discussion_query& query )",
        method: "get_discussions_by_promoted",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_trending ( const discussion_query& query )",
        method: "get_discussions_by_trending",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_discussions_by_votes ( const discussion_query& query )",
        method: "get_discussions_by_votes",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_dynamic_global_properties ( )",
        method: "get_dynamic_global_properties",
        description: "Retrieve the current @ref dynamic_global_property_object",
        params: "",
        returns: "dynamic_global_property_api_obj"
    },
    {
        name: "condenser_api.get_escrow ( optional< escrow_api_obj > )",
        method: "get_escrow",
        description: "",
        params: "string from, uint32_t escrow_id",
        returns: "optional< escrow_api_obj >"
    },
    {
        name: "condenser_api.get_expiring_vesting_delegations ( string account, time_point_sec from, uint32_t limit = 100 )",
        method: "get_expiring_vesting_delegations",
        description: "",
        params: "string account, time_point_sec from, uint32_t limit = 100",
        returns: "vector< vesting_delegation_expiration_api_obj >"
    },
    {
        name: "condenser_api.get_feed",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_feed_entries",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_feed_history()",
        method: "get_feed_history",
        description: "",
        params: "",
        returns: "feed_history_api_obj"
    },
    {
        name: "condenser_api.get_follow_count",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_followers",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_following",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_hardfork_version()",
        method: "get_hardfork_version",
        description: "",
        params: "",
        returns: "hardfork_version"
    },
    {
        name: "condenser_api.get_key_references",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_market_history",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_market_history_buckets",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_next_scheduled_hardfork()",
        method: "get_next_scheduled_hardfork",
        description: "",
        params: "",
        returns: "scheduled_hardfork"
    },
    {
        name: "condenser_api.get_open_orders ( string owner )",
        method: "get_open_orders",
        description: "",
        params: "string owner",
        returns: "vector<extended_limit_order>"
    },
    {
        name: "condenser_api.get_ops_in_block ( uint32_t block_num, bool only_virtual )",
        method: "",
        description: "Get sequence of operations included/generated within a particular block",
        params: "uint32_t block_num Height of the block whose generated virtual operations should be returned\n"+
                "bool only_virtual Whether to only include virtual operations in returned results (default: true)",
        returns: "vector<applied_operation> sequence of operations included/generated within the block"
    },
    {
        name: "condenser_api.get_order_book ( uint32_t limit = 1000 )",
        method: "get_order_book",
        description: "Gets the current order book for STEEM:SBD market",
        params: "uint32_t limit = 1000 limit Maximum number of orders for each side of the spread to return -- Must not exceed 1000",
        returns: "order_book"
    },
    {
        name: "condenser_api.get_owner_history ( string account )",
        method: "get_owner_history",
        description: "",
        params: "string account",
        returns: "vector< owner_authority_history_api_obj >"
    },
    {
        name: "condenser_api.get_post_discussions_by_payout ( const discussion_query& query )",
        method: "get_post_discussions_by_payout",
        description: "",
        params: "const discussion_query& query",
        returns: "vector<discussion>"
    },
    {
        name: "condenser_api.get_potential_signatures ( const signed_transaction& trx )",
        method: "get_potential_signatures",
        description: "This method will return the set of all public keys that could possibly sign for a given transaction.  This call can\n" +
        "be used by wallets to filter their set of public keys to just the relevant subset prior to calling @ref get_required_signatures\n" +
        "to get the minimum subset.",
        params: "const signed_transaction& trx",
        returns: "set<public_key_type>"
    },
    {
        name: "condenser_api.get_reblogged_by",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_recent_trades",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_recovery_request( string account )",
        method: "get_recovery_request",
        description: "",
        params: "string account",
        returns: "optional< account_recovery_request_api_obj >"
    },
    {
        name: "condenser_api.get_replies_by_last_update ( account_name_type start_author, string start_permlink, uint32_t limit )",
        method: "get_replies_by_last_update",
        description: "Return the active discussions with the highest cumulative pending payouts without respect to category, total\n" +
        "pending payout means the pending payout of all children as well.",
        params: "account_name_type start_author, string start_permlink, uint32_t limit",
        returns: "vector<discussion> "
    },
    {
        name: "condenser_api.get_required_signatures ( const signed_transaction& trx, const flat_set<public_key_type>& available_keys )",
        method: "get_required_signatures",
        description: "This API will take a partially signed transaction and a set of public keys that the owner has the ability to sign for\n" +
                    "and return the minimal subset of public keys that should add signatures to the transaction.",
        params: "const signed_transaction& trx, const flat_set<public_key_type>& available_keys ",
        returns: "set<public_key_type>"
    },
    {
        name: "condenser_api.get_reward_fund ( string name )",
        method: "get_reward_fund",
        description: "",
        params: "string name",
        returns: "reward_fund_api_obj"
    },
    {
        name: "condenser_api.get_savings_withdraw_from ( string account )",
        method: "get_savings_withdraw_from",
        description: "",
        params: "string account",
        returns: "vector< savings_withdraw_api_obj >"
    },
    {
        name: "condenser_api.get_savings_withdraw_to ( string account )",
        method: "get_savings_withdraw_to",
        description: "",
        params: "string account",
        returns: "vector< savings_withdraw_api_obj >"
    },
    {
        name: "condenser_api.get_state ( string path )",
        method: "state get_state",
        description: "This API is a short-cut for returning all of the state required for a particular URL with a single query.",
        params: "string path",
        returns: "state"
    },
    {
        name: "condenser_api.get_tags_used_by_author ( const string& author )",
        method: "get_tags_used_by_author",
        description: "",
        params: "const string& author",
        returns: "vector<pair<string,uint32_t>>"
    },
    {
        name: "condenser_api.get_ticker",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_trade_history",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_transaction ( transaction_id_type trx_id )",
        method: "get_transaction",
        description: "",
        params: "transaction_id_type trx_id",
        returns: "annotated_signed_transaction"
    },
    {
        name: "condenser_api.get_transaction_hex ( const signed_transaction& trx )",
        method: "get_transaction_hex",
        description: "Get a hexdump of the serialized binary form of a transaction",
        params: "const signed_transaction& trx",
        returns: "std::string"
    },
    {
        name: "condenser_api.get_trending_tags",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_version",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_vesting_delegations ( string account, string from, uint32_t limit = 100 )",
        method: "get_vesting_delegations",
        description: "",
        params: "string account, string from, uint32_t limit = 100",
        returns: "vector< vesting_delegation_api_obj >"
    },
    {
        name: "condenser_api.get_volume",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "condenser_api.get_withdraw_routes ( string account, withdraw_route_type type = outgoing )",
        method: "get_withdraw_routes",
        description: "",
        params: "string account, withdraw_route_type type = outgoing",
        returns: "vector< withdraw_route >"
    },
    {
        name: "condenser_api.get_witness_by_account ( string account_name )",
        method: "get_witness_by_account",
        description: "Get the witness owned by a given account",
        params: "string account_name account The name of the account whose witness should be retrieved",
        returns: "fc::optional< witness_api_obj > The witness object, or null if the account does not have a witness"
    },
    {
        name: "condenser_api.get_witness_count()",
        method: "get_witness_count",
        description: "Get the total number of witnesses registered with the blockchain",
        params: "",
        returns: "uint64_t"
    },
    {
        name: "condenser_api.get_witness_schedule()",
        method: "get_witness_schedule",
        description: "",
        params: "",
        returns: "witness_schedule_api_obj"
    },
    {
        name: "condenser_api.get_witnesses ( const vector<witness_id_type>& witness_ids )",
        method: "get_witnesses",
        description: "Get a list of witnesses by ID. This function has semantics identical to @ref get_objects",
        params: "const vector<witness_id_type>& witness_ids witness_ids IDs of the witnesses to retrieve",
        returns: "vector<optional<witness_api_obj>> The witnesses corresponding to the provided IDs"
    },
    {
        name: "condenser_api.get_witnesses_by_vote ( string from, uint32_t limit )",
        method: "get_witnesses_by_vote",
        description: " This method is used to fetch witnesses with pagination ",
        params: "string from, uint32_t limit",
        returns: "vector< witness_api_obj > an array of `count` witnesses sorted by total votes after witness `from` with at most `limit' results."
    },
    {
        name: "condenser_api.lookup_account_names ( const vector<string>& account_names )",
        method: "lookup_account_names",
        description: "Get a list of accounts by name. This function has semantics identical to @ref get_objects",
        params: "const vector<string>& account_names Names of the accounts to retrieve",
        returns: "vector<optional<account_api_obj>> The accounts holding the provided names"
    },
    {
        name: "condenser_api.lookup_accounts ( const string& lower_bound_name, uint32_t limit )",
        method: "lookup_accounts",
        description: "Get names and IDs for registered accounts",
        params: "const string& lower_bound_name Lower bound of the first name to return\n " +
                "uint32_t limit Maximum number of results to return -- must not exceed 1000",
        returns: "set<string> Map of account names to corresponding IDs"
    },
    {
        name: "condenser_api.lookup_witness_accounts ( const string& lower_bound_name, uint32_t limit )",
        method: "lookup_witness_accounts",
        description: "Get names and IDs for registered witnesses",
        params: "const string& lower_bound_name Lower bound of the first name to return, \n" +
                "uint32_t limit Maximum number of results to return -- must not exceed 1000",
        returns: "set<account_name_type> Map of witness names to corresponding IDs"
    },
    {
        name: "condenser_api.verify_account_authority ( const string& name_or_id, const flat_set<public_key_type>& signers )",
        method: "verify_account_authority",
        description: "",
        params: "const string& name_or_id, const flat_set<public_key_type>& signers",
        returns: "bool true if the signers have enough authority to authorize an account"
    },
    {
        name: "condenser_api.verify_authority ( const signed_transaction& trx )",
        method: "verify_authority",
        description: "",
        params: "const signed_transaction& trx",
        returns: "bool true of the @ref trx has all of the required signatures, otherwise throws an exception"
    },
    {
        name: "database_api.find_account_recovery_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_accounts",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_change_recovery_account_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_comments",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_decline_voting_rights_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_escrows",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_limit_orders",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_owner_histories",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_savings_withdrawals",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_sbd_conversion_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_vesting_delegation_expirations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_vesting_delegations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_votes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_withdraw_vesting_routes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.find_witnesses",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_active_witnesses",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_config",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_current_price_feed",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_dynamic_global_properties",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_feed_history",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_hardfork_properties",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_order_book",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_potential_signatures",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_required_signatures",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_reward_funds",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_transaction_hex",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.get_witness_schedule",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_account_recovery_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_accounts",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_change_recovery_account_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_comments",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_decline_voting_rights_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_escrows",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_limit_orders",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_owner_histories",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_savings_withdrawals",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_sbd_conversion_requests",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_vesting_delegation_expirations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_vesting_delegations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_votes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_withdraw_vesting_routes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_witness_votes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.list_witnesses",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.verify_account_authority",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.verify_authority",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "database_api.verify_signatures",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_account_reputations",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_blog",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_blog_authors",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_blog_entries",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_feed",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_feed_entries",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_follow_count",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_followers",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_following",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow_api.get_reblogged_by",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "jsonrpc.get_methods",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "jsonrpc.get_signature",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_market_history",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_market_history_buckets",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_order_book",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_recent_trades",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_ticker",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_trade_history",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "market_history_api.get_volume",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "network_broadcast_api.broadcast_block",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "network_broadcast_api.broadcast_transaction",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "network_broadcast_api.broadcast_transaction_synchronous",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_active_votes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_comment_discussions_by_payout",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_content_replies",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussion ( comment_id_type, uint32_t truncate_body = 0 )",
        method: "get_discussion",
        description: "",
        params: "comment_id_type, uint32_t truncate_body = 0",
        returns: "discussion"
    },
    {
        name: "tags_api.get_discussions_by_active",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_author_before_date",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_blog",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_cashout",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_children",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_comments",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_created",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_feed",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_hot",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_promoted",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_trending",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_discussions_by_votes",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_post_discussions_by_payout",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_replies_by_last_update",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_tags_used_by_author",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "tags_api.get_trending_tags",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "witness_api.get_account_bandwidth ( string account, witness::bandwidth_type type )",
        method: "get_account_bandwidth",
        description: "",
        params: "string account, witness::bandwidth_type type",
        returns: "optional< account_bandwidth_api_obj >"
    },
    {
        name: "witness_api.get_reserve_ratio",
        method: "",
        description: "",
        params: "",
        returns: ""
    }
];