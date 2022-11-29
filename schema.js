const typeDefs = `
    type Query{
        hello: String
        getComment(id: Int!): Comments
        getAllComments: [Comments]
    }

    type Comments{
        postId: Int,
        id: Int,
        name: String,
        email: String,
        body: String
    }
`;

export default typeDefs;