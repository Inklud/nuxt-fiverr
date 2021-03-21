<template>
  <h1 class="text-gray-800 text-xl md:text-2xl font-semibold">{{title}}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>