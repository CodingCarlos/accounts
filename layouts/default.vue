<template>
  <v-app>
    <v-app-bar
      fixed
      flat
      app
      class="white"
    >

      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>

      <v-row
        horizontal
        class="elevation-0"
      >
        <v-btn
          text
        >
          <span>Product</span>
        </v-btn>

        <v-btn
          text
        >
          <span>Pricing</span>
        </v-btn>

        <v-btn
          text
        >
          <span>About</span>
        </v-btn>

        <v-btn
          text
        >
          <span>Help</span>
        </v-btn>
      </v-row>

      <nuxt-link to="/create">
        <CTButton
        >
          get started
        </CTButton>
      </nuxt-link>

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
