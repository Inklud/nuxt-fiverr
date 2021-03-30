<template>
  <div :class="`is-${type}`" class="relative py-3 pl-4 pr-10 leading-normal text-white rounded-lg" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['danger', 'success'].includes(val)
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
