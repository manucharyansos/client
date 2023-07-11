<template>
  <div>
    <Header/>
    <main>
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
