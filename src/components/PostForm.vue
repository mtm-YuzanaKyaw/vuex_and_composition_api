<template>
  <div class="container">
    <form>
        <div class="row mb-3">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="title">
            </div>
        </div>
        <div class="row mb-3">
            <label for="body" class="col-sm-2 col-form-label">Post Body</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="body">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>