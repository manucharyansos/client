export const state = () => ({
  resMessage: false
})

export const getters = {
  getErrorMessage(state){
    return state.resMessage
  }
}

export const mutations = {
  setErrorMessage(state, err){
    state.resMessage = err
  }
}

export const actions = {
  async loginUser({commit}, userData){
    try {
      await this.$auth.loginWith('laravelSanctum', userData)
      return true
    }
    catch (err){
      commit('setErrorMessage', err.response.data)
      return false
    }
  },
  async registerUser({commit}, userData){
    try {
      await this.$axios.post('/api/register', userData)
    }
    catch (err){
      commit('setErrorMessage', err.response.data.errors)
    }
  }
}
