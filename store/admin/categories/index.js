
export const state = () => ({
  categories: [],
  message: '',
  error: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  total: 0,
  links: []
})

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getMessage(state){
    return state.message
  },
  getErrorMessage(state) {
    return state.error
  },
  getCurrentPage(state){
    return state.currentPage
  },
  getLastPage(state){
    return state.lastPage
  },
  getPerPage(state){
    return state.perPage
  },
  getTotal(state){
    return state.total
  },
  getLinks(state){
    return state.links
  }
}

export const actions = {
  async fetchCategories({ commit }, page ){
    try {
      const { data } = await this.$axios.get(`/api/categories?page=${page}`)
      commit('setCategory', data.category.data);
      commit('setCurrentPage', data.category.current_page);
      commit('setLastPage', data.category.last_page);
      commit('setPerPage', data.category.per_page);
      commit('setTotal', data.category.total);
      commit('setLinks', data.category.links);
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
}

export const mutations = {
  setCategory(state, categories){
    state.categories = categories
  },
  DELETE_CATEGORY_SUCCESS(state, message){
    state.message = message
  },
  setErrorMessages(state, err){
    state.error = err
  },
  setCurrentPage(state, page) {
    state.currentPage = page;
  },
  setLastPage(state, lastPage) {
    state.lastPage = lastPage;
  },
  setPerPage(state, perPage) {
    state.perPage = perPage;
  },
  setTotal(state, total) {
    state.total = total;
  },
  setLinks(state, links){
    state.links = links
  }
}
