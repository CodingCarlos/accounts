<template>
  <v-app>
    <v-app-bar
      fixed
      flat
      app
    >
      <a href="https://communitytools.co">
        <v-toolbar-title v-text="title" />
      </a>
      <v-spacer />
      <v-btn
        icon
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="pb-0">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Community Tools'
    }
  }
}
</script>
