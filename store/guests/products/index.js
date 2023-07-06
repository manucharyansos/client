
export const state = () => ({
  products: [],
  errorMessages: [],
  message: '',
  cartProduct: [],
  showProduct: {},
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  total: 0,
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
  getLinks(state){
    return state.links
  }
}

export const actions = {
  async fetchProducts({ commit }, page ) {
    try {
      const { data } = await this.$axios.get(`/api/guests/getProducts?page=${page}`);
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
  async reviewProduct({ commit }, { id, data }) {
    try {
      await this.$axios.post(`/api/guests/reviews/${id}`, data);
      return true;
    } catch (err) {
      commit('setErrorMessages', err.response.data.errors);
      return false;
    }
  },
  async fetchProduct({ commit }, id ){
    try {
      const { data } = await this.$axios.get(`api/guests/product/${id}`)
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
      const { data } = await this.$axios.get(`api/guests/product/${id}`)
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
    this._vm.$set(product, 'quantity', 1)
    this._vm.$set(product, 'count', 1)
    let productExist = false
    if (state.cartProduct.length){
      state.cartProduct.map((item) => {
        if (item.id === product.id){
          productExist = true
          item.quantity++
        }
      })
      if (!productExist){
        state.cartProduct.push(product)
        product.quantity = 1
      }
    }else{
      state.cartProduct.push(product)
      product.quantity = 1
    }
  },
  setMinusProduct(state, index){
    if (state.cartProduct[index].quantity > 1){
      state.cartProduct[index].quantity--
    }
  },
  setPlusProduct(state, index){
    state.cartProduct[index].quantity++
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
  setLinks(state, links){
    state.links = links
  }
}
