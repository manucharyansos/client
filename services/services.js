import PRODUCT_SERVICE from '~/services/products/index'
export default (axios) => ({
  products: PRODUCT_SERVICE(axios)
})
