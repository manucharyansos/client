<template>
  <div>
    <Shipping
      :products="getProductToCart"
    />
  </div>
</template>

<script>
import Shipping from "@/components/shipping";
import {mapGetters} from "vuex";
export default {
  name: "index",
  layout: 'UserLayout',
  components: {
    Shipping
  },
  computed: {
    ...mapGetters('products', ['getProductToCart'])
  },

}
</script>

<style scoped>

</style>
