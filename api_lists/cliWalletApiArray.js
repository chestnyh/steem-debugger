module.exports = [
    {
        name: "about()",
        method: "about",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "cancel_order(string owner, uint32_t orderid, bool broadcast",
        method: "cancel_order",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "cancel_transfer_from_savings(string from, uint32_t request_id, bool broadcast)",
        method: "cancel_transfer_from_savings",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "challenge(string challenger, string challenged, bool broadcast)",
        method: "challenge",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "change_recovery_account(string owner, string new_recovery_account, bool broadcast)",
        method: "change_recovery_account",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "claim_reward_balance(string account, asset reward_steem, asset reward_sbd, asset reward_vests, bool broadcast)",
        method: "claim_reward_balance",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "convert_sbd(string from, asset amount, bool broadcast)",
        method: "convert_sbd",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "create_account(string creator, string new_account_name, string json_meta, bool broadcast)",
        method: "create_account",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "create_account_delegated(string creator, asset steem_fee, asset delegated_vests, string new_account_name, string json_meta, bool broadcast)",
        method: "create_account_delegated",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "create_account_with_keys(string creator, string newname, string json_meta, public_key_type owner, public_key_type active, public_key_type posting, public_key_type memo, bool broadcast)",
        method: "create_account_with_keys",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "create_account_with_keys_delegated(string creator, asset steem_fee, asset delegated_vests, string newname, string json_meta, public_key_type owner, public_key_type active, public_key_type posting, public_key_type memo, bool broadcast)",
        method: "create_account_with_keys_delegated",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "create_order(string owner, uint32_t order_id, asset amount_to_sell, asset min_to_receive, bool fill_or_kill, uint32_t expiration, bool broadcast)",
        method: "create_order",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "decline_voting_rights(string account, bool decline, bool broadcast)",
        method: "decline_voting_rights",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "decrypt_memo(string memo)",
        method: "decrypt_memo",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "delegate_vesting_shares(string delegator, string delegatee, asset vesting_shares, bool broadcast)",
        method: "delegate_vesting_shares",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "escrow_approve(string from, string to, string agent, string who, uint32_t escrow_id, bool approve, bool broadcast)",
        method: "escrow_approve",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "escrow_dispute(string from, string to, string agent, string who, uint32_t escrow_id, bool broadcast)",
        method: "escrow_dispute",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "escrow_release(string from, string to, string agent, string who, string receiver, uint32_t escrow_id, asset sbd_amount, asset steem_amount, bool broadcast)",
        method: "escrow_release",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "escrow_transfer(string from, string to, string agent, uint32_t escrow_id, asset sbd_amount, asset steem_amount, asset fee, time_point_sec ratification_deadline, time_point_sec escrow_expiration, string json_meta, bool broadcast)",
        method: "escrow_transfer",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "follow(string follower, string following, set<string> what, bool broadcast)",
        method: "follow",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_account(string account_name)",
        method: "get_account",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_account_history(string account, uint32_t from, uint32_t limit)",
        method: "get_account_history",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_active_witnesses()",
        method: "get_active_witnesses",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_block(uint32_t num)",
        method: "get_block",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_conversion_requests(string owner)",
        method: "get_conversion_requests",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_encrypted_memo(string from, string to, string memo)",
        method: "get_encrypted_memo",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_feed_history()",
        method: "get_feed_history",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_inbox(string account, fc::time_point newest, uint32_t limit)",
        method: "get_inbox",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_miner_queue()",
        method: "get_miner_queue",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_open_orders(string accountname)",
        method: "get_open_orders",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "get_ops_in_block(uint32_t block_num, bool only_virtual)",
        method: "get_ops_in_block",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },
    {
        name: "",
        method: "",
        description: "",
        params: "",
        returns: ""
    },

    [
        "get_order_book",
        "get_order_book(uint32_t limit)"],
    [
        "get_outbox",
        "get_outbox(string account, fc::time_point newest, uint32_t limit)"],
    [
        "get_owner_history",
        "get_owner_history(string account)"],
    [
        "get_private_key",
        "get_private_key(public_key_type pubkey)"],
    [
        "get_private_key_from_password",
        "get_private_key_from_password(string account, string role, string password)"],
    [
        "get_prototype_operation",
        "get_prototype_operation(string operation_type)"],
    [
        "get_state",
        "get_state(string url)"],
    [
        "get_transaction",
        "get_transaction(transaction_id_type trx_id)"],
    [
        "get_withdraw_routes",
        "withdraw_routes(string account, withdraw_route_type type)"],
    [
        "get_witness",
        "get_witness(string owner_account)"],
    [
        "gethelp",
        "gethelp(const string & method)"],
    [
        "help",
        "help()"],
    [
        "import_key",
        "import_key(string wif_key)"],
    [
        "info",
        "info()"],
    [
        "is_locked",
        "is_locked()"],
    [
        "is_new",
        "is_new()"],
    [
        "list_accounts",
        "list_accounts(const string & lowerbound, uint32_t limit)"],
    [
        "list_keys",
        "list_keys()"],
    [
        "list_my_accounts",
        "list_my_accounts()"],
    [
        "list_witnesses",
        "list_witnesses(const string & lowerbound, uint32_t limit)"],
    [
        "load_wallet_file",
        "load_wallet_file(string wallet_filename)"],
    [
        "lock",
        "lock()"],
    [
        "network_add_nodes",
        "network_add_nodes(const vector<string> & nodes)"],
    [
        "network_get_connected_peers",
        "network_get_connected_peers()"],
    [
        "normalize_brain_key",
        "normalize_brain_key(string s)"],
    [
        "post_comment",
        "post_comment(string author, string permlink, string parent_author, string parent_permlink, string title, string body, string json, bool broadcast)"],
    [
        "prove",
        "prove(string challenged, bool broadcast)"],
    [
        "publish_feed",
        "publish_feed(string witness, price exchange_rate, bool broadcast)"],
    [
        "recover_account",
        "recover_account(string account_to_recover, authority recent_authority, authority new_authority, bool broadcast)"],
    [
        "request_account_recovery",
        "request_account_recovery(string recovery_account, string account_to_recover, authority new_authority, bool broadcast)"],
    [
        "save_wallet_file",
        "save_wallet_file(string wallet_filename)"],
    [
        "send_private_message",
        "send_private_message(string from, string to, string subject, string body, bool broadcast)"],
    [
        "serialize_transaction",
        "serialize_transaction(signed_transaction tx)"],
    [
        "set_password",
        "set_password(string password)"],
    [
        "set_transaction_expiration",
        "set_transaction_expiration(uint32_t seconds)"],
    [
        "set_voting_proxy",
        "set_voting_proxy(string account_to_modify, string proxy, bool broadcast)"],
    [
        "set_withdraw_vesting_route",
        "set_withdraw_vesting_route(string from, string to, uint16_t percent, bool auto_vest, bool broadcast)"],
    [
        "sign_transaction",
        "sign_transaction(signed_transaction tx, bool broadcast)"],
    [
        "suggest_brain_key",
        "suggest_brain_key()"],
    [
        "transfer",
        "transfer(string from, string to, asset amount, string memo, bool broadcast)"],
    [
        "transfer_from_savings",
        "transfer_from_savings(string from, uint32_t request_id, string to, asset amount, string memo, bool broadcast)"],
    [
        "transfer_to_savings",
        "transfer_to_savings(string from, string to, asset amount, string memo, bool broadcast)"],
    [
        "transfer_to_vesting",
        "transfer_to_vesting(string from, string to, asset amount, bool broadcast)"],
    [
        "unlock",
        "unlock(string password)"],
    [
        "update_account",
        "update_account(string accountname, string json_meta, public_key_type owner, public_key_type active, public_key_type posting, public_key_type memo, bool broadcast)"],
    [
        "update_account_auth_account",
        "update_account_auth_account(string account_name, authority_type type, string auth_account, weight_type weight, bool broadcast)"],
    [
        "update_account_auth_key",
        "update_account_auth_key(string account_name, authority_type type, public_key_type key, weight_type weight, bool broadcast)"],
    [
        "update_account_auth_threshold",
        "update_account_auth_threshold(string account_name, authority_type type, uint32_t threshold, bool broadcast)"],
    [
        "update_account_memo_key",
        "update_account_memo_key(string account_name, public_key_type key, bool broadcast)"],
    [
        "update_account_meta",
        "update_account_meta(string account_name, string json_meta, bool broadcast)"],
    [
        "update_witness",
        "update_witness(string witness_name, string url, public_key_type block_signing_key, const chain_properties & props, bool broadcast)"],
    [
        "vote",
        "vote(string voter, string author, string permlink, int16_t weight, bool broadcast)"],
    [
        "vote_for_witness",
        "vote_for_witness(string account_to_vote_with, string witness_to_vote_for, bool approve, bool broadcast)"],
    [
        "withdraw_vesting",
        "withdraw_vesting(string from, asset vesting_shares, bool broadcast)"]
];