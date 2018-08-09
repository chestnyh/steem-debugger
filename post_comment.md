To leave comment or post you must be authorized in cli_wallet soft
Post and comment is the same essence.

You can create post once a minute

### Post or comment has same data field:

#### 1. "author" (required)
    post - author of the post
        (string)
        (max: 16 bytes )
        (author must be created)
    comment - author of the comment
        (string)
        (max: 16 bytes)
        (author must be created)
#### 2. "permlink" (required)
    post - permanent link of the post
        (string)
        (max: 256 bytes)
    comment - permanent link of the comment
        (string)
        (max: 256 bytes)
#### 3. "parent_author"
    post - empty field
        (string)
        (max: 16 bytes)
    comment - name of the author who create post and this comment will be bound with it.
        (string)
        (max: 16 bytes)
        (author must be created)
#### 4. "parent_permlink"
    post - it may be category of the post
        (string)
        (max: 256 bytes)
    comment - There should be a link to the post or the parent comment to which this comment is bound
        (string)
        (max: 256 bytes)
#### 5. "title"
    post - must be title of the post
        (string)
        (max: 256 bytes)
    comment - may be empty string, because comment don't have a title
        (string)
        (max: 256 bytes)
#### 6. "body"
    post - post body (string)
        TESTNET (size > 0 && size <= 131072 - 256)(max: body + json == 131072 - 256)
        MAINNET (size > 0 && size <= 65536 - 256)(max: body + json == 65536 - 256)
    comment - comment text (string)
        TESTNET (size > 0 && size <= 131072 - 256)(max: body + json == 131072 - 256)
        MAINNET (size > 0 && size <= 65536 - 256)(max: body + json == 65536 - 256)
#### 7. "json"
    post - json metadata of the post (json format string in arbitrary format)(max: body + json == 65536 - 256)
        common format in steam network:
        {
            "tags":["some_tag_1","some_tag_2", .... "some_tag_5"], // list of tags (five is recommended amount)
            "users":["username", "username2", .....], //list of mentioned users in post
            "image":["full_image_url_1", "full_image_url_2", .....], // list of images urls in post
            "links":["some_link_1","some_link_2", ......], // list of links in post
            "app":"steemit/0.1", // app which add this post
            "format":"markdown" // format of created text, may be "markdown" or "html"
         }
    comment - json metadata (string in json format)(max: body + json == 65536 - 256)
        {
            "tags":["tag_of_parent_post"], // bounded post category
            "app":"steemit/0.1" // app this post add with
        }

#### Example:
```{
    "parent_author": "",
    "parent_permlink": "teamaustralia",
    "author": "halfhead",
    "permlink": "this-next-one-is-dedicated-to-team-australia-drinking-beers-with-the-milky-way-in-australia",
    "title": "This next one is dedicated to Team Australia! Drinking beers with the Milky Way in Australia!!",
    "body": "Drinking a beer with the Milky Way (or the 80, 000,000,000 suns...\n\n![02 beers with the suns.JPG](https://steemitimages.com/DQmWhVd8Z3wqSKzdrqcgx2gQWbgqMa3AZernpDMzoyNNGFP/02%20beers%20with%20the%20suns.JPG) :) \n\nGO TEAM AUSTRALIA GO!!!!!!!!! I really should edit this picture.... could look really good :) \n@Choogirl",
"json_metadata": "{\"tags\":[\"teamaustralia\",\"australia\",\"beer\",\"life\",\"astrophotgraphy\"],\"users\":[\"choogirl\"],\"image\":[\"https://steemitimages.com/DQmWhVd8Z3wqSKzdrqcgx2gQWbgqMa3AZernpDMzoyNNGFP/02%20beers%20with%20the%20suns.JPG\"],\"app\":\"steemit/0.1\",\"format\":\"markdown\"}"
}```


###### You can make some research in http://159.89.101.56:3000/index.html



"operations": [
                    [
                        "comment",
                        {
                            "parent_author": "",
                            "parent_permlink": "steemit",
                            "author": "ratel-ch",
                            "permlink": "is-there-some-full-or-official-steem-api-documentation-in-the-internet",
                            "title": "Is there some full or official Steem Api Documentation in the Internet ?",
                            "body": "@@ -318,15 +318,136 @@\n sp;%3C/p%3E%0A\n+%3Cp%3EFor example, I can't find infornation how tecnicaly steem post update works. And I create this post to check it))%3C/p%3E%0A\n %3C/html%3E\n",
                            "json_metadata": "{\"tags\":[\"steemit\",\"blockchain\",\"documentation\",\"help\"],\"app\":\"steemit/0.1\",\"format\":\"html\"}"
                        }
                    ]
                ],


"operations": [
                    [
                        "comment",
                        {
                            "parent_author": "",
                            "parent_permlink": "steemit",
                            "author": "ratel-ch",
                            "permlink": "is-there-some-full-or-official-steem-api-documentation-in-the-internet",
                            "title": "Is there some full or official Steem Api Documentation in the Internet ?",
                            "body": "<html>\n<p>Hello steemians. I'm developer. We would like to create some platform on Steem Blockchain. But I can't find good resource with full steem documentation? I take some info from one resouse, some info from anoter. It is not easy. Can somebody give me advice about most powerful steem documentation resource?&nbsp;</p>\n</html>",
                            "json_metadata": "{\"tags\":[\"steemit\",\"blockchain\",\"documentation\",\"help\"],\"app\":\"steemit/0.1\",\"format\":\"html\"}"
                        }
                    ]
                ],


