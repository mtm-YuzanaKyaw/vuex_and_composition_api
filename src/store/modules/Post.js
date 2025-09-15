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
        },

        removePost(state,removeid){
            state.posts = state.posts.filter(post => {
                return post.id !== removeid
            })
        }
    },
    actions: {
        async getPosts({commit}){
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let posts = response.data

            commit('setPosts',posts)
        },

        async deletePost({commit}, removeId){
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${removeId}`)

            commit('removePost',removeId)
        }
    }
}