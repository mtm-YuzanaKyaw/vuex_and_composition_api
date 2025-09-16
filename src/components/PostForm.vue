<template>
  <div class="container mt-3">
    <div v-if="post.hasError" class="alert alert-warning alert-dismissible fade show" role="alert">
        <span>All Text fields are required.</span>
    </div>
    <form @submit.prevent="createPost">
        <div class="row mb-3">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="title" v-model="post.title">
            </div>
        </div>
        <div class="row mb-3">
            <label for="body" class="col-sm-2 col-form-label">Post Body</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="body" v-model="post.body">
            </div>
        </div>


        <button type="submit" @click="onClick" :disabled="post.hasError" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>

<script>
import { defineComponent, watchEffect, reactive, onMounted, watch, ref } from 'vue';
import { mapActions, useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    methods: mapActions['addPost', 'updatePost'] ,
    props: {
        formValue: { type: Object },
        isEdit: { type: Boolean }
    },
    setup(props){
        const store = useStore()
        const router = useRouter()
        const post = reactive({ ...props.formValue })
        const isPostEdit = ref(props.isEdit)
        console.log("form post: ", post)

        const createPost = () => {
            console.log(isPostEdit)
            if(isPostEdit.value){
                console.log("update")
                store.dispatch('updatePost',post)
            }
            else{
                store.dispatch('addPost',post)
            }
            console.log("form post: ", post.title)
            post.title = ""
            post.body = ""
            post.hasError = false
        }

        watch(() => props.formValue, (newVal) => {
            Object.assign(post,newVal)
        },
        {deep: true,immediate: true})

        watch(() => props.isEdit, (newVal) =>{
            isPostEdit.value = newVal
            console.log("is edit ", isPostEdit.value)
        }, {deep: true, immediate: true})

        watchEffect(() => {
            if(post.title === "" || post.body === ""){
                post.hasError = true
            }else{
                post.hasError = false
            }
        })

        onMounted(() => {
            if(isPostEdit.value){
                // const oldPost = store.getters.getPostById(Number(route.params.id))
                // console.log(store.getters.getPostById(Number(route.params.id)))
                console.log("old post: ",post)
                // Object.assign(post,oldPost)
            }
            console.log(post)
        })

        return {
            post,
            createPost,
            router
        }
    }
})
</script>

<style>

</style>