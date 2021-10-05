<template>
  <v-app>
    <!-- Topbar -->
    <NavigationTopbar />

    <v-main class="pb-0">
      <!-- Cookies -->
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="400"
        >
          <v-card
            class="pt-1 pb-4 px-4"
          >
            <v-img
              :aspect-ratio="16/9"
              src="http://pngimg.com/uploads/cookie/cookie_PNG13696.png"
              class="mt-3 mx-6 mb-0"
              contain
            />
            <v-card-title class="text-h4 word-break-word">
              Before activating your community...
            </v-card-title>
            <v-card-text>This site uses other services (like the chat) to communicate with you and other stuff. You can accept that we share some of your data with these services, configure which data we share and how or reject our cookies.</v-card-text>
            <v-card-actions
              class="flex-column pb-4"
            >
              <CTButton
                color="primary"
                block
                contained
                class="mb-2 elevation-0"
                @click="dialog = false"
              >
                Accept all
              </CTButton>
              <CTButton
                color="primary"
                block
                contained
                class="mb-2 ml-0 elevation-0"
              >
                Reject all
              </CTButton>
              <CTButton
                color="primary"
                block
                class="ml-0"
              >
                Configure
              </CTButton>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- /Cookies -->

      <!--  -->
      <Nuxt />
      <!-- / -->

      <!-- Footer -->
      <v-footer
        color="white"
      >
        <v-row
          justify="center"
          no-gutters
        >
          <CTButton
            v-for="link in links"
            :key="link"
            text
            rounded
            class="my-2 black--text"
          >
            {{ link }}
          </CTButton>
          <v-col
            class="py-4 text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Community Tools</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>

    <AlertBar />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: 'Community Tools',
    dialog: false,
    links: [
      'Product',
      'About',
      'Blog',
      'Contact',
      'Help'
    ]
  })
}
</script>

<style scoped>
  .cookies {
    height: 300px;
    width: 300px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    padding: 8px;
    z-index: 1;
  }
  .word-break-word {
    word-break: break-word;
  }
</style>
