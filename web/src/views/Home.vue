<template >
  <div class="home">
    <open-base @mousemove="hoverEffect"
      v-bind:nestData=nestData
      :url=background>
      <about :areas=areas></about>
      <projects :areas=areas></projects>
      <blog :areas=areas ></blog>
      <archive :areas=areas></archive>
      <contact :areas=areas> </contact>
      <holder :areas=areas> </holder>
      <vortex @click="shift"></vortex>
      <hover-effect v-bind:nestData=nestData
        :mouseX="mouseX" :mouseY="mouseY"></hover-effect>
      <foot></foot>
    </open-base>
  </div>
</template>

<script>
import * as ProjectService from '@/shared/ProjectService.js'

import * as VortexHelpers from '@/shared/VortexHelp'
import * as BaseGrid from '../components/BaseGrid.js'
import * as VortexComponent from '../components/Vortex.js'
import * as FooterComponent from '../components/Footer.js'
import * as HoverEffectComponent from '../components/HoverEffect.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')
const HoverEffect = HoverEffectComponent.createDiv('div')
const About = VortexHelpers.create('about')
const Projects = VortexHelpers.create('projects')
const Blog = VortexHelpers.create('blog')
const Archive = VortexHelpers.create('archive')
const Contact = VortexHelpers.create('contact')
const Holder = VortexHelpers.create('holder')
const Vortex = VortexComponent.createDiv('div')

export default {
  name: 'Home',
  components: {
    OpenBase,
    Foot,
    HoverEffect,
    About,
    Projects,
    Blog,
    Archive,
    Contact,
    Holder,
    Vortex,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
    mouseX: 0,
    mouseY: 0,
    areas: ['about', 'projects', 'blog', 'contact', 'archive', 'holder']
  }),
  async created() {
    console.log(await ProjectService.getProjects())
  },
  destroyed() {
  },
  methods: {
    hoverEffect(event) {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    },
    shift(event) {
      this.areas.push(this.areas.shift())
    }
  }
}
</script>
