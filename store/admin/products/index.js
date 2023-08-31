
export const state = () => ({
  products: [],
  product: {},
  editProduct: [],
  errorMessages: [],
  message: '',
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  productTotal: 0,
  links: []
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
    return state.product
  },
  getEditedProduct(state) {
    return state.editProduct
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
    return state.productTotal
  },
  getLinks(state){
    return state.links
  }
}

export const actions = {
  async fetchProducts({ commit }, page ) {
    try {
      const { data } = await this.$axios.get(`/api/products?page=${page}`)
      commit('setProducts', data.productData.data);
      commit('setCurrentPage', data.productData.current_page);
      commit('setLastPage', data.productData.last_page);
      commit('setPerPage', data.productData.per_page);
      commit('setTotal', data.productData.total);
      commit('setLinks', data.productData.links);
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
  async updateProduct({commit}, {id, formData}) {
    try {
      const {data} = await this.$axios.post(`/api/updateProduct/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      // const  getData = data.get('fieldName')
      commit('SELECT_PRODUCT', data)
      return true
    } catch (err) {
      commit('setErrorMessages', err.response.data.errors)
      return false
    }
  },
  updateImages({commit}, images){
    commit('SET_IMAGES', images)
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
      commit('SET_PRODUCT', data)
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
      const { data } = await this.$axios.get(`/api/products/${id}`)
      commit('setShowedProduct', data)
      return true
    }catch (err){
      commit('setErrorMessages', err.response.data)
      return false
    }
  },
  minusProduct({commit}, index){
    commit('setMinusProduct', index)
  },
  plusProduct({commit}, index){
    commit('setPlusProduct', index)
  },
  async deleteImage({commit}, {index, id}){
    try {
      await this.$axios.delete(`/api/deleteImage/${id}`)
      commit('DELETE_IMAGE', index)
      return true
    }catch (e){
      return false
    }
  },
  selectProduct({commit}, product){
    commit('SELECT_PRODUCT', product)
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
  deleteProductByIndex(state, index){
    state.product.splice(index, 1)
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
    state.productTotal = total;
  },
  setLinks(state, links){
    state.links = links
  },
  SET_PRODUCT(state, product){
    state.product = product
  },
  SET_IMAGES(state, images){
    state.editProduct.images = images
  },
  DELETE_IMAGE(state, index){
    state.editProduct.images.splice(index, 1)
  },
  SELECT_PRODUCT(state, product){
    state.editProduct = product
  }
}
