import fetch from 'node-fetch';

const resolvers = {
    Query: {
        hello: () => "Hello world!",
        getComment: async (_, { id }) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}/`);
            return response.json();
        },

        getAllComments: async (_, ) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/`);
            return response.json();
        }
    }

}

export default resolvers;

