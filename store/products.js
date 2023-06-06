
export const state = () => ({
  products: [],
  errorMessages: [],
  message: ''
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
  }
}
