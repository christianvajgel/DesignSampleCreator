<template>
  <div id="app">
    <DesignSamples/>
  </div>
</template>

<script>

import DesignSamples from "@/components/DesignSamples";
export default {
  name: 'App',
  components: {
    DesignSamples
  }
}
</script>

<style>

  body {
    /*background-color: #fdfdfd !important;*/
    background-color: #f7f7f6 !important;
    /*background-color: green !important;*/
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
