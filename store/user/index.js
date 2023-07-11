export const state = () => ({
  errorMessage: false,
})

export const getters = {
  getErrorMessage(state){
    return state.errorMessage
  },
}

export const mutations = {
  setErrorMessages(state, err){
    state.errorMessage = err
  },
}

export const actions = {
  async reviewProduct({ commit }, { id, data }) {
    try {
      await this.$axios.post(`/api/reviews/create/${id}`, data);
      return true;
    } catch (err) {
      commit('setErrorMessages', err.response.data);
      return false;
    }
  },
};
