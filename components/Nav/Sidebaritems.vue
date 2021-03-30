<template>
  <li>
    <nuxt-link
      :to="link"
      class="pl-3 border-l-4 md:hover:border-theme-red border-theme-black md:hover:bg-theme-black-hover mb-3 cursor-pointer text-gray-200 text-xs md:text-sm leading-3 tracking-normal py-2 hover:text-white flex items-center w-full"
    >
      <div class="flex items-center">
        <img
          :src="require(`@/assets/svg/navicons/${icon}`)"
          alt=""
          width="20"
          height="20"
        />
        <span class="ml-2">{{ title }}</span>
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
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
