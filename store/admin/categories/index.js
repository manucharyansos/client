
export const state = () => ({
  categories: [],
  category: {},
  message: '',
  error: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  categoriesTotal: 0,
  links: []
})

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getCategory(state){
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
    return state.categoriesTotal
  },
  getLinks(state){
    return state.links
  }
}

export const actions = {
  async fetchCategories({ commit }, page){
    try {
      const { data } = await this.$axios.get(`/api/categories?page=${page}`)
      commit('SET_CATEGORIES', data.categories.data);
      commit('SET_CURRENT_PAGE', data.categories.current_page);
      commit('setLastPage', data.categories.last_page);
      commit('setPerPage', data.categories.per_page);
      commit('setTotal', data.categories.total);
      commit('setLinks', data.categories.links);
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data)
      return false
    }
  },
  async fetchCategory({commit}, id){
    try {
      const { data } = await this.$axios.get(`/api/categories/${id}/edit`)
      commit('SET_CATEGORY', data)
      return true
    }catch (err){
      return false
    }
  },
  async updateCategory({commit}, {id, data}){
    try {
      const res = await this.$axios.$put(`/api/categories/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      commit('SET_CATEGORY', data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  // async deleteImage({commit}, id){
  //   try {
  //     await this.$axios.delete(`/api/deleteCategoryImage/${id}`)
  //     commit('DELETE_IMAGE', id)
  //     return true
  //   }catch (e){
  //     return false
  //   }
  // },
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
  SET_CATEGORIES(state, categories){
    state.categories = categories
  },
  SET_CATEGORY(state, category){
    state.category = category
  },
  DELETE_CATEGORY_SUCCESS(state, message){
    state.message = message
  },
  DELETE_IMAGE(state, id){
    state.category.image.splice(id, 1)
  },
  setErrorMessages(state, err){
    state.error = err
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  setLastPage(state, lastPage) {
    state.lastPage = lastPage;
  },
  setPerPage(state, perPage) {
    state.perPage = perPage;
  },
  setTotal(state, total) {
    state.categoriesTotal = total;
  },
  setLinks(state, links){
    state.links = links
  }
}
