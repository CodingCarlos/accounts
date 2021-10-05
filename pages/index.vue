<template>
  <v-row justify="center" align="center" class="ma-0 align-center text-center">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">

    <!-- Value prop -->
    <v-row
      class="py-6 my-6 justify-center"
    >
      <v-col
        class="d-flex flex-column justify-center pt-8"
        lg="9"
        sm="12"
      >
        <!-- Header -->
        <div>
          <div class="pa-0">
            <div
              class="text-h2 text-sm-h5 text-center font-weight-black"
            >
              <span>Tools</span> to help your community members <span>connect</span>
            </div>
          </div>
        </div>
        <!-- /Header -->
        <!-- Login -->
        <v-row
          class="mt-4 pa-4 justify-center align-center"
        >
          <!-- <nuxt-link to="/onboarding"> -->
            <CTButton
              large
              contained
              color="primary"
              class="elevation-0"
              @click="login()"
            >
              Sign up with Google
            </CTButton>
          <!-- </nuxt-link> -->
          <span class="mx-3">or</span>
          <nuxt-link
            to="/create"
            class="text-decoration-none"
          >
            <CTButton
              large
              block
              color="primary"
              class="elevation-0 mr-2"
            >
              Use your mail
            </CTButton>
          </nuxt-link>
        </v-row>
        <!-- /Login -->
      </v-col>
    </v-row>
    <!-- /Value prop -->

    <!-- Clients -->
    <div
      class="mx-lg-6"
    >
      <v-row
        class="justify-center px-6"
      >
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/google.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/startupweekend.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/gazaskygeeks.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/correoslabs.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/tetuanvalley.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            src="https://communitytools.co/img/clients/seedrocket.png"
          />
        </v-col>
      </v-row>
    </div>
    <!-- /Clients -->

    <!-- Directory -->
    <v-row
      class="mt-6 py-6 justify-center flex-xs-column-reverse"
      style="background: #e8f0fe; width: 100%;"
    >
      <!-- Copy -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center"
      >
        <div class="pa-0 align-left text-left column">
          <div class="text-h4 text-left pl-lg-6 font-weight-bold">
            Meet the Community Directory, where you can <span style="color: var(--v-primary-base);">filter</span> people and companies by skills and verticals, see who's offering <span style="color: var(--v-primary-base);">help</span> and who's <span style="color: var(--v-primary-base);">open to work</span> or hiring!
          </div>
        </div>
      </v-col>
      <!-- /Copy -->
      <!-- Product image -->
      <v-col
        sm="12"
        lg="6"
        class="fill-height justify-center align-center"
      >
        <v-img
          contain
          src="img/directory_multi.png"
        />
      </v-col>
      <!-- /Product image -->
      <!-- /2 -->
    </v-row>
    <!-- /Directory -->

    <!-- Admin -->
    <v-row
      class="py-6 mb-2 justify-center"
      style="width: 100%;"
    >
      <!-- Product image -->
      <v-col
        sm="12"
        lg="6"
        class="fill-height d-lg-flex justify-center align-center"
      >
        <v-img
          contain
          max-width="640px"
          src="img/directory_multi.png"
        />
      </v-col>
      <!-- /Product image -->
      <!-- Copy -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center"
      >
        <div>
          <div class="pa-0 align-left text-left column">
            <div class="text-h4 text-left font-weight-bold">
              As a Community Builder, you can <span style="color: var(--v-primary-base);">manage</span> your community, <span style="color: var(--v-primary-base);">publish</span> relevant updates and put your <span style="color: var(--v-primary-base);">data</span> to work for you, all from your Dashboard.
            </div>
            <!-- <nuxt-link to="/directory">
              <CTButton
                contained
              >
                More info
              </CTButton>
            </nuxt-link> -->
          </div>
        </div>
      </v-col>
      <!-- /Copy -->
    </v-row>
    <!-- /Admin -->

    <!-- Getting Started -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column align-center justify-center px-6 py-6"
      style="background: #e8f0fe;"
    >
      <!-- Header -->
      <v-col
        sm="12"
        lg="8"
        class="d-flex flex-column justify-center px-6 py-6"
      >
        <div>
          <div class="pa-0 mb-4 justify-center">
            <div class="text-h3 text-center font-weight-bold">
              <span>Need help importing your members? Don't know how to spark connections? <span style="color: var(--v-primary-base);">We're here to help.</span></span>
            </div>
            <br>
            <div class="text-h4 text-center">
              <span>Click on that shiny blue bubble at the right bottom and we'll be there for you</span>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-end"
          style="margin-top: -56px;"
        >
          <v-img
            max-width="124px"
            src="img/arrow.svg"
          />
        </div>
      </v-col>
      <!-- /Header -->
    </v-col>
    <!-- /Getting Started -->

    <!-- Slack -->
    <v-row
      class="mt-6 py-6 justify-center"
      style="width: 100%;"
    >
      <!-- Copy -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center"
      >
        <div class="pa-0 align-left text-left column">
          <div class="text-h4 text-left pl-lg-6 font-weight-bold">
            <v-chip
              class="mb-2"
              label
              style="background: #e8f0fe;"
            >
              <span
                style="color: var(--v-primary-base);"
              >
                Coming soon
              </span>
            </v-chip>
            <br>
            <span>
              Connect your Directory to <span style="color: var(--v-primary-base);">Slack</span> or <span style="color: var(--v-primary-base);">Discord</span> to get custom matches, searching members from a channel and more.
            </span>
          </div>
          <!-- <nuxt-link to="/directory">
            <CTButton
              contained
            >
              More info
            </CTButton>
          </nuxt-link> -->
        </div>
      </v-col>
      <!-- /Copy -->
      <!-- Product image -->
      <v-col
        lg="6"
        class="fill-height justify-center align-center"
      >
        <v-img
          contain
          src="img/directory_multi.png"
        />
      </v-col>
      <!-- /Product image -->
      <!-- /2 -->
    </v-row>
    <!-- /Slack -->

    <!-- GFS -->
    <!-- <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column align-center justify-center px-6 py-6"
      style="background: var(--v-primary-lighten5);"
    >
      <v-col
        sm="12"
        lg="12"
        class="d-flex flex-column justify-center px-6"
      >
        <div>
          <div class="pa-0 justify-center">
            <div class="text-h3 text-center hache-1">
              <strong>Trusted by<br><span style="color: var(--v-primary-base);">Google for Startups</span><br>in 7 countries</strong>
            </div>
          </div>
        </div>
      </v-col>
    </v-col> -->
    <!-- /GFS -->

    <!-- GFS -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column align-center justify-center px-6 py-6"
      style="background: #e8f0fe; margin-bottom: -124px !important; padding-bottom: 80px !important;"
    >
      <!-- Header -->
      <v-col
        sm="12"
        lg="7"
        class="d-flex flex-column justify-center px-6 mb-6 pt-6"
      >
        <div>
          <div class="pa-0 mb-4 justify-center">
            <div class="text-h3 text-center hache-1">
              <strong>Trusted by companies like <span style="color: var(--v-primary-base);">Google for Startups</span> all around the world</strong>
            </div>
          </div>
        </div>
      </v-col>
      <!-- /Header -->
      <!-- Cards -->
      <v-row
        class="mb-2"
      >
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          style="border-radius: 24px;"
        >
          <v-card-text class="text-h5 font-weight-bold">
            Tel Aviv
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Elias Veris</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          style="border-radius: 24px;"
        >
          <v-card-text class="text-h5 font-weight-bold">
            Seoul
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Inbal Perlman</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          style="border-radius: 24px;"
        >
          <v-card-text
            class="text-h5 font-weight-bold"
          >
            Sao Paulo
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Kristine Chung</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          style="border-radius: 24px;"
        >
          <v-card-text
            class="text-h5 font-weight-bold"
          >
            Warsaw
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Kristine Chung</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row
        class="pb-6 mb-6"
      >
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          max-width="400"
          style="border-radius: 24px;"
        >
          <v-card-text class="text-h5 font-weight-bold">
            Madrid
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Elias Veris</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          max-width="400"
          style="border-radius: 24px;"
        >
          <v-card-text class="text-h5 font-weight-bold">
            Tokyo
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Inbal Perlman</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card
          class="mx-2 pa-2 text-left"
          color="#fff"
          light
          max-width="400"
          style="border-radius: 24px;"
        >
          <v-card-text
            class="text-h5 font-weight-bold"
          >
            Jakarta
          </v-card-text>
          <v-card-actions>
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Kristine Chung</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- /Cards -->
    </v-col>
    <!-- /GFS -->

    <!-- Banner -->
    <div
      lg="6"
      class="my-6 mx-sm-4 pt-6"
    >
      <div
        class="pa-8 primary banner d-flex align-center"
        style="border-radius: 24px;"
      >
        <!-- Header -->
        <v-col
          class="px-lg-4 pa-sm-0"
        >
          <div
            class="text-h3 white--text font-weight-bold mr-lg-4 py-lg-4"
          >
            Create now your free account
          </div>
        </v-col>
        <!-- /Header -->
        <!-- CTA -->
        <v-col
          class="align-xs-center"
        >
          <nuxt-link
            to="/create"
            class="text-decoration-none"
          >
            <CTButton
              large
              contained
              color="white"
              class="elevation-0"
              @click="e1 = 2"
            >
              <span class="px-4">Get started</span>
            </CTButton>
          </nuxt-link>
        </v-col>
        <!-- /CTA -->
      </div>
    </div>
    <!-- /Banner -->
  </v-row>
</template>

<script>
import authMixin from '@/pages/mixins/auth'

export default {
  mixins: [authMixin],
  layout: 'default'
}
</script>

<style scoped>
  .text-h2 {
    font-size: 4rem !important;
    line-height: 1;
  }
  .v-btn {
    min-height: 44px;
  }
  .banner {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
  }
    .banner .text-h3 {
      text-align: left;
    }
  @media (max-width: 600px) {
    .banner {
      flex-direction: column !important;
      margin: auto 16px;
    }
      .banner .text-h3 {
        text-align: center;
      }
}
</style>
