<template>
  <div>
    <header>
      <Header/>
    </header>
    <main id="bgi" class="bg-white dark:bg-gray-700 h-screen flex items-center justify-center">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import Header from "@/layouts/auth/header";
export default {
  name: "Auth-Layout",
  components: {
    Header
  }
}
</script>

<style scoped>
#bgi {
  background-image: url('/bg.webp');
  background-position: center;

}
</style>
