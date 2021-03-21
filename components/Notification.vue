<template>
  <div
    class="mt-8 mb-8 bg-lipscore-red rounded-b shadow"
    v-if="collectionDeleted"
  >
    <div class="flex flex-wrap justify-between items-center px-6 py-3">
      <p class="inline-block text-md md:text-lg text-white font-semibold">
        {{ message }}
      </p>
      <div class="inline-block text-right float-right ml-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionDeleted: 'yes',
    }
  },
  name: 'Notification',
  props: {
    message: {
      type: String,
      default: 'Notification',
    },
    message: {
      type: String,
      default: '',
    },
  },
}
</script>
