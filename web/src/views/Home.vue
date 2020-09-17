<template >
  <div class="home">
    <open-base @mousemove="hoverEffect"
      v-bind:nestData=nestData
      :url=background>
      <about :areas=areas></about>
      <projects :areas=areas></projects>
      <blog :areas=areas ></blog>
      <archive :areas=areas></archive>
      <contact :areas=areas></contact>
      <finish :areas=areas></finish>
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

import AboutComponent from '@/components/About/About.vue'
import ProjectsComponent from '@/components/Projects/Projects.vue'
import BlogComponent from '@/components/Blog/Blog.vue'
import ContactComponent from '@/components/Contact/Contact.vue'
import ArchiveComponent from '@/components/Archive/Archive.vue'
import FinishComponent from '@/components/Finish/Finish.vue'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')
const HoverEffect = HoverEffectComponent.createDiv('div')
const About = VortexHelpers.create('about', AboutComponent)
const Projects = VortexHelpers.create('projects', ProjectsComponent)
const Blog = VortexHelpers.create('blog', BlogComponent)
const Contact = VortexHelpers.create('contact', ContactComponent)
const Archive = VortexHelpers.create('archive', ArchiveComponent)
const Finish = VortexHelpers.create('finish', FinishComponent)
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
    Finish,
    Vortex,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
    mouseX: 0,
    mouseY: 0,
    areas: ['about', 'projects', 'blog', 'contact', 'archive', 'finish']
  }),
  async created() {
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
