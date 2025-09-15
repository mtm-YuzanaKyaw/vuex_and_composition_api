<template>
  <div class="card col-md-4 my-3">
    <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <button class="btn btn-primary" @click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent ({
  props: {
    post: {
      type: Object
    }
  },

  emits: ['deletePost'],
  setup(props, context){
    const date = computed(() =>{
      console.log(props.post)
      if(!props.post) return
      return props.post
    })

    const deletePost = () => {
      context.emit('deletePost', props.post.id)
    }

    return {
      date,
      deletePost
    }
  }
})
</script>

<style>

</style>