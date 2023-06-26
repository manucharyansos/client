
export const state = () => ({
  products: [],
  errorMessages: [],
  message: '',
  cartProduct: [],
  showProduct: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 5,
  total: 0,
})

export const getters = {
  getProducts(state){
    return state.products
  },
  getErrorMessages(state){
    return state.errorMessages
  },
  getMessage(state) {
    return state.message
  },
  getProduct(state) {
    return state.cartProduct
  },
  getShowedProduct(state){
    return state.showProduct
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
}

export const actions = {
  async fetchProducts({ commit }, page ) {
    try {
      const { data } = await this.$axios.get(`/api/products?page=${page}`);
      console.log(data)
      commit('setProducts', data.productData.data);
      commit('setCurrentPage', data.productData.current_page);
      commit('setLastPage', data.productData.last_page);
      commit('setPerPage', data.productData.per_page);
      commit('setTotal', data.productData.total);
      return true;
    } catch (err) {
      commit('setErrorMessages', err.response.data.errors)
      return false;
    }
  },
  async createProduct({commit}, products){
    try {
      await this.$axios.post('/api/products', products, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  async updateProduct(commit){
    try {
      await this.$axios.$put(`/api/products/${id}`, data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  async deleteSelectedProduct({ commit }, id) {
    try {
       await this.$axios.delete(`/api/products/${id}`)
      commit('DELETE_PRODUCT_SUCCESS', id)
      return true
    } catch (err) {
      commit('setErrorMessages', err.response.data)
      return false
    }
  },
  async reviewProduct({ commit }, {id, data}) {
    try {
      await this.$axios.post(`/api/products/reviews/${id}`, data);
      return true
    } catch (err) {
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  async fetchProduct({ commit }, id ){
    try {
      const { data } = await this.$axios.get(`api/products/${id}`)
      commit('setProduct', data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data)
      return false
    }
  },
  deleteProductFromCart({commit}, index){
    commit('deleteProductByIndex', index)
  },
  async fetchShowProduct({commit}, id){
    try {
      const { data } = await this.$axios.get(`api/products/${id}`)
      commit('setShowedProduct', data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data)
      return false
    }

  }
}


export const mutations = {
  setProducts(state, products){
    state.products = products
  },
  setErrorMessages(state, errors){
    state.errorMessages = errors
  },
  DELETE_PRODUCT_SUCCESS(state, message){
    state.message = message
  },
  setProduct(state, product){
    state.cartProduct.push(product)
  },
  deleteProductByIndex(state, index){
    state.cartProduct.splice(index, 1)
  },
  setShowedProduct(state, product){
    state.showProduct = product
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
}
