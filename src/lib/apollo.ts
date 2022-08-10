import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6musng70zuy01umanibhzam/master', 
    cache: new InMemoryCache()
})