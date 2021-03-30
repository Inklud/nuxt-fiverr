<template>
  <div class="bg-theme-red">
    <nav
      class="max-w-5xl mx-auto h-14 flex items-center lg:items-stretch justify-between relative z-10"
    >
      <NavBarBrand />

      <div class="block md:hidden">
        <button
          @click="menu = !menu"
          @keydown.enter="menu = !menu"
          class="navbar-burger flex items-center py-1 px-2 pl-4 mr-3 text-white"
        >
          <svg
            v-show="menu == true"
            class="fill-current h-6 w-6 text-white"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Open menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
          <svg
            v-show="menu == false"
            class="fill-current h-6 w-6 text-white"
            viewbox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close menu</title>
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
            ></path>
          </svg>
          <span class="ml-2" style="margin-top: -1.5px">Menu</span>
        </button>
      </div>
      <div
        class="hidden navbar-menu md:flex md:flex-grow md:items-center w-full md:w-auto"
      >
        <!-- Desktop menu -->
        <div class="md:mr-auto -ml-1 font-medium">
          <div v-if="isAuthenticated">
            <NavBaritems
              v-for="(main, title1) in mains"
              :key="title1"
              v-bind="main"
            />
          </div>
        </div>
        <div class="font-medium">
          <ul
            class="inline-block mr-3"
            style="padding-right: 1px"
            v-if="isAuthenticated"
          >
            <NavBaritems
              v-for="(link, title1) in links"
              :key="title1"
              v-bind="link"
            />
            <NavBarLogout />
          </ul>
          <ul class="inline-block mr-3" v-if="!isAuthenticated">
            <NavBaritems
              v-for="(publiclink, title1) in publiclinks"
              :key="title1"
              v-bind="publiclink"
            />
          </ul>
        </div>
      </div>
    </nav>
    <nav>
      <!-- Mobile menu -->
      <div
        v-show="menu == false"
        @click="menu = !menu"
        @keydown.enter="menu = !menu"
        class="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto"
        style="background: #222d32"
      >
        <div class="text-gray-100 md:hidden">
          <NavMenu />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  data() {
    return {
      links: [
        {
          title: 'My profile',
          icon: 'demoSite.svg',
          link: '/profile/',
        },
      ],
      mains: [
        {
          title: 'Projects',
          icon: 'demoSite.svg',
          link: '/',
        },
        {
          title: 'All Logs',
          icon: 'demoSite.svg',
          link: '/all-logs/',
        },
      ],
      publiclinks: [
        {
          title: 'Login',
          icon: 'demoSite.svg',
          link: '/login/',
        },
        {
          title: 'Register',
          icon: 'faq.svg',
          link: '/register/',
        },
      ],
      menu: true,
    }
  },
}
</script>

<style>
@media only screen and (max-width: 335px) {
  #docs {
    display: none;
  }
}

@media only screen and (max-width: 280px) {
  #brand {
    display: none;
  }
}

.nuxt-link-exact-active {
  border-color: #f3f4f6 !important;
}
</style>
