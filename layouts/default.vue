<template>
  <v-app>
    <v-app-bar
      app
      flat
      fixed
      class="white justify-space-between px-lg-6"
    >

      <nuxt-link to="/">
        <!-- <v-toolbar-title v-text="title" /> -->
        <v-img
          height="56"
          width="164"
          src="https://communitytools.co/img/logo.svg"
          class="mr-8"
          contain
        ></v-img>
      </nuxt-link>

      <v-spacer class="d-lg-none"></v-spacer>

      <v-row
        horizontal
        class="elevation-0 d-none d-lg-flex"
      >
        <CTButton
          text
          color="black"
        >
          <span class="font-weight-bold">
            Help
          </span>
        </CTButton>
        <CTButton
          text
          color="black"
        >
          <span class="font-weight-bold">
            About
          </span>
        </CTButton>
        <CTButton
          text
          color="black"
        >
          <span class="font-weight-bold">
            Blog
          </span>
        </CTButton>
        <CTButton
          text
          color="black"
        >
          <span class="font-weight-bold">
            Contact
          </span>
        </CTButton>
        <a href="https://intercom.help/communitytools/">
          <CTButton
            text
            color="black"
          >
            <span class="font-weight-bold">
              Help
            </span>
          </CTButton>
        </a>
      </v-row>

      <nuxt-link
        to="/create"
        class="hidden-md-and-down mr-2"
      >
        <CTButton
          contained
          class="elevation-0"
        >
          Create account
        </CTButton>
      </nuxt-link>
      <nuxt-link
        to="/login"
        class="hidden-md-and-down"
      >
        <CTButton
        >
          Log in
        </CTButton>
      </nuxt-link>

      <nuxt-link
        to="/create"
        class="hidden-lg-and-up">
        <CTButton
          contained
        >
          Get started
        </CTButton>
      </nuxt-link>

    </v-app-bar>

    <v-main class="pb-0">
      <!--  -->
      <!-- <v-sheet
        height="200px"
        color="white"
        elevation="1"
        class="fixed cookies"
      >
        <v-img
          :aspect-ratio="16/9"
          :width="width"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          class="mb-4"
          style="margin-top: -100px;"
        ></v-img>
        <div>
          <p class="text-h5">Your data</p>
          <p>Your data</p>
        </div>
        <div>
          <CTButton></CTButton>
          <CTButton></CTButton>
          <CTButton></CTButton>
        </div>
      </v-sheet> -->
      <!-- / -->

      <!-- Cookies -->
      <template>
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
                :width="width"
                src="http://pngimg.com/uploads/cookie/cookie_PNG13696.png"
                class="mt-3 mx-6 mb-0"
                contain
              ></v-img>
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
      </template>
      <!-- /Cookies -->

      <Nuxt />

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
  </v-app>
</template>

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

<script>
export default {
  data: () => ({
    title: 'Community Tools',
    dialog: false,
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  })
}
</script>
