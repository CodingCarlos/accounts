import firebase from 'firebase'

export default {
  methods: {
    // Navigate to the post-auth route
    authRedirect () {
      if (this.$route.query.redirect) {
        // If redirect param in url, then go there
        this.$router.replace(this.$route.query.redirect)
      } else {
        // Directory list should be filled on login
        const directories = this.$store.state.directories.list

        if (directories.length > 0) {
          // If user already has directories, go to launcher
          this.$router.replace('/launcher')
        } else {
          // Else, let's start creating one
          this.$router.replace('/onboarding')
        }
      }
    },
    auth () {
      if (!this.$fire.auth.currentUser) {
        return false
      }

      if (this.$store.state.auth.isLogged) {
        return this.authRedirect()
      }

      return this.$fire.auth.currentUser.getIdToken()
        .then(token => this.$store.dispatch('auth/login', { token }))
        .then(() => {
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Welcome back 🤙'
          })

          this.authRedirect()
        })
        .catch((error) => {
          console.error(error.code, error.message)
          this.$store.dispatch('alerts/show', {
            color: 'black',
            text: 'Something\'s not working 🥴 Try loggin in again 🔐'
          })
        })
    },
    login () {
      if (this.$store.state.auth.isLogged) {
        return this.authRedirect()
      }

      const provider = new firebase.auth.GoogleAuthProvider()
      // const provider = this.$fire.auth.GoogleAuthProvider()
      return this.$fire.auth.signInWithPopup(provider)
        .then(this.auth)
        .catch((error) => {
          if (error.code !== 'auth/popup-closed-by-user') {
            this.$store.dispatch('alerts/show', {
              color: 'black',
              text: 'Google authentication is not working 😳 Try again in a few minutes 🤞'
            })
          }
        })
    }
  }
}
