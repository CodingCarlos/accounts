<template>
  <v-row align="center" class="flex-column">
    <!-- Login -->
    <v-col
      lg="4"
      class="pa-4 my-4 text-center"
      style="border: 1px solid black; border-radius: 4px;"
    >
      <!-- Card -->
        <!-- Logo -->
        <v-img
          contain
          height="48"
          :src="logo"
          class="my-3"
        />
        <!-- /Logo -->

        <!--  Section header -->
        <h1 class="headline" v-if="!forgotPassword">Access {{ title }}</h1>
        <!--  /Section header -->

        <!-- Use your Google account -->
        <v-layout justify-center mt-2 v-if="!forgotPassword">
          <v-flex class="py-3">
            <p class="subheading">Use your Google account</p>
            <CTButton
              large
              color="primary"
              contained
              block
              class="elevation-0 mx-0 br-2"
              @click="login()"
            >
              <v-img
                src="img/g-logo-white.png"
                max-height="16px"
                max-width="16px"
                :aspect-ratio="1"
                class="mr-2"
              />
              Login with Google
            </CTButton>
          </v-flex>
        </v-layout>
        <!-- /Use your Google account -->

        <!-- Separator -->
        <div class="separator hide-gfs" v-if="!forgotPassword">
          <p text-color="black" outline class="ma-0 px-2">or</p>
        </div>
        <!-- /Separator -->

        <!-- Use your email -->
        <v-layout
          v-if="!forgotPassword"
          justify-center
          mt-2
        >
          <v-flex class="pt-3 pb-2">
            <!-- Section header -->
            <p class="subheading mb-0">Use your email and password</p>
            <!-- /Section header -->
            <!-- Form -->
            <v-form @submit="emailLogin">
              <!-- Email form -->
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                name="email"
                outlined
                class="mt-3"
                :class="{ 'd-none': showPass }"
              ></v-text-field>

              <!-- Password form -->
              <v-chip
                outlined
                text-color="black"
                class="mt-2 mb-3"
                :class="{ 'd-none': !showPass }"
                @click="showPass = false"
              >
                <v-avatar>
                  <v-icon>account_circle</v-icon>
                </v-avatar>
                {{ email }}
              </v-chip>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                name="password"
                outline
                :class="{ 'd-none': !showPass }"
                :append-icon="passTypePassword ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (passTypePassword = !passTypePassword)"

              ></v-text-field>

              <v-card-actions class="pa-0 justify-space-between">
                <!-- Email buttons -->
                <CTButton
                  block
                  large
                  color="primary"
                  class="elevation-0 mx-0 br-2 mb-3"
                  :class="{ 'd-none': showPass }"
                  :disabled="email === ''"
                  @click="showPass = true"
                >
                  Login with email
                </CTButton>
                <CTButton
                  flat
                  large
                  color="primary"
                  class="br-2"
                  :class="{ 'd-none': !showPass }"
                  @click="switchForgotPassForm()"
                >
                  <strong>Forgot your password?</strong>
                </CTButton>

                <!-- Password buttons -->
                <CTButton
                  color="primary"
                  class="elevation-0 mx-0 br-2"
                  type="submit"
                  :class="{ 'd-none': !showPass }"
                  :disabled="password === ''"
                  large
                >
                  Login
                </CTButton>
              </v-card-actions>
            </v-form>
            <!-- /Form -->
          </v-flex>
        </v-layout>
        <!-- /Use your email -->
      <!-- /Card -->

      <!-- Trouble loggin in -->
      <CTButton
        block
        large
        flat
        text
        color="primary"
        class="mt-3 br-2"
        href="mailto:help@communitytools.co"
      >
        <strong>Trouble logging in?</strong>
      </CTButton>
      <!-- /Trouble loggin in -->
    </v-col>
    <!-- /Login -->
    <p>
      <nuxt-link to="/onboarding">
        <v-btn>to onboarding</v-btn>
      </nuxt-link>
    </p>
    <!-- Image -->
    <!-- <v-col
      lg="8"
      class="fill-height hidden-md-and-down primary pa-0"
    >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="100%"
        width="100%"
        src="https://storage.googleapis.com/gfs-directory/pic/X/P/XPbk2ztq25p0BMfZWc2aD.png"
      ></v-img>
    </v-col> -->
    <!-- /Image -->
  </v-row>
</template>

<script>
export default {
  layout: 'default'
}
</script>
