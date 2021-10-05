<template>
  <v-row justify="center" align="center" class="fill-height ma-0 align-center text-center">
    <v-col
      sm="12"
      lg="4"
      class="fill-height d-flex flex-column justify-center px-6"
    >
      <v-app-bar
        flat
        class="white justify-space-between"
      >
        <nuxt-link to="/">
          <v-toolbar-title v-text="title" />
        </nuxt-link>
      </v-app-bar>

      <v-form>
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h4">
              Create an account
            </div>
          </div>
          <p class="subheading mb-0 px-6">
            Already have a Community Tools account? Access from the <nuxt-link to="/login">login page</nuxt-link>
          </p>
        </div>
        <!-- /Header -->
        <!-- Google login -->
        <div
          class="mt-4 pa-4"
          style="border: 1px solid var(--v-border-base); border-radius: 4px;"
        >
          <p class="text-h6">
            Use your Google account
          </p>
          <nuxt-link to="/onboarding">
            <CTButton
              large
              block
              contained
              color="primary"
              class="elevation-0"
              @click="login()"
            >
              Sign up with Google
            </CTButton>
          </nuxt-link>
        </div>
        <!-- /Google login -->
        <!--  -->
        <span class="mt-4">or</span>
        <!-- / -->
        <!-- Mail login -->
        <div
          class="mt-4 pa-4"
          style="border: 1px solid var(--v-border-base); border-radius: 4px;"
        >
          <p class="text-h6">
            Use your email
          </p>
          <v-text-field
            label="Your email address"
            type="email"
            name="email"
            outlined
            class="mt-3"
          />
          <nuxt-link to="/onboarding">
            <CTButton
              large
              block
              contained
              color="primary"
              class="elevation-0"
              @click="e1 = 2"
            >
              Sign up with email
            </CTButton>
          </nuxt-link>
        </div>
        <!-- /Mail login -->
        <!--  -->
        <a href="https://intercom.help/communitytools" class="mt-4">
          <p>Forgot your email or password?</p>
        </a>
        <!-- / -->
      </v-form>
      <!-- /Name -->
      <v-footer
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            class="py-4 text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Community Tools</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-col>
    <!-- Promo -->
    <v-col
      lg="8"
      class="fill-height d-none d-lg-flex accent justify-center align-center"
    >
      <v-img
        :aspect-ratio="16/9"
        :width="width"
        max-width="600px"
        src="https://storage.googleapis.com/gfs-directory/pic/y/h/yhg_tToUcmeXZ7oefu-3V.png"
        style="border-radius: 8px;"
      />
    </v-col>
    <!-- /Promo -->
  </v-row>
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'default-2',
  head: {
    title: 'Create account',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Create your account to get the most of your community'
      }
    ]
  },
  created () {
    this.auth()
  },
  methods: {
    auth () {
      if (!this.$fire.auth.currentUser) {
        return false
      }

      return this.$fire.auth.currentUser.getIdToken()
        .then(token => this.$store.dispatch('auth/login', { token }))
        .then(() => {
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Welcome back 🤙'
          })

          if (this.$route.params.redirect) {
            this.$router.replace(this.$route.params.redirect)
          } else {
            this.$router.replace('/launcher')
          }
        })
        .catch((error) => {
          console.error(error.code, error.message)
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Something\'s not working 🥴 Try loggin in again 🔐'
          })
        })
    },
    login () {
      const provider = new firebase.auth.GoogleAuthProvider()
      // const provider = this.$fire.auth.GoogleAuthProvider
      return this.$fire.auth.signInWithPopup(provider)
        .then(this.auth)
        .catch((error) => {
          if (error.code !== 'auth/popup-closed-by-user') {
            this.$store.dispatch('alerts/show', {
              color: 'black',
              text: 'Google authentication is not working 😳 Try again in a few minutes 🤞'
            })
          }
        })
    }
  }
}
</script>
