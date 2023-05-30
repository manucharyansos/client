

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
    const response = await this.$axios.get('/api/categories')
    commit('setCategory', response.data)
  }
}

export const mutations = {
  setCategory(state, category){
    state.category = category
  }
}
