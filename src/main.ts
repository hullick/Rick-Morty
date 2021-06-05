import { createApp } from "vue";
import App from "./App.vue";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createStore } from 'vuex'
import 'es6-promise/auto'

const httpLink = createHttpLink({
    uri: process.env.VUE_APP_GRAPHQL_API,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

// Create a new store instance.
const store = createStore({
    state(){
        return {

        }
    }
});

createApp(App)
    .provide(DefaultApolloClient, apolloClient)
    .use(store)
    .mount("#app");