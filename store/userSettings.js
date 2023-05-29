export const state = () => ({
  errorMessage: false
})

export const getters = {
  getErrorMessage(state){
    return state.errorMessage
  }
}

export const mutations = {
  setErrorMessage(state, err){
    state.errorMessage = err
  }
}

export const actions = {
  async fetchUser({commit}){
    const user = await this.$axios.get('/api/user',)
    console.log(user)
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
