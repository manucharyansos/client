import {PRODUCTS_LIST} from "~/utils/urls/products"

export default (axios) => ({
  async productList(page) {
    return  await axios.get(PRODUCTS_LIST(page));
  }
})
