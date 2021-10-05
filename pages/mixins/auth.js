import firebase from 'firebase'

export default {
  methods: {
    authRedirect () {
      if (this.$route.query.redirect) {
        this.$router.replace(this.$route.query.redirect)
      } else {
        this.$router.replace('/launcher')
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
