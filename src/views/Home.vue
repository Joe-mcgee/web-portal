<template >
  <div class="home">
    <open-base
      @mousemove="hoverEffect"
      v-bind:nestData=nestData
      :url=background
      >
      <foot>
      </foot>
      <about
        :areas=areas

      >
      </about>
      <vortex
        @click="shift"
        >
      </vortex>
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
import * as AboutComponent from '../components/About.js'
import * as VortexComponent from '../components/Vortex.js'
import * as FooterComponent from '../components/Footer.js'
import * as HoverEffectComponent from '../components/HoverEffect.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')
const HoverEffect = HoverEffectComponent.createDiv('div')
const About = AboutComponent.createDiv('div')
const Vortex = VortexComponent.createDiv('div')

export default {
  name: 'Home',
  components: {
    OpenBase,
    Foot,
    HoverEffect,
    About,
    Vortex,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
    mouseX: 0,
    mouseY: 0,
    areas: ['about', 'projects', 'blog', 'archive', 'contact', 'holder', 'null']
  }),
  created() {
  },
  destroyed() {
  },
  methods: {
    hoverEffect(event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    },
    shift(event) {
      console.log(event)
      this.areas.push(this.areas.shift())
      console.log(this.areas)
    }
  }
}
</script>
