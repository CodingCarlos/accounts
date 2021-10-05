<template>
  <v-card
    to="/onboarding"
    class="d-flex justify-center align-center text-h5 text--primary"
    :disabled="disabled"
  >
    <v-icon size="32" class="mr-2">mdi-plus</v-icon>
    <span>Create directory</span>
  </v-card>
</template>

<script>
export default {
  name: 'DirectoryCard',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
