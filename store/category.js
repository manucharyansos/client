

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
      console.log(response.data)
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
  },
  async deleteSelectedCategory({commit}, id) {
    try {
      const res = await this.$axios.delete(`/api/categories/${id}`)
      console.log(res)
      commit('DELETE_CATEGORY_SUCCESS', id)
    } catch (error) {
      console.error(error)
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
    const y = await this.$axios.get(`/api/subcategories`)
    console.log(y)
  }
}

export const mutations = {
  setCategory(state, category){
    state.category = category
  },
  DELETE_CATEGORY_SUCCESS(state, message){
    state.message = message
  },
  setErrorMessage(state, err){
    state.error = err
  }
}
