<template>
  <v-app>
    <v-app-bar
      fixed
      flat
      app
    >
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-btn
        icon
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
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
