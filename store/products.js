
export const state = () => ({
  products: [],
  errorMessages: [],
  message: '',
  cartProduct: []
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
  getProductToCart(state) {
    return state.cartProduct
  }
}

export const actions = {
  async fetchProducts({commit}){
    try {
      const { data }  = await this.$axios.get('/api/products')
      commit('setProducts', data)
    }catch (err){
      console.log(err)
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
  async deleteSelectedProduct({ commit }, id) {
    try {
      const res = await this.$axios.delete(`/api/products/${id}`)
      console.log(res)
      commit('DELETE_PRODUCT_SUCCESS', id)
    } catch (error) {
      console.error(error)
      // Handle error case here if needed
    }
  },
  async reviewProduct({ commit }, {id, data}) {
    console.log(data)
    try {
      await this.$axios.post(`/api/products/reviews/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  },
  async toCart({ commit }, id ){
    try {
      const { data } = await this.$axios.get(`api/products/${id}/edit`)
      commit('setProductToCart', data)
    }catch (err){
      console.log(err)
    }
  },
  deleteProductFromCart({commit}, index){
    commit('deleteProductByIndex', index)
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
  setProductToCart(state, product){
    state.cartProduct.push(product)
  },
  deleteProductByIndex(state, index){
    state.cartProduct.splice(index, 1)
  }
}
