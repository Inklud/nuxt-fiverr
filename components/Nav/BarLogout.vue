<template>
  <span
    role="link"
    tabindex="0"
    @click="logout"
    @keyup.enter="logout"
    class="menu-h pl-3 pr-3 inline-block border-b-4 hover:border-theme-red-hover border-theme-red hover:bg-theme-red-hover py-4 cursor-pointer text-gray-100 text-sm leading-3 tracking-normal"
    >Log out</span
  >
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
