<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="directory in list"
        :key="directory.id"
        sm="12"
        lg="3"
        :cols="directory.flex"
        class="d-flex flex-column"
      >
        <v-card class="flex-grow-1 d-flex flex-column justify-space-between">
          <!-- <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img> -->
          <v-card-text>
            <div>{{ directory.subdomain }}</div>
            <p class="text-h4 text--primary">
              {{ directory.name || directory.subdomain }}
            </p>
          </v-card-text>
          <v-card-actions>
            <a :href="`https://${directory.subdomain}`">
              <v-btn outlined>
                Directory
              </v-btn>
            </a>
            <a
              v-if="directory.role === 'admin'"
              :href="`https://${directory.subdomain}`"
            >
              <v-btn outlined>
                <!-- <v-icon>mdi-lock</v-icon> -->
                Adminland
              </v-btn>
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapState({
      list: state => state.directories.list
    })
  }
}
</script>
