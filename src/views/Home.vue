<template >
  <div class="home">
    <open-base
      v-on:mousemove="hoverEffect"
      v-bind:nestData=nestData
      :url=background
      >
      <foot >
      </foot>
      <hover-effect
        v-bind:nestData=nestData
        :mouseX="mouseX" :mouseY="mouseY"
        >
      </hover-effect>
    </open-base>
  </div>
</template>

<script>
//import styled from 'vue-styled-components'
import * as BaseGrid from '../components/BaseGrid.js'
import * as FooterComponent from '../components/Footer.js'
import * as HoverEffectComponent from '../components/HoverEffect.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')
const HoverEffect = HoverEffectComponent.createDiv('div')

export default {
  name: 'Home',
  components: {
    OpenBase,
    Foot,
    HoverEffect
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
    mouseX: 0,
    mouseY: 0,
  }),
  created() {
  },
  destroyed() {
  },
  methods: {
    hoverEffect(event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    }
  }
}
</script>
