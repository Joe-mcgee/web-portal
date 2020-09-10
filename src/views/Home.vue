<template >
  <div class="home">
    <open-base v-bind:nestData=nestData :url=background>
      <foot>
      </foot>
    </open-base>
  </div>
</template>

<script>
//import styled from 'vue-styled-components'
import * as BaseGrid from '../components/BaseGrid.js'
import * as FooterComponent from '../components/Footer.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')

export default {
  name: 'Home',
  components: {
    OpenBase,
    Foot
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
  }),
  created() {
    
  },
}
</script>
