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
    background-color: #f7f7f6 !important;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
