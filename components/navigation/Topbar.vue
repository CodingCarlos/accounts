<template>
  <v-app-bar
    app
    flat
    fixed
    class="white justify-space-between px-lg-6"
  >
    <!-- Logo -->
    <NavigationTopbarLogo />

    <v-spacer class="d-lg-none" />

    <!-- Topbar links -->
    <v-row
      horizontal
      class="elevation-0 d-none d-lg-flex"
    >
      <span v-for="(link, i) in links" :key="i">
        <!-- Intenal links -->
        <nuxt-link
          v-if="!link.external"
          :to="link.route"
        >
          <NavigationTopbarButton>
            {{ link.text }}
          </NavigationTopbarButton>
        </nuxt-link>

        <!-- External links -->
        <a v-else :href="link.route">
          <NavigationTopbarButton>
            {{ link.text }}
          </NavigationTopbarButton>
        </a>
      </span>
    </v-row>

    <!-- Account management (create, login, logout) -->
    <NavigationTopbarAccount />
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationTopbar',
  computed: {
    links () {
      return [
        {
          text: 'Product',
          route: '/directory'
        },
        {
          text: 'About',
          route: ''
        },
        {
          text: 'Blog',
          route: ''
        },
        {
          text: 'Contact',
          route: ''
        },
        {
          text: 'Help',
          route: 'https://help.communitytools.co',
          external: true
        }
      ]
    }
  }
}
</script>
