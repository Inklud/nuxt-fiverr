<template>
  <div>
    <ul class="rounded -mb-6 pt-4 md:hidden">
      <!-- <ul class="inline-block mr-3" v-if="isAuthenticated">
        <Sidebaritems
        v-for="(link, title1) in links"
        :key="title1"
        v-bind="link"
        />        
      </ul>-->
    </ul>
  </div>
</template>

<script>
export default {
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
          title: 'Demo Site',
          icon: 'demoSite.svg',
          link: '/demo-sites/',
        },
        {
          title: 'Q&A',
          icon: 'faq.svg',
          link: '/questions-and-answers/',
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
