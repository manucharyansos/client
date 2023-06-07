<template>
  <div>

  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import { Modal } from 'flowbite';
export default {
  computed: {
    ...mapGetters('category', ['getCategory'])
  },
  mounted() {
    this.fetchCategory()
    const modal = new Modal();
    // modal.init();
  },
  methods: {
    ...mapActions('category', ['fetchCategory'])
  }
}
</script>
