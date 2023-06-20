<template>
  <div>
    <Shipping
      :products="getProduct"
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
    ...mapGetters('products', ['getProduct'])
  },

}
</script>

<style scoped>

</style>
