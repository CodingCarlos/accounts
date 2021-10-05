function getUrl () {
  // console.log(context)
  // console.log(this.$nuxt.$route)
  // let url = `${window.location.origin}/api`
  let url = '/api'

  if (process.env.NODE_ENV !== 'production' && process.env.VUE_APP_API_URL) {
    url = process.env.VUE_APP_API_URL
  }

  return url
}

export default {
  url: getUrl()
}
