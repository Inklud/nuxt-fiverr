<template>
  <div class="mt-2 mb-8 bg-white rounded-b shadow">
    <div class="flex flex-wrap justify-between items-center px-6 py-6">
      <p class="w-full text-lg md:text-xl text-gray-800 font-semibold">
        {{ title }}
      </p>
      <p class="max-w-xl mt-4 text-base text-gray-800">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Coming Soon',
    },
    text: {
      type: String,
      required: false,
    },
  },
}
</script>
