<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        sm="12"
        lg="3"
        :cols="card.flex"
      >
        <v-card>
          <!-- <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img> -->
          <v-card-text>
            <div>madrid.gfs.directory</div>
            <p class="text-h4 text--primary" v-text="card.title" />
          </v-card-text>
          <v-card-actions>
            <a href="https://madrid.gfs.directory/#/directory">
              <v-btn outlined>
                Directory
              </v-btn>
            </a>
            <v-btn outlined>
              <!-- <v-icon>mdi-lock</v-icon> -->
              Adminland
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'GFS Madrid', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'GFS Tel Aviv', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      { title: 'GFS Warsaw', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'GFS Tokyo', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'GFS Seoul', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' }
    ]
  })
}
</script>
