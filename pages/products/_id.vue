<template>
  <div>
    <editProduct
      :product_data="getShowedProduct"
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
    ...mapGetters('products', ['getShowedProduct'])
  },
  methods: {
    ...mapActions('products', ['fetchShowProduct'])
  }
}
</script>

<style scoped>

</style>
