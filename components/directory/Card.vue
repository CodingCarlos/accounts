<template>
  <v-card class="d-flex flex-column justify-space-between">
    <!-- <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
    </v-img> -->
    <v-card-text>
      <div>{{ subdomain }}</div>
      <p class="text-h4 text--primary">
        {{ name || subdomain }}
      </p>
    </v-card-text>
    <v-card-actions>
      <a :href="`https://${subdomain}`" target="_blank">
        <v-btn outlined>
          Directory
        </v-btn>
      </a>
      <a
        v-if="role === 'admin'"
        :href="`https://${subdomain}/admin`"
        target="_blank"
      >
        <v-btn outlined>
          <!-- <v-icon>mdi-lock</v-icon> -->
          Adminland
        </v-btn>
      </a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DirectoryCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    subdomain: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'user'
    }
  }
}
</script>
