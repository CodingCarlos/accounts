<template>
  <v-app>

    <v-main class="pb-0">

      <!--  -->
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
      <!-- / -->

      <Nuxt />
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
  data () {
    return {
      title: 'Community Tools',
      dialog: false
    }
  }
}
</script>
