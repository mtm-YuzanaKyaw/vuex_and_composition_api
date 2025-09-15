import axios from 'axios';
export default{
    state: {
        posts: []
    },
    getters: {
        allPosts(state){
            return state.posts
        }
    },
    mutations: {
        setPosts(state,posts){
            state.posts = posts
        }
    },
    actions: {
        async getPosts({commit}){
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let posts = response.data
            console.log(posts)

            commit('setPosts',posts)
        }
    }
}