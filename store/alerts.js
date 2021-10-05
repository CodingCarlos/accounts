const DEFAULT_COLOR = 'success'

export const state = () => ({
  visible: false,
  color: null,
  text: ''
})

let timeout = null

export const actions = {
  show ({ commit }, { color, text }) {
    commit('SHOW', { color, text })

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      commit('HIDE')
    }, 3000)
  }
}

export const mutations = {
  SHOW (state, data) {
    state.text = data.text
    state.color = data.color || DEFAULT_COLOR
    state.visible = true
  },
  HIDE (state) {
    state.text = null
    state.color = null
    state.visible = false
  }
}
