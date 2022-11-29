const typeDefs = `
    type Query{
        hello: String
        getComment(id: Int!): Comments
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