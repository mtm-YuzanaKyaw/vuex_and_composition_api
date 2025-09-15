<template>
  <div class="container">
    <h1 class="text-primary text-center">Post List</h1>
    <div class="row">
        <PostCard
        v-for="post in allPosts"
        :post="post"
        :key="post.id"
        @deletePost="removePost"
        />
    </div>
  </div>
</template>

<script>
import { defineComponent  } from 'vue';
import PostCard from '@/components/PostCard.vue';
import { mapGetters, mapActions, useStore } from 'vuex';

export default defineComponent({
    components: { PostCard },
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
      const removePost = ((id) => store.dispatch('deletePost', id))

      return {
        removePost
      }
    },

})
</script>

<style>

</style>