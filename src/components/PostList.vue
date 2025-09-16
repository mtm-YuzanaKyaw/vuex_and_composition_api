<template>
  <div class="container">
    <div class="row">
      <h1 class="text-primary text-center">Post List</h1>
      <div class="row col-md-2">
        <button @click="createPost" v-if="!showForm" class="btn btn-primary">New Post</button>
      </div>
    </div>
    <div class="">
      <div class="row">
        <PostForm
        :formValue="form"
        :isEdit="isEdit"
        />
      </div>
      <div class="row">
          <PostCard
          v-for="post in allPosts"
          :post="post"
          :key="post.id"
          @deletePost="removePost"
          @editPost="editPost(post)"
          />
      </div>
    </div>

  </div>

</template>

<script>
import { defineComponent, ref  } from 'vue';
import PostCard from '@/components/PostCard.vue';
import { mapGetters, mapActions, useStore } from 'vuex';
import { useRoute } from 'vue-router';
import PostForm from './PostForm.vue';

export default defineComponent({
    components: { PostCard, PostForm },
    computed: {
        ...mapGetters(['allPosts']),
    },
    methods: {
      ...mapActions(['getPosts','deletePost'])
    },
    mounted() {
      this.getPosts();
    },
    setup(){
      const store = useStore()
      const route = useRoute()
      const showForm = ref(false)
      const isEdit = ref(false)
      const form = ref({ title: "", body: "" })
      const removePost = ((id) => store.dispatch('deletePost', id))

      const createPost = () => { 
        form.value = { title: "", body: "" }
        showForm.value = true
        isEdit.value = false
       }

      const editPost = ((oldPost) => { 
        console.log("old post",oldPost)
        form.value = oldPost
        console.log("form vlaue",form.value)
        showForm.value = true
        isEdit.value = true
        console.log("is edit list", isEdit.value)
      })

      return {
        removePost,
        createPost,
        editPost,
        showForm,
        isEdit,
        form,
        route
      }
    },

})
</script>

<style>

</style>