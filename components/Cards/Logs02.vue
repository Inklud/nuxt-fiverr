<template>
  <div>
    <!-- Start of Public Collection Table -->
    <div
      v-if="!publicCollectionLoading && publicCollections.length >= 1"
      class="mt-2 bg-white rounded-b shadow"
    >
      <div class="flex-wrap justify-between items-center px-6 py-6">
        <p class="inline-block text-lg md:text-xl text-gray-800 font-semibold">
          Cars <br />
          <span class="text-sm"
            >{{ secondaryPublicCollection.length }} entries found</span
          >
        </p>

        <div class="flex flex-wrap float-right">
          <div class="w-2/3">
            <input
              v-model="searchText"
              :disabled="submitted"
              class="border-1 border-gray-400 placeholder-gray-800 focus:border-gray-400 appearance-none h-8 block w-full px-2 leading-snug text-gray-700"
              type="text"
              required
              aria-label="search"
            />
          </div>
          <div class="w-1/3">
            <button
              :disabled="submitted"
              name="submit"
              type="submit"
              class="inline-block h-8 font-medium w-full px-1 leading-none text-white bg-theme-red hover:bg-purple-900"
            >
              <span>Search</span>
            </button>
          </div>
        </div>
        <div class="mt-5 w-full overflow-auto border">
          <table
            class="border-1 border-gray-300 min-w-full bg-white dark:bg-gray-800 rounded"
          >
            <thead class="border-1 border-gray-300">
              <tr
                class="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100"
              >
                <th
                  class="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Name
                  <!-- Arrow down svg -->
                  <svg
                    viewport=" 0 0 7 5"
                    width="7"
                    height="5"
                    class="inline"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .469c0 .127.043.237.13.33l3.062 3.28a.407.407 0 0 0 .616 0L6.87.8A.467.467 0 0 0 7 .468a.467.467 0 0 0-.13-.33A.407.407 0 0 0 6.563 0H.438A.407.407 0 0 0 .13.14.467.467 0 0 0 0 .468z"
                      fill-rule="nonzero"
                      fill="#212529"
                    ></path>
                  </svg>
                  <!-- Arrow up svg -->
                  <!--
                  <svg
                    viewport=" 0 0 7 5"
                    width="7"
                    height="5"
                    class="sc-gGmIRh gZgxNv"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 .469c0 .127.043.237.13.33l3.062 3.28a.407.407 0 0 0 .616 0L6.87.8A.467.467 0 0 0 7 .468a.467.467 0 0 0-.13-.33A.407.407 0 0 0 6.563 0H.438A.407.407 0 0 0 .13.14.467.467 0 0 0 0 .468z"
                      fill-rule="nonzero"
                      fill="#212529"
                    ></path>
                  </svg>
                  -->
                </th>
                <th
                  class="pl-0 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Origin
                </th>
                <th
                  class="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Year
                </th>
                <th
                  class="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4"
                >
                  Horsepower
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in filteredCollection"
                :key="i"
                class="border-1 h-16 border-gray-300 border-t border-b hover:border-indigo-300 hover:shadow-md transition duration-150 ease-in-out"
              >
                <td
                  class="pl-6 pr-6 hover:underline text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ item.Name }}
                </td>

                <td
                  class="pl-0 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ item.Origin }}
                </td>
                <td
                  class="pl-6 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ item.Year }}
                </td>
                <td
                  class="pl-6 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
                >
                  {{ item.Horsepower }}
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Start of pagination-->
          <div
            class="mx-auto container pt-8 flex justify-center sm:justify-end items-center"
          >
            <a
              class="mr-2 sm:mr-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray"
              href="javascript: void(0)"
              @click="prevPage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-left text-gray-800 dark:text-gray-100"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </a>
            <p class="text-gray-800 dark:text-gray-100 fot-normal text-base">
              Page
            </p>
            <label for="selectedPage" class="hidden"></label>
            <input
              id="selectedPage"
              :value="page"
              type="text"
              class="bg-white border-2 dark:bg-gray-800 w-8 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border"
              @keypress.enter="onPageEnter"
            />
            <p class="text-gray-800 dark:text-gray-100 fot-normal text-base">
              of {{ Math.ceil(secondaryPublicCollection.length / perPage) }}
            </p>
            <a
              class="mx-2 sm:mx-5 rounded border border-transparent focus:outline-none focus:border-gray-800 text-gray-600 focus:shadow-outline-gray"
              href="javascript: void(0)"
              @click="nextPage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>
            <label for="totalPage" class="hidden"></label>
            <input
              id="totalPage"
              type="text"
              :value="perPage"
              class="bg-white border-2 dark:bg-gray-800 w-10 px-2 mr-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:shadow-outline-gray focus:border focus:border-indigo-700 font-normal flex items-center text-base border-gray-300 rounded border"
              @keypress.enter="onPerPageEnter"
            />
            <p
              class="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-base"
            >
              per page
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Public Collection Table -->
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM.DD.YYYY hh:mm')
  }
})
export default {
  data() {
    return {
      search: '',
      publicCollectionLoading: true,
      publicCollections: [],
      secondaryPublicCollection: [],
      perPage: 10,
      page: 1,
      searchText: '',
      submitted: false,
    }
  },

  mounted: function () {
    this.loadPublicCollections()
  },

  methods: {
    loadPublicCollections() {
      this.$axios
        .get('https://api.apiblic.com/public/605795575133c8e4836c8f50')
        .then((response) => {
          this.publicCollections = response.data
          this.secondaryPublicCollection = this.publicCollections
          this.publicCollectionLoading = false
        })
        .catch(() => {
          console.log('error loading public collections')
        })
    },

    nextPage() {
      if (
        this.page <
        Math.ceil(this.secondaryPublicCollection.length / this.perPage)
      ) {
        this.page += 1
      }
    },

    prevPage() {
      if (this.page > 1) {
        this.page -= 1
      }
    },

    onPageEnter(e) {
      if (
        Number(e.target.value) <=
          Math.ceil(this.secondaryPublicCollection.length / this.perPage) &&
        Number(e.target.value) > 0
      ) {
        this.page = Number(e.target.value)
      } else {
        alert('This page does not exist')
      }
    },

    onPerPageEnter(e) {
      if (
        Number(e.target.value) <= this.secondaryPublicCollection.length &&
        Number(e.target.value) > 0
      ) {
        this.perPage = Number(e.target.value)
      } else {
        alert('Sorry, we dont have that much items in collection')
      }
    },
  },

  computed: {
    filteredCollection() {
      if (this.secondaryPublicCollection.length) {
        const newArray = []

        for (
          let i = this.page * this.perPage - this.perPage;
          i < this.perPage * this.page;
          i++
        ) {
          if (this.secondaryPublicCollection[i]) {
            newArray.push(this.secondaryPublicCollection[i])
          }
        }
        console.log(this.perPage, this.page)
        return newArray
      } else {
        return []
      }
    },
  },

  watch: {
    searchText(val) {
      if (!val) {
        this.secondaryPublicCollection = this.publicCollections
      } else {
        this.page = 1
        this.secondaryPublicCollection = this.publicCollections.filter(
          (item) => {
            return item.Name.includes(val) || item.Origin.includes(val)
          }
        )
      }
    },
  },
}
</script>
