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
import { Slider, SliderItem } from 'vue-easy-slider'
export default {
  name: "product-id",
  layout: 'UserLayout',
  components: {
    editProduct,
    Slider,
    SliderItem,
  },
  data(){
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  mounted() {
    this.fetchShowProduct(this.id)
  },
  computed: {
    ...mapGetters('guests/products', ['getShowedProduct'])
  },
  methods: {
    ...mapActions('guests/products', ['fetchShowProduct', "fetchProduct"]),
    addToCart(id){
      this.fetchProduct(id)
    },
  }
}
</script>

<style scoped>

</style>
