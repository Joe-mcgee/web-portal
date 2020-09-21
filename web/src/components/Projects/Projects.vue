<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
    <mini-title v-if="areas.indexOf('projects') < 3" >Projects</mini-title>
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import * as ProjectService from '@/shared/ProjectService.js'
import Flask from 'vue-material-design-icons/Flask.vue'
import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let FlaskGrid = iconCenter(Flask)
let MiniTitle = miniTitle()

export default {
  name: 'Projects',
  props: {
    areas: Array,
  },
  components: {
    FlaskGrid,
    MiniTitle,
  },
  data: () => ({
    projects: Array,
  }),
  async created() {
    console.log(this.$props.areas.indexOf('projects'))
    this.projects = await ProjectService.getProjects()
  }
}

</script>

