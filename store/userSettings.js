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
  async testUrl({commit}, userData){
    try {
      await this.$axios.get('/api/users/info', userData)
    }
    catch (err){
      // commit('setErrorMessage', err.response.data.message)
    }
  },
}
