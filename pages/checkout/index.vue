<template>
  <div>
    <Shipping
      :products="product"
      :total="basketTotal()"
    />
  </div>
</template>

<script>
import Shipping from "@/components/shipping";
import {mapGetters, mapState} from "vuex";
export default {
  name: "index",
  layout: 'UserLayout',
  middleware: 'checkout',
  components: {
    Shipping
  },
  computed: {
    ...mapState('guests/products', ['product'])
  },
  methods: {
    basketTotal(){
      let res = []
      for (const item of this.product){
        res.push(item.price * item.quantity)
      }
      res = res.reduce( (sum, el) => {
        return sum + el
      })
      return Math.floor(res)
    }
  }
}
</script>

<style scoped>

</style>
