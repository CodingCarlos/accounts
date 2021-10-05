export const state = () => ({
  list: []
})

export const actions = {
  set ({ commit }, list) {
    console.log('Setting directory list', list)
    commit('SET', list)
  }
}

export const mutations = {
  SET (state, list) {
    state.list = list
  }
}
