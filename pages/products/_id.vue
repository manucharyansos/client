<template>
  <div>
    <editProduct
      :product_data="getShowedProduct"
      @addToBag="addToCart"
    />
  </div>
</template>

<script>
import editProduct from "~/components/products/edit-product";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "product-id",
  layout: 'UserLayout',
  components: {
    editProduct
  },
  mounted() {
    const id = this.$route.params.id
    this.fetchShowProduct(id)
  },
  computed: {
    ...mapGetters('guestsProducts', ['getShowedProduct'])
  },
  methods: {
    ...mapActions('guestsProducts', ['fetchShowProduct', "fetchProduct"]),
    addToCart(id){
      this.fetchProduct(id)
    },
  }
}
</script>

<style scoped>

</style>
