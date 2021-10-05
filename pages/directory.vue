<template>
  <v-container justify="center" align="center" class="ma-0 align-center text-center">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">

    <!-- Value prop -->
    <v-row
      class="mt-6 py-6 justify-center flex-xs-column-reverse"
      style="background: #e8f0fe; width: 100%;"
    >
      <!-- Copy + login -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center"
      >
        <div class="pa-0 align-left text-left column">
          <div class="text-h3 pb-3 text-left pl-lg-6 font-weight-bold">
            No more "who knows python?"
          </div>
          <div class="subtitle-1 text-left pl-lg-6 font-weight-regular">
            Create your free directory and filter community members by skill, job description, availability to work and more
          </div>
          <!-- Login -->
          <v-row
            class="mt-2 pa-4 justify-center align-center"
          >
            <nuxt-link to="/onboarding">
              <CTButton
                large
                block
                contained
                color="primary"
                class="elevation-0"
                @click="e1 = 2"
              >
                Sign up with Google
              </CTButton>
            </nuxt-link>
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
                @click="e1 = 2"
              >
                Use your mail
              </CTButton>
            </nuxt-link>
          </v-row>
          <!-- /Login -->
        </div>
      </v-col>
      <!-- /Copy + login -->
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
    </v-row>
    <!-- /Value prop -->

    <!-- Clients -->
    <div
      class="px-lg-6 justify-center align-center"
      style="background: #e8f0fe; width: 100%;"
    >
      <v-row
        class="justify-center px-6"
      >
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/googleforstartups.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/startupweekend.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/gazaskygeeks.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/correoslabs.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/tetuanvalley.png"
          />
        </v-col>
        <v-col
          lg="2"
        >
          <v-img
            contain
            src="img/seedrocket.png"
          />
        </v-col>
      </v-row>
    </div>
    <!-- /Clients -->

    <!-- Directory -->
    <v-row
      class="justify-center flex-xs-column-reverse pt-4"
      style="background: #e8f0fe; width: 100%;"
    >
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
      <!-- Copy -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column justify-center"
      >
        <div class="pa-0 align-left text-left column">
          <div class="text-h4 text-left font-weight-bold">
            Browse rich profiles where you can see who knows #python or #sales, who's <span style="color: var(--v-primary-base);">offering help</span>, where are they based and more.
          </div>
        </div>
      </v-col>
      <!-- /Copy -->
    </v-row>
    <!--  -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8f0fe" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <!-- / -->
    <!-- /Directory -->

    <!-- Profile sync -->
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
              Automatic <span style="color: var(--v-primary-base);">profile sync</span> with LinkedIn and Twitter to maintain the profiles updated without all the hassle.
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
    <!-- /Profile sync -->

    <!-- Startups -->
    <v-row
      class="py-6 mb-2 justify-center"
      style="background: #e8f0fe; width: 100%;"
    >
      <!-- Product image -->
      <v-col
        sm="12"
        lg="6"
        class="fill-height d-lg-flex justify-center align-center"
      >
        <v-img
          contain
          src="img/directory_multi.png"
        />
      </v-col>
      <!-- /Product image -->
      <!-- Copy -->
      <v-col
        sm="12"
        lg="4"
        class="d-flex flex-column pl-lg-6 justify-center"
      >
        <div>
          <div class="pa-0 align-left text-left column">
            <div class="text-h4 text-left font-weight-bold">
              See all the startups or teams of your community and <span style="color: var(--v-primary-base);">who's hiring</span> at a glance. Filter by market, verticals and number of employees.
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
    <!-- /Startups -->

    <!-- Profile sync -->
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
            <span>
              As an admin, you can <span style="color: var(--v-primary-base);">manage</span> your community from your Dashboard, send notifications, publish news and integrate with apps.
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
    <!-- /Profile sync -->

    <!-- Getting Started -->
    <v-col
      sm="12"
      lg="12"
      class="d-flex flex-column align-center justify-center px-6"
    >
      <!-- Header -->
      <v-col
        sm="12"
        lg="8"
        class="d-flex flex-column justify-center px-6 py-6 mb-6"
        style="background: #e8f0fe; border-radius: 8px;"
      >
        <div>
          <div class="pa-0 justify-center">
            <div class="text-h3 text-left font-weight-bold">
              <span>Coming soon: <span style="color: var(--v-primary-base);">Slack and Discord integration</span></span>
            </div>
          </div>
        </div>
      </v-col>
      <!-- /Header -->
    </v-col>
    <!-- /Getting Started -->

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8f0fe" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,90.7C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
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
  </v-container>
</template>

<script>
export default {
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
