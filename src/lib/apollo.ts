import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl8eg12o12o2g01uecrenbyxn/master', 
    cache: new InMemoryCache(), 
})