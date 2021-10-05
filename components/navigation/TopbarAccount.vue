<template>
  <div>
    <!-- Create account or login -->
    <div v-if="$store.state.auth.isLogged">
      <CTButton
        class="elevation-0"
        @click="logout()"
      >
        Logout
      </CTButton>
    </div>

    <!-- Create account or login -->
    <div v-else>
      <nuxt-link
        to="/create"
        class="hidden-md-and-down mr-2"
      >
        <CTButton
          contained
          class="elevation-0"
        >
          Create account
        </CTButton>
      </nuxt-link>
      <nuxt-link
        to="/login"
        class="hidden-md-and-down"
      >
        <CTButton>
          Log in
        </CTButton>
      </nuxt-link>

      <nuxt-link
        to="/create"
        class="hidden-lg-and-up"
      >
        <CTButton
          contained
        >
          Get started
        </CTButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationTopbarAccount',
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>
