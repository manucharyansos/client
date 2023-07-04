
export default function ({ store, redirect }) {
  if (store.state.guests.products.cartProduct.length === 0) {
    return redirect('/')
  }
}
