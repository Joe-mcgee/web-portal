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
    return GoldenNest.getProps(13,21)
  },
  created() {
    window.addEventListener("resize", () => {
      let newFrame = GoldenNest.getProps(13, 21)
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
  font-size: 7vmin;
}
h2 {
  font-size: 3.0vmin;
}
p {
  font-size: 2.0vmin;
}body {
  margin: 0;
}
html {
  background-color: #2E2B23;
  width: 100%;
}
#app {
  font-family: "commodore_64", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffc400;
  text-shadow: -1px -1px 0 #003bff, 1px -1px 0 #003bff, -1px 1px 0 #003bff, 1px 1px 0 #003bff;
  padding: 0;
  margin: 0 auto;
  background-color: #2E2B23;
}

</style>
