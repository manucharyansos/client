
export default function ({ store, redirect }) {
  console.log(store.state.guestsProducts.cartProduct)
  if (store.state.guestsProducts.cartProduct.length === 0) {
    return redirect('/')
  }
}
