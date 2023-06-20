
export const state = () => ({
  products: [],
  errorMessages: [],
  message: '',
  cartProduct: [],
  showProduct: []
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
      commit('DELETE_PRODUCT_SUCCESS', id)
    } catch (error) {
      console.error(error)
    }
  },
  async reviewProduct({ commit }, {id, data}) {
    try {
      await this.$axios.post(`/api/products/reviews/${id}`, data);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchProduct({ commit }, id ){
    try {
      const { data } = await this.$axios.get(`api/products/${id}`)
      commit('setProduct', data)
    }catch (err){
      console.log(err)
    }
  },
  deleteProductFromCart({commit}, index){
    commit('deleteProductByIndex', index)
  },
  async fetchShowProduct({commit}, id){
    try {
      const { data } = await this.$axios.get(`api/products/${id}`)
      commit('setShowedProduct', data)
    }catch (err){
      console.log(err)
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
  }
}
