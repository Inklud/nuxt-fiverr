<template>
<App ref="pageStart" tabindex="-1" style="outline: none" />
</template>

<script>
export default {
   watch: {
    $route() {
        this.$refs.pageStart.$el.focus();
      },
    },
}
</script>