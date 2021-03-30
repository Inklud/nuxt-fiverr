<template>
  <div>
    <ul class="rounded -mb-6 pt-4 md:hidden">
      <div v-if="isAuthenticated">
        <NavSidebaritems
          v-for="(mobile, title1) in mobiles"
          :key="title1"
          v-bind="mobile"
        />
      </div>
      <ul class="inline-block mr-3" v-if="isAuthenticated">
        <NavSidebaritems
          v-for="(link, title1) in links"
          :key="title1"
          v-bind="link"
        />
        <NavSidebarLogout />
      </ul>

      <ul class="inline-block mr-3" v-if="!isAuthenticated">
        <NavSidebaritems
          v-for="(publiclink, title1) in publiclinks"
          :key="title1"
          v-bind="publiclink"
        />
      </ul>
    </ul>

    <!-- <h6 v-if="isAuthenticated" class="pl-4 pt-6 mt-2 pb-3 text-gray-100">Integrations</h6>-->
    <!-- <ul class="rounded pb-6 pt-6" v-if="isAuthenticated">
    <Sidebaritems
    v-for="(integration, title1) in integrations"
    :key="title1"
    v-bind="integration"
    />
    </ul>-->

    <!--   <h6 class="pl-4 pb-3 text-gray-100">Guides</h6>
    <ul class="rounded pb-6">
    <Sidebaritems
    v-for="(guide, title1) in guides"
    :key="title1"
    v-bind="guide"
    />
    </ul>-->
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
          icon: 'user.svg',
          link: '/profile/',
        },
      ],
      publiclinks: [
        {
          title: 'Login',
          icon: 'login.svg',
          link: '/login/',
        },
        {
          title: 'Register',
          icon: 'register.svg',
          link: '/register/',
        },
      ],
      mobiles: [
        {
          title: 'Projects',
          icon: 'demoSite.svg',
          link: '/',
        },
        {
          title: 'All Logs',
          icon: 'faq.svg',
          link: '/all-logs/',
        },
      ],
      integrations: [
        {
          title: 'Getting Started',
          icon: 'testingGuide.svg',
          link: '/magento/',
        },
      ],
      guides: [
        {
          title: 'Import Guide',
          icon: 'importGuide.svg',
          link: '/import-guide/',
        },
        {
          title: 'Testing Guide',
          icon: 'testingGuide.svg',
          link: '/testing-guide/',
        },
      ],
    }
  },
}
</script>
