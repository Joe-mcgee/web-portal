<template >
  <div class="home">
    <open-base v-bind:nestData=nestData :url=currentPage>
    </open-base>
    <middle-base v-bind:nestData=nestData>
    </middle-base>
    <bottom-base v-bind:nestData=nestData>
    </bottom-base>
  </div>
</template>

<script>
//import styled from 'vue-styled-components'
import * as BaseGrid from '../components/BaseGrid.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const MiddleBase = BaseGrid.createBaseGrid('div')
const BottomBase = BaseGrid.createBaseGrid('div')
    

export default {
  name: 'Home',
  components: {
    OpenBase,
    MiddleBase,
    BottomBase,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    currentPage: require('@/assets/opening-gif.gif')
  }),
  created() {
    
  },
}
</script>
