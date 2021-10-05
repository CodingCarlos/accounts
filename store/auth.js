import axios from 'axios'
import firebase from 'firebase/app'
// import 'firebase/auth'

import api from '@/store/helpers/api'

/**
 * Get the account role of the current directory.
 * This is only for directory-related stuff...
 */
// function getDirectoryRole (accounts) {
//   const subdomain = api.url.split('/')[2].split(':')[0]
//   for (let i = 0; i < accounts.length; i += 1) {
//     if (accounts[i].subdomain === subdomain) {
//       return accounts[i].role || 'user'
//     }
//   }

//   return 'user'
// }

export const state = () => ({
  isLogged: false,
  name: null,
  pic: null,
  id: null,
  role: 'guest'
})

export const actions = {
  login ({ commit, dispatch }, { token }) {
    const data = {
      token
    }
    return axios.post(`${api.url}/auth/login`, data)
      .then(response => response.data)
      .then((user) => {
        if (user && user.token) {
          commit('LOG_IN', user.token)
          commit('SET_DATA', user.account)
        }

        if (user && user.account && user.account.acc) {
          const directories = user.account.acc.Group || []
          dispatch('directories/set', directories, { root: true })
        }

        return user.token
      })
  },
  logout ({ commit }) {
    return firebase.auth().signOut()
      .then(() => {
        commit('LOG_OUT')
      })
      .catch((error) => {
        console.error(error)
      })
  },
  // This action is automatically called from @nuxtjs/firebase plugin
  onAuthStateChangedAction ({ commit, dispatch }, { authUser }) {
    if (!authUser) {
      commit('LOG_OUT')
    } else {
      firebase.auth().currentUser.getIdToken()
        .then(token => dispatch('login', { token }))
    }
  }
}

export const mutations = {
  LOG_IN (state, token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
    state.isLogged = true
  },
  LOG_OUT (state) {
    axios.defaults.headers.common = { Authorization: '' }
    state.isLogged = false
    state.name = null
    state.pic = null
    state.id = null
    state.role = 'guest'
  },
  SET_DATA (state, data) {
    // console.log(data)
    state.name = data.name
    state.pic = data.picture
    state.id = data.acc.id || null
    // state.role = getRole(data.acc.Group)
    state.role = data.acc.superAdmin ? 'superAdmin' : 'user'
    console.log(state)
  }
}
