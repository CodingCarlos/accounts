<template>
    <v-stepper non-linear flat>
      <!-- Steps -->
      <v-stepper-header class="elevation-0">
        <v-stepper-step
          editable
          step="1"
        >
          Brand and URL
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
        >
          Customisation
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          editable
        >
          Invite members
        </v-stepper-step>
      </v-stepper-header>
      <!-- /Steps -->
      <!-- Content -->
      <v-col align="center">
        <!--  -->
        <v-col
          lg="4"
          class="pa-4 mb-4 text-left"
        >
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-flex class="pb-2">
                <!-- Section header -->
                <div class="my-6">
                  <h1 class="h3 mb-0">Brand and URL</h1>
                  <p class="subtitle-1">Make your directory stand out by adding your logo and a custom URL</p>
                </div>
                <!-- /Section header -->
                <!-- Form -->
                <v-form class="mb-6">
                  <p class="subheading">Upload your logo</p>
                  <v-img
                    :aspect-ratio="1/1"
                    :width="width"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  ></v-img>
                </v-form>
                <v-form @submit="emailLogin">
                  <p class="subheading mb-0">Choose a name for your community</p>
                  <!-- Email form -->
                  <v-text-field
                    v-model="email"
                    label="Friends of crochet"
                    type="email"
                    name="email"
                    outlined
                    class="mt-3"
                    :class="{ 'd-none': showPass }"
                  ></v-text-field>
                  <!-- / -->
                </v-form>
                <v-form>
                  <p class="subheading mb-0">Choose a URL</p>
                  <v-text-field
                    v-model="email"
                    label="friends-of-crochet.hasa.directory"
                    type="email"
                    name="email"
                    outlined
                    class="mt-3"
                    :class="{ 'd-none': showPass }"
                  ></v-text-field>
                </v-form>
                <!-- /Form -->
              </v-flex>

              <CTButton
                large
                block
                contained
                color="primary"
                @click="e1 = 2"
              >
                Save
              </CTButton>
            </v-stepper-content>

            <v-stepper-content step="2">
              <!--  -->
              <v-flex class="pb-2">
                <!-- Section header -->
                <div class="my-6">
                  <h1 class="h3 mb-0">Customisation</h1>
                  <p class="subtitle-1">Choose which fields are mandatory for members to fill</p>
                </div>
                <!-- /Section header -->
                <!-- Form 1 -->
                <v-container fluid>
                  <!--  -->
                  <p class="subheading">Personal information</p>
                  <!-- / -->
                  <!--  -->
                  <v-row align="center">
                    <v-col cols="6">
                      <v-subheader>
                        Picture
                      </v-subheader>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        v-model="select"
                        item-text="state"
                        item-value="abbr"
                        label="Mandatory"
                        persistent-hint
                        return-object
                        single-line
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="6">
                      <v-subheader>
                        Name
                      </v-subheader>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        v-model="select"
                        item-text="state"
                        item-value="abbr"
                        label="Mandatory"
                        persistent-hint
                        return-object
                        single-line
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="6">
                      <v-subheader>
                        Surname
                      </v-subheader>
                    </v-col>

                    <v-col cols="6">
                      <v-select
                        v-model="select"
                        item-text="state"
                        item-value="abbr"
                        label="Mandatory"
                        persistent-hint
                        return-object
                        single-line
                      ></v-select>
                    </v-col>
                  </v-row>
                  <!-- / -->
                </v-container>
                <!-- /Form 1 -->
                <!-- Form 2 -->
                <v-container
                  class="px-0"
                  fluid
                >
                <p class="subheading">Contact options</p>
                  <v-checkbox
                    v-model="checkbox"
                    label="Contact"
                  >
                  </v-checkbox>
                </v-container>
                <!-- /Form 2 -->
              </v-flex>
              <!-- / -->
              <!-- actions -->
              <CTButton
                large
                block
                contained
                color="primary"
                @click="e1 = 2"
                class="mb-2 elevation-0"
              >
                Save
              </CTButton>
              <CTButton
                large
                block
                outlined
                color="primary"
                @click="e1 = 2"
              >
                Skip
              </CTButton>
              <!-- /actions -->
            </v-stepper-content>

            <v-stepper-content step="3">
              <!--  -->
              <v-flex class="pb-2">
                <!-- Section header -->
                <div class="my-6">
                  <h1 class="h3 mb-0">Invite members</h1>
                  <p class="subtitle-1">Time to open the gates of your amazing community</p>
                </div>
                <!-- /Section header -->
              </v-flex>
              <!-- / -->
              <!--  -->
              <v-form>
                <div>
                  <v-header>Via invitation link</v-header>
                  <v-subheader>Send this link to your members so they can join and create their profile. No worries-you'll be able to manually approve or reject them.</v-subheader>
                </div>
                <v-container
                  id="input-usage"
                  fluid
                >
                  <v-row>
                    <v-col cols="12">
                      <v-input
                        append-icon="mdi-content-copy"
                      >
                        amazingcompany.hasa.directory/usdf-aswe-88ij
                      </v-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <!-- / -->
              <!--  -->
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-header>Via email</v-header>
                <v-subheader>Write or paste email addresses that you want to invite.</v-subheader>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  outlined
                  hint="You can paste multiple emails at once"
                ></v-text-field>
                <!-- <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Validate
                </v-btn> -->
              </v-form>
              <!-- / -->
              <!--  -->
              <v-list subheader>
                <!--  -->
                <v-subheader>From your Google account</v-subheader>
                <!-- / -->
                <!--  -->
                <v-list-item
                  v-for="chat in recent"
                  :key="chat.title"
                >
                  <v-list-item-avatar>
                    <v-img
                      :alt="`${chat.title} avatar`"
                      :src="chat.avatar"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
                      mdi-check
                    </v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
              <!-- / -->
              <v-divider></v-divider>
              <!--  -->
              <CTButton
                contained
                block
                color="primary"
                class="elevation-0 mb-2"
                @click="e1 = 1"
              >
                Send invites
              </CTButton>
              <CTButton block>
                Skip
              </CTButton>
              <!-- / -->
            </v-stepper-content>
          </v-stepper-items>
        </v-col>
        <!-- / -->
      </v-col>
      <!-- /Content -->
    </v-stepper>
</template>

<script>
export default {
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
