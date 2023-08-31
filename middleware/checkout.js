
export default function ({ store, redirect }) {
  if (store.state.guests.products.product.length === 0) {
    return redirect('/')
  }
}
