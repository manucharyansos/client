<template>
  <div>
    <header>
      <IndexHeader/>
    </header>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import IndexHeader from "@/layouts/admin/header/Index-Header";
export default {
  name: "Admin-Layout",
  components: {
    IndexHeader
  }
}
</script>

<style scoped>

</style>
