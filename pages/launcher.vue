<template>
  <v-container>
    <v-row dense>
      <!-- Directory list -->
      <v-col
        v-for="directory in list"
        :key="directory.id"
        sm="12"
        lg="3"
        class="d-flex flex-column"
      >
        <DirectoryCard
          :name="directory.name"
          :subdomain="directory.subdomain"
          :role="directory.role"
          class="flex-grow-1"
        />
      </v-col>

      <!-- Create Directory -->
      <v-col
        sm="12"
        lg="3"
        class="d-flex flex-column"
      >
        <DirectoryCardCreate
          :disabled="false"
          class="flex-grow-1"
        />
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
