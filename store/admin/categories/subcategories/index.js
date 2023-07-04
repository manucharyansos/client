export const state = () => ({
  subcategories: [],
  message: '',
  error: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  total: 0,
  links: []
})

export const getters = {
  getSubcategories(state) {
    return state.subcategories
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
  async fetchSubCategories({commit}){
    try {
      const { data } = await this.$axios.get(`/api/subcategories`)
      commit('setSubcategories', data)
    }catch (err) {
      console.log(err.response)
    }
  }
}


export const mutations = {
  setSubcategories(state, categories){
    state.subcategories = categories
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
