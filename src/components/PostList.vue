<template>
  <div class="container">
    <h1 class="text-primary text-center">Post List</h1>
    <div class="row">
        <PostCard
        v-for="post in allPosts"
        :post="post"
        :key="post.id"
        class="p-2"
        />
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    components: { PostCard },
    computed: {
        ...mapGetters(['allPosts'])
    },
    methods: {
      ...mapActions(['getPosts'])
    },
    mounted() {
      this.getPosts();
    }
}
</script>

<style>

</style>