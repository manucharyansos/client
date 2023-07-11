export const state = () => ({
  errorMessage: false,
  user: [],
  users: []
})

export const getters = {
  getErrorMessage(state){
    return state.errorMessage
  },
  getUser(state){
    return state.user
  },
  getUsers(state){
    return state.users
  }
}

export const mutations = {
  setErrorMessage(state, err){
    state.errorMessage = err
  },
  setUser(state, user){
    state.user = user
  },
  setUsers(state, users){
    state.users = users
  }
}

export const actions = {
  async fetchUser({commit}){
    try {
      const res = await this.$axios.get('/api/user')
      commit('setUser', res.data)
      return true
    } catch (error) {
      commit('setErrorMessage', error.response);
    }
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
      commit('setErrorMessage', err.response)
      return false
    }
  },
  async users({commit}){
    try {
      const response = await this.$axios.get('api/users')
      commit('setUsers', response.data)
      return true
    }catch (err){
      commit('setErrorMessage', err.response)
      return false
    }
  },
  async createUser({commit}, user){
    try {
      const res = await this.$axios.post('/api/users/store', user)
      return true
    }catch (err){
      commit('setErrorMessage', err.response.data.errors)
      return false
    }
  },
  async deleteUser({commit}, id){
    try {
      const res = await this.$axios.delete(`/api/users/userDelete/${id}`)
      if(res.status === 200){
        return true
      }
    }catch (err){
      commit('setErrorMessage', err.response)
      return false
    }
  }
};
