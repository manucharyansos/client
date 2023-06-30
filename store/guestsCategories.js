
export const state = () => ({
  category: [],
  message: '',
  error: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  total: 0,
  links: [],
  categoryWithProducts: []
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
  },
  getCategoryWithProducts(state) {
    return state.categoryWithProducts
  }
}

export const actions = {
  async fetchCategories({ commit }, page ){
    try {
      const { data } = await this.$axios.get(`/api/guests/getCategories?page=${page}`)
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
  async fetchSubCategory({commit}){
    await this.$axios.get(`/api/subcategories`)
  },
  async fetchCategoryWithProducts({commit}, id){
    try {
      const {data} = await this.$axios.get(`/api/guests/findCategoryProducts/${id}`)
      commit('setCategoryProducts', data.category)
    }catch (err){
      commit('setErrorMessages', err.response)
    }
  }
}

export const mutations = {
  setCategory(state, category){
    state.category = category
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
  },
  setCategoryProducts(state, products){
    state.categoryWithProducts = products
  }
}
