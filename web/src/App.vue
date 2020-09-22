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
    return GoldenNest.nestGrid(21)
  },
  created() {
    window.addEventListener("resize", () => {
      let newFrame = GoldenNest.nestGrid(21)
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
@font-face {
  font-family: "commodore_64";
  src: local("commodore_64"),
    url('./fonts/commodore_64/Commodore-64-v6.3.TTF') format("truetype");
}
* {
  margin: 0;
}
h1 {
  font-size: 3.6vw;
}
h2 {
  font-size: 2.6vw;
}
p {
  font-size: 1.6vw;
}body {
  margin: 0;
}
html {
  background-color: #2E2B23;
}
#app {
  font-family: "commodore_64", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc400;
  text-shadow: -1px -1px 0 #003bff, 1px -1px 0 #003bff, -1px 1px 0 #003bff, 1px 1px 0 #003bff;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #2E2B23;
}

</style>
