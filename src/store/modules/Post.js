import axios from 'axios';
export default{
    state: {
        posts: [],
        post: {}
    },
    getters: {
        allPosts(state){
            return state.posts
        },
        getPostById: (state) => (id) => state.posts.find(p => p.id === id)
    },
    mutations: {
        setPosts(state,posts){
            state.posts = posts
        },

        getPost(state,post){
            state.post = post
        },

        setPost(state,newPost){
            state.posts.unshift(newPost)
        },

        updatePost(state,updatePost){
            const oldPost = state.posts.findIndex(p => p.id === updatePost.id)
            if(oldPost !== -1){
                state.posts[oldPost] = updatePost
            }
        },

        removePost(state,removeId){
            console.log(removeId)
            state.posts = state.posts.filter(post => {
                return post.id !== removeId
            })
        }
    },
    actions: {
        async getPosts({commit}){
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            let posts = response.data

            commit('setPosts',posts)
        },

        async addPost({commit}, newPost) {
            let response = await axios.post("https://jsonplaceholder.typicode.com/posts",newPost)
            console.log(response.data)
            commit('setPost',response.data)
        },

        async updatePost({commit}, post){
            let response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,post)
            console.log(response.data)
            commit('updatePost',response.data)
        },

        async deletePost({commit}, removeId){
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${removeId}`)

            commit('removePost',removeId)
        }
    }
}