<template>
  <v-row justify="center" align="center" class="ma-0 align-center text-center">
    <!-- 1 -->
    <v-row
      class="py-6"
    >
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h2 text-left hache-1">
              Help your community members connect
            </div>
          </div>
        </div>
        <!-- /Header -->
        <!-- Google login -->
        <v-row
          class="mt-4 pa-4"
        >
          <nuxt-link to="/create">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0 mr-2"
            >
              Try for free
            </CTButton>
          </nuxt-link>
          <nuxt-link to="/create">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0"
            >
              Sign up with Google
            </CTButton>
          </nuxt-link>
        </v-row>
        <!-- /Google login -->
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
        class="fill-height d-none d-lg-flex justify-center align-center"
      >
        <v-img
          :aspect-ratio="16/9"
          max-width="600px"
          src="https://ivoriginal.com/images/work/gfs-directory/directory-pannels.png"
          style="border-radius: 8px;"
        />
      </v-col>
      <!-- /Promo -->
    </v-row>
    <!-- /1 -->
    <!-- Clients -->
    <v-row>
      <v-col
        cols="3"
        lg="4"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        ></v-img>
      </v-col>

      <v-col
        cols="3"
        lg="4"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-col>

      <v-col
        cols="3"
        lg="4"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-col>
    </v-row>
    <!-- /Clients -->
    <!-- 3 -->
    <v-row class="my-6">
      <!-- Promo -->
      <v-col
        lg="8"
        class="fill-height d-none d-lg-flex justify-center align-center"
      >
        <v-img
          :aspect-ratio="16/9"
          max-width="600px"
          src="https://ivoriginal.com/images/work/gfs-directory/directory-pannels.png"
          style="border-radius: 8px;"
        />
      </v-col>
      <!-- /Promo -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h3 text-left hache-1">
              A community directory
            </div>
            <nuxt-link to="/directory">
              <CTButton
                contained
              >
                More info
              </CTButton>
            </nuxt-link>
          </div>
        </div>
        <!-- /Header -->
      </v-col>
      <!-- /2 -->
    </v-row>
    <!-- /3 -->
    <!-- 4 -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column accent align-center justify-center px-6"
    >
      <v-col
        sm="12"
        lg="6"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h2 text-center hache-1">
              Find out how Google for Startups uses it
            </div>
          </div>
        </div>
        <!-- /Header -->
        <!-- Google login -->
        <div
          class="mt-4 pa-4"
        >
          <nuxt-link to="/create">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0"
            >
              Find out
            </CTButton>
          </nuxt-link>
        </div>
        <!-- /Google login -->
      <!-- /Name -->
      </v-col>
    </v-col>
    <!-- /4 -->
    <!-- 5 -->
    <v-row>
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h3 text-left hache-1">
              Un panel de administración para admins
            </div>
            <nuxt-link to="/directory">
              <CTButton>
                Find out
              </CTButton>
            </nuxt-link>
          </div>
        </div>
        <!-- /Header -->
      </v-col>
      <!-- Promo -->
      <v-col
        lg="8"
        class="fill-height d-none d-lg-flex justify-center align-center"
      >
        <v-img
          :aspect-ratio="16/9"
          max-width="600px"
          src="https://storage.googleapis.com/gfs-directory/pic/X/P/XPbk2ztq25p0BMfZWc2aD.png"
          style="border-radius: 8px;"
        />
      </v-col>
      <!-- /Promo -->
      <!-- /2 -->
    </v-row>
    <!-- /5 -->
    <!-- 6 -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column align-center justify-center px-6"
    >
      <v-col
        sm="12"
        lg="6"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h2 text-center hache-1">
              Get started in 3 steps
            </div>
          </div>
        </div>
        <!-- /Header -->
        <!--  -->
        <v-card
          class="d-flex justify-center mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            justify-center
          </v-card>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            justify-center
          </v-card>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            justify-center
          </v-card>
        </v-card>
        <!-- / -->
      <!-- /Name -->
      </v-col>
    </v-col>
    <!-- /6 -->
    <!-- 7 -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column accent align-center justify-center px-6"
    >
      <v-col
        sm="12"
        lg="6"
        class="d-flex flex-column justify-center px-6"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div class="text-h2 text-center hache-1">
              Activate your community
            </div>
          </div>
        </div>
        <!-- /Header -->
        <!-- Google login -->
        <div
          class="mt-4 pa-4"
        >
          <nuxt-link to="/create">
            <CTButton
              large
              block
              contained
              color="primary"
              @click="e1 = 2"
              class="elevation-0"
            >
              Find out
            </CTButton>
          </nuxt-link>
        </div>
        <!-- /Google login -->
      <!-- /Name -->
      </v-col>
    </v-col>
    <!-- /7 -->
    <!-- Footer -->
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }} CommunityTools</span>
    </v-footer>
    <!-- /Footer -->
  </v-row>
</template>

<script>
export default {
  layout: 'default'
}
</script>
