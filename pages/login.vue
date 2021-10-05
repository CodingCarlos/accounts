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
          <v-toolbar-title text="Community tools" />
        </nuxt-link>
      </v-app-bar>
      <v-form>
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h4 hache-1">
              Welcome back
            </div>
          </div>
          <p class="subheading mb-0 px-6">
            If you don't have a Community Tools account, you can <nuxt-link to="/create">create one</nuxt-link> in just 2 minutes
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
          <CTButton
            large
            block
            contained
            color="primary"
            class="elevation-0"
            @click="login()"
          >
            Login with Google
          </CTButton>
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
          <nuxt-link to="/launcher">
            <CTButton
              large
              block
              contained
              color="primary"
              class="elevation-0"
              @click="login()"
            >
              Login with email
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
        max-width="600px"
        src="https://storage.googleapis.com/gfs-directory/pic/X/P/XPbk2ztq25p0BMfZWc2aD.png"
        style="border-radius: 8px;"
      />
    </v-col>
    <!-- /Promo -->
  </v-row>
</template>

<script>
import authMixin from '@/pages/mixins/auth'

export default {
  mixins: [authMixin],
  layout: 'default-2',
  head: {
    title: 'Login',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Access your account to get the most of your community'
      }
    ]
  },
  created () {
    this.auth()
  }
}
</script>
