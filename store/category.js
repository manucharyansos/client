

export const state = () => ({
  category: []
})

export const getters = {
  getCategory(state) {
    return state.category
  }
}

export const actions = {
  async fetchCategory({commit}){
    try {
      const response = await this.$axios.get('/api/categories')
      commit('setCategory', response.data)
    }catch (err){
      console.log(err)
    }
  },
  async createCategory({commit}, categoryData){
    try {
      await this.$axios.post('/api/categories', categoryData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return true
    }catch (err){
      console.log(err)
    }
  }
}

export const mutations = {
  setCategory(state, category){
    state.category = category
  }
}
