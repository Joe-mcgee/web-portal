<template>
  <grid
    v-bind:nestData=getNestData
  id="app">
  <banner-img/>
  <recent
    v-bind:nestData=getNestData
  >
  </recent>
  </grid>
</template>
<script>
import { createGrid } from '@/plugins/IGoldenGrid.js'
import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components';
import List from '@/components/List.vue'

const Recent = createGrid(List, {
  origin: {
    x: 1,
    y: 9
  },
  dimension: {
    x: 13,
    y: 8
  }
})
const Grid = createGrid('div')
const BannerImg = styled('div')`
  background: url(${require('@/assets/banner.jpeg')});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  grid-row: 1/9;
  grid-column: 1/-1;
  border-bottom: 3px solid black;
`


export default {
  name: 'App',
  components: {
    Grid,
    BannerImg,
    Recent,
  },
  data: () => ({
    recent: Array
  }),
  async created() {
    this.recent = await ApiService.getPosts()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: ##E2D6C8;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
