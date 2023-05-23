// export const state = () => ({
//   resMessage: false
// })

// export const getters = {
//   getErrorMessage(state){
//     return state.resMessage
//   }
// }

// export const mutations = {
//   setErrorMessage(state, err){
//     state.resMessage = err
//   }
// }

export const actions = {
  async updateUser({ commit }, { id, userData }) {
    try {
      await this.$axios.post(`/api/users/update/info/${id}`, userData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } catch (err) {
      console.log(err);
      // commit('setErrorMessage', err.response.data.message)
    }
  },
};
