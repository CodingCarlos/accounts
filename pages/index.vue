<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col
      sm="12"
      lg="4"
      class="fill-height"
    >
      <p>Aquí el login</p>

      <p>
        <nuxt-link to="/inspire">
          <v-btn>Otra pagina con layout distinto</v-btn>
        </nuxt-link>
      </p>
    </v-col>
    <v-col
      lg="8"
      class="fill-height hidden-md-and-down primary"
    >
      Aquí una foto
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
