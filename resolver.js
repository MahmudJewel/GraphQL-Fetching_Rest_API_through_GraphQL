import fetch from 'node-fetch';

const resolvers = {
    Query: {
        hello: () => "Hello world!",
        getComment: async (_, { id }) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}/`);
            return response.json();
        }
    }

}

export default resolvers;