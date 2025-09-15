<template>
  <div class="card col-md-4 my-3">
    <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
  props: {
    post: {
      type: Object
    }
  },
})
</script>

<style>

</style>