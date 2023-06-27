<template>
  <div>
    <Shipping
      :products="getProduct"
      :total="basketTotal()"
    />
  </div>
</template>

<script>
import Shipping from "@/components/shipping";
import {mapGetters} from "vuex";
export default {
  name: "index",
  layout: 'UserLayout',
  middleware: 'checkout',
  components: {
    Shipping
  },
  computed: {
    ...mapGetters('products', ['getProduct'])
  },
  methods: {
    basketTotal(){
      let res = []
      for (const item of this.getProduct){
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
