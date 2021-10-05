<template>
  <v-snackbar
    v-model="$store.state.alerts.visible"
    :color="$store.state.alerts.color"
    :timeout="-1"
  >
    <span>
      {{ $store.state.alerts.text }}
    </span>
  </v-snackbar>
</template>
