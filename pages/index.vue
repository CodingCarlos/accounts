<template>
  <v-row justify="center" align="center" class="fill-height ma-0 align-center text-center">
    <v-col
      sm="12"
      lg="4"
      class="fill-height d-flex flex-column justify-center px-6"
    >
      <v-form>
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h4">
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
          <nuxt-link to="/launcher">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0"
            >
              Login with Google
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
            :class="{ 'd-none': showPass }"
          />
          <nuxt-link to="/launcher">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0"
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
      <!-- Footer -->
      <!-- <v-footer
        app
      >
        <span>&copy; {{ new Date().getFullYear() }} CommunityTools</span>
      </v-footer> -->
      <!-- /Footer -->
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
        src="https://storage.googleapis.com/gfs-directory/pic/X/P/XPbk2ztq25p0BMfZWc2aD.png"
        style="border-radius: 8px;"
      />
    </v-col>
    <!-- /Promo -->
  </v-row>
</template>

<script>
export default {
  layout: 'default'
}
</script>
