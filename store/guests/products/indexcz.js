
export const state = () => ({
  products: [],
  product: {},
  loading: {
    product: false,
    products: false
  },
  total: {
    products: 0
  }
})

export const getters = {
  getProducts(state){
    return state.products
  },
  // getProducts(state){
  //   return state.products.filter()
  // },
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
  // async fetchProducts({ commit }, page ) {
  //   const state = {
  //     key: 'products',
  //     value: true
  //   }
  //   commit('setLoadingProductsState', state)
  //   try {
  //     const { data } = await this.$axios.get(`/api/guests/getProducts?page=${page}`);
  //     setTotalProductsState
  //     state.value = data
  //     commit('setProductsState',state)
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }finally {
  //     state.value = false
  //     commit('setLoadingProductsState', state)
  //   }
  // },
  // async showProduct({ commit }, page ) {
  //   const state = {
  //     key: 'product',
  //     value: true
  //   }
  //   commit('setLoadingProductsState', state)
  //   try {
  //     const { data } = await this.$axios.get(`/api/guests/getProducts?page=${page}`);
  //     state.value = data
  //     commit('setProductsState',state)
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }finally {
  //     state.value = false
  //     commit('setLoadingProductsState', state)
  //   }
  // },
}


export const mutations = {
  setProductsState(state, { key , value}) {
    state[key] = value
  },
  setLoadingProductsState(state, { key , value}) {
    state.loading[key] = value
  },
  setTotalProductsState(state, { key , value}) {
    state.total[key] = value
  },
}
