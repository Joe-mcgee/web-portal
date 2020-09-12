<template >
  <div class="home">
    <open-base
      @mousemove="hoverEffect"
      v-bind:nestData=nestData
      :url=background
      >
      <about
        :areas=areas
        >
      </about>

      <projects
        :areas=areas
        >
      </projects>
      <blog
        :areas=areas
        >
      </blog>
      <archive
        :areas=areas
        >
      </archive>
      <contact
        :areas=areas
        >
      </contact>
      <vortex
        @click="shift"
        >
      </vortex>
      <hover-effect
        v-bind:nestData=nestData
        :mouseX="mouseX" :mouseY="mouseY"
        >
      </hover-effect>
        <foot>
        </foot>
    </open-base>
  </div>
</template>

<script>
//import styled from 'vue-styled-components'
import * as BaseGrid from '../components/BaseGrid.js'
import * as AboutComponent from '../components/About.js'
import * as ProjectsComponent from '../components/Projects.js'
import * as BlogComponent from '../components/Blog.js'
import * as ArchiveComponent from '../components/Archive.js'
import * as ContactComponent from '../components/Contact.js'
import * as VortexComponent from '../components/Vortex.js'
import * as FooterComponent from '../components/Footer.js'
import * as HoverEffectComponent from '../components/HoverEffect.js'

const OpenBase = BaseGrid.createBaseGrid('div')
const Foot = FooterComponent.createFooter('div')
const HoverEffect = HoverEffectComponent.createDiv('div')
const About = AboutComponent.createDiv('div')
const Projects = ProjectsComponent.createDiv('div')
const Blog = BlogComponent.createDiv('div')
const Archive = ArchiveComponent.createDiv('div')
const Contact = ContactComponent.createDiv('div')
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
    Vortex,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    background: require('@/assets/spiral-cat.gif'),
    mouseX: 0,
    mouseY: 0,
    areas: ['about', 'projects', 'blog', 'archive', 'contact', 'holder']
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
