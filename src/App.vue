<template>
  <div id="app">
    <router-view v-bind="myProps"/>
  </div>
</template>
<script>
import * as GoldenNest from './shared/GoldenNest.js';
export default {
  name: 'app',
  data: function() {
    return GoldenNest.nestGrid()
  },
  created() {
    window.addEventListener("resize", () => {
      let newFrame = GoldenNest.nestGrid()
      Object.assign(this.$data, newFrame)
    });
  },
  destroyed() {
    window.removeEventListener("resize", () => {})
  },
  computed: {
    myProps() {
      return  {
        nestData: { ...this.$data }
      };   
  }
}
}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #2E2B23;
}

</style>
