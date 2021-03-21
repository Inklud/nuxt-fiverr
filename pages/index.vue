<template>
  <main class="max-w-5xl mx-auto px-4 py-6 mb-10">
    <PlaceholderCard
      title="The Challenge"
      text="Below are 2 tables loaded from diffrent sources. Currently public collections show up under private collections, this should not happen since they are public."
    />
    <!-- Start of Public Collection Table -->
    <div
      v-if="!publicCollectionLoading && publicCollections.length >= 1"
      class="mt-2 bg-white rounded-b shadow"
    >
      <div class="flex-wrap justify-between items-center px-6 py-6">
        <p class="w-full text-lg md:text-xl text-gray-800 font-semibold">
          Public Collections ({{ publicCollections.length }})
        </p>
        <div class="mt-5 w-full overflow-auto border">
          <table
            class="border-0 border-gray-300 min-w-full bg-white dark:bg-gray-800 rounded"
          >
            <thead class="border-0 border-gray-300">
              <tr
                class="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100"
              >
                <th
                  class="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Name
                </th>
                <th
                  class="pl-0 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Public URL
                </th>
                <th
                  class="pl-0 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Database
                </th>
                <td class="pr-8">
                  <button
                    class="w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default"
                  >
                    View
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(publicCollection, name) in publicCollections"
                :key="name"
                class="border-0 h-16 border-gray-300 border-t border-b hover:border-indigo-300 hover:shadow-md transition duration-150 ease-in-out"
              >
                <td
                  class="pl-6 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ publicCollections[name].name }}
                </td>
                <td
                  class="pl-0 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  <a
                    class="underline"
                    :href="
                      'https://api.apiblic.com/public/' +
                      publicCollections[name].id
                    "
                    target="_blank"
                    >https://api.apiblic.com/public/{{
                      publicCollections[name].id
                    }}</a
                  >
                </td>
                <td
                  class="pl-0 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ publicCollections[name].database.name }}
                </td>
                <td class="pr-8 text-right">
                  <a
                    class="underline"
                    :href="
                      'https://api.apiblic.com/public/' +
                      publicCollections[name].id
                    "
                    target="_blank"
                  >
                    <button
                      class="bg-lipscore-red transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-lipscore-red-hover rounded text-white px-5 py-1 text-sm"
                    >
                      View
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- End of Public Collection Table -->
    <div @click="notification = ''">
      <Notification
        v-if="notification"
        type="sucess"
        message="This is just a demo - not added"
      />
    </div>
    <!-- Start of Private Collection Table -->
    <div class="mt-8 bg-white rounded-b shadow" v-if="!loading">
      <div
        class="flex-wrap justify-between items-center px-6 py-6"
        v-if="ResultTitle"
      >
        <div v-if="data" aria-live="polite">
          <p class="w-full text-lg md:text-xl text-gray-800 font-semibold">
            Private Collections
            <span v-if="results"
              >({{ results.length - publicCollections.length }})</span
            >
          </p>

          <div v-if="results" class="mt-5 w-full border overflow-auto">
            <table
              class="border-0 border-gray-300 min-w-full bg-white dark:bg-gray-800 rounded"
            >
              <thead class="border-0 border-gray-300">
                <tr
                  class="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100"
                >
                  <th
                    class="pl-8 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                  >
                    Name
                  </th>
                  <td class="pr-8">
                    <button
                      class="w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default"
                    >
                      View
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(result, name) in results"
                  :key="name"
                  class="h-16 border-0 border-gray-300 border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                >
                  <td
                    @click="notification = 'ok'"
                    class="hover:underline pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                  >
                    {{ results[name].name }}
                  </td>
                  <td class="pr-8 text-right">
                    <button
                      @click="notification = 'on'"
                      class="bg-lipscore-red transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-lipscore-red-hover rounded text-white px-5 py-1 text-sm"
                    >
                      Make public
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Private Collection Table -->
  </main>
</template>

<script>
export default {
  head: {
    title: 'Fiverr Tasks',
    meta: [
      {
        name: 'description',
        content: 'Fiverr Tasks',
      },
    ],
  },
  data() {
    return {
      publicCollectionLoading: true,
      publicCollectionDeleted: '',
      publicCollectionName: '',
      publicCollections: '',
      loading: '',
      results: '',
      ResultTitle: '',
      ResultPayload: '',
      dbname: '',
      notification: '',
    }
  },
  mounted: function () {
    this.loadPublicCollections()
    this.loadPrivateCollections()
  },
  methods: {
    loadPublicCollections() {
      this.$axios
        .get('https://api.apiblic.com/public/6057c5455133c8e4836c8f55')
        .then((response) => {
          this.publicCollections = response.data
          this.publicCollectionLoading = false
          console.log(response.data)
        })
        .catch(() => {
          console.log('error loading public collections')
        })
    },
    async loadPrivateCollections() {
      this.loading = true
      try {
        const res = await this.$axios.request({
          url: 'https://api.apiblic.com/public/60579dcd5133c8e4836c8f54',
          method: 'get',
        })
        this.dbname = res.data[0].dbname
        this.results = res.data[0].payload
        this.data = res.data
        this.ResultTitle = res.data[0].ResultTitle
        this.ResultPayload = res.data[0].payload
        this.loading = false
        console.log(res.data)
      } catch (err) {
        this.loading = false
        console.log(err)
        console.log('error loading private collections')
      }
    },
  },
}
</script>
