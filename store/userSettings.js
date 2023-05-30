export const state = () => ({
  errorMessage: false,
  user: []
})

export const getters = {
  getErrorMessage(state){
    return state.errorMessage
  },
  getUser(state){
    return state.user
  }
}

export const mutations = {
  setErrorMessage(state, err){
    state.errorMessage = err
  },
  setUser(state, user){
    state.user = user
  }
}

export const actions = {
  async fetchUser({commit}){
    const { data } = await this.$axios.get('/api/user',)
    commit('setUser', data)
  },

  async updateUser({ commit }, { id, userData }) {
    try {
      const response = await this.$axios.post(`/api/users/update/info/${id}`, userData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.status === 200){
        return true
      }
    } catch (err) {
      console.log(err.response);
      commit('setErrorMessage', err.response)
    }
  },
};
