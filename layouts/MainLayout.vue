<template>
  <div>
    <IndexHeader/>
    <Nuxt/>
  </div>
</template>

<script>
import IndexHeader from "~/layouts/header/Index-Header";
export default {
  name: "MainLayout",
  components: {
    IndexHeader,
  }
}
</script>

<style scoped>

</style>
