<template>
  <li class="inline-block">
    <nuxt-link
      style="padding-bottom: 18px"
      :to="link"
      class="menu-h pl-3 pr-3 inline-block border-b-4 hover:border-theme-red-hover border-theme-red hover:bg-theme-red-hover py-4 cursor-pointer text-gray-100 text-sm leading-3 tracking-normal"
    >
      <div class="flex items-center -mb-1">
        <span class="font-semibold">{{ title }}</span>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
