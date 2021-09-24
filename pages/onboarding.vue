<template>
  <v-row justify="center" align="center" class="fill-height ma-0">
    <!-- Form -->
    <v-col
      sm="12"
      lg="4"
      class="fill-height"
    >
      <v-flex class="pa-4">
        <!-- Section header -->
        <div class="my-6">
          <h1 class="text-h4 mb-0">
            Set up your space
          </h1>
          <p class="subtitle-1">
            Make your directory stand out by adding your logo and a custom URL
          </p>
        </div>
        <!-- /Section header -->
        <!-- Name -->
        <v-form>
          <div>
            <div class="v-stepper__step v-stepper__step--active pa-0">
              <span class="v-stepper__step__step primary">1</span>
              <div class="text-h6 v-stepper__label">
                Name your community
              </div>
            </div>
            <p class="subheading mb-0">
              It's how your members will recognise you
            </p>
          </div>
          <v-text-field
            label="Friends of crochet"
            type="email"
            name="email"
            outlined
            class="mt-3"
          />
        </v-form>
        <!-- /Name -->
        <!-- URL -->
        <v-form>
          <div>
            <div class="v-stepper__step pa-0">
              <span class="v-stepper__step__step primary">2</span>
              <div class="text-h6 v-stepper__label">
                Choose a URL
              </div>
            </div>
            <p class="subheading mb-0">
              Use letters, numbers and dashes
            </p>
          </div>
          <v-text-field
            label="friends-of-crochet.hasa.directory"
            type="email"
            name="email"
            outlined
            class="mt-3"
          />
        </v-form>
        <!-- /URL -->
        <!-- Logo -->
        <v-form class="mb-6 d-flex justify-space-between">
          <div>
            <div class="v-stepper__step pa-0">
              <span class="v-stepper__step__step primary">3</span>
              <div class="text-h6 v-stepper__label">
                Upload your logo
              </div>
            </div>
            <p class="subheading mb-2">
              You'll be able to change it later
            </p>
            <CTButton
              block
              outlined
              color="primary"
            >
              Select image
            </CTButton>
          </div>
          <v-img
            :aspect-ratio="16/9"
            :width="width"
            max-width="156px"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </v-form>
        <!-- /Logo -->
        <nuxt-link to="/launcher">
          <CTButton
            large
            block
            contained
            color="primary"
            @click="e1 = 2"
          >
            Save
          </CTButton>
        </nuxt-link>
      </v-flex>
    </v-col>
    <!-- /Form -->
    <!-- Promo -->
    <v-col
      lg="8"
      class="fill-height d-none d-lg-flex primary justify-center align-center"
    >
      <v-img
        :aspect-ratio="16/9"
        :width="width"
        max-width="600px"
        src="https://ivoriginal.com/images/work/gfs-directory-old.png"
        style="border-radius: 8px;"
      />
    </v-col>
    <!-- /Promo -->
  </v-row>
</template>

<script>
export default {

  layout: 'default',

  data: () => ({
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner'
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors'
      }
    ],
    previous: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
    }]
  })
}
</script>
