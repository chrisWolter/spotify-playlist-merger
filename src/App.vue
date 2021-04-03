<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans')
body
  font-family: 'Segoe UI, Work Sans', sans-serif !important
</style>
