<template>
  <div class="dark:bg-gray-700">
    <header>
      <IndexHeader/>
    </header>
    <main>
      <Nuxt/>
    </main>
    <footer>

    </footer>
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
