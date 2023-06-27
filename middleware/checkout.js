
export default function ({ store, redirect }) {
  console.log(store.state.products.cartProduct)
  if (store.state.products.cartProduct.length === 0) {
    return redirect('/')
  }
}
