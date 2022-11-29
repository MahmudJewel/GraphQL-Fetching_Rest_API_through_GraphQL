# Fetching REST API through GraphQL
### Required API
```sh
https://jsonplaceholder.typicode.com/comments/
https://jsonplaceholder.typicode.com/comments/{id}/
```

# Tools
#### Language:
	JavaScript
	GraphQL schema language

	
#### Other libraries / tools:
	"@apollo/server": "^4.2.2",
   	"graphql": "^16.6.0",
    "node-fetch": "^3.3.0",
    "nodemon": "^2.0.20"


# Setup
The first thing to do is to clone the repository:
```sh
$ https://github.com/MahmudJewel/GraphQL-Fetching_Rest_API_through_GraphQL
```
### Back-end
```sh
$ cd GraphQL-Fetching_Rest_API_through_GraphQL
$ npm install
$ npm run gql
```

Hit the port ```sh $ http://localhost:4000/ ```
For getting all comments run 
```sh
query  {
  getAllComments {
    id
    name
    body
  }
}
```
This will fetch all data from the above data.

# Happy Coding
## From ==> Juwel Mahmud

