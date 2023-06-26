

export const state = () => ({
  category: [],
  message: '',
  error: []
})

export const getters = {
  getCategory(state) {
    return state.category
  },
  getMessage(state){
    return state.message
  },
  getErrorMessage(state) {
    return state.error
  }
}

export const actions = {
  async fetchCategory({commit}){
    try {
      const response = await this.$axios.get('/api/categories')
      commit('setCategory', response.data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data)
      return false
    }
  },
  async createCategory({commit}, categoryData){
    try {
      await this.$axios.post('/api/categories', categoryData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  async deleteSelectedCategory({commit}, id) {
    try {
      const res = await this.$axios.delete(`/api/categories/${id}`)
      commit('DELETE_CATEGORY_SUCCESS', id)
      return true
    } catch (error) {
      commit('setErrorMessages', error.response.data)
      return false
    }
  },
  async createSubcategory({commit}, data){
    try {
      await this.$axios.post('/api/subcategories', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return true
    }catch (err){
      commit('setErrorMessage', err.response.data)
      return false
    }
  },
  async fetchSubCategory({commit}){
    await this.$axios.get(`/api/subcategories`)
  }
}

export const mutations = {
  setCategory(state, category){
    state.category = category
  },
  DELETE_CATEGORY_SUCCESS(state, message){
    state.message = message
  },
  setErrorMessages(state, err){
    state.error = err
  }
}
