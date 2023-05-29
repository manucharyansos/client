import products from "@/pages/products";

export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state){
    return state.products
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
  }
}


export const mutations = {
  setProducts(state, products){
    state.products = products
  }
}
