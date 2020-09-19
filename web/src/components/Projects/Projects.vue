<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
  </div>
</template>
<script>
import * as ProjectService from '@/shared/ProjectService.js'


import Flask from 'vue-material-design-icons/Flask.vue'

import { iconCenter } from '@/shared/VortexHelp'

let FlaskGrid = iconCenter(Flask)
export default {
  name: 'Projects',
  props: {
    areas: Array,
  },
  components: {
    FlaskGrid
  },
  data: () => ({
    projects: Array,
  }),
  async created() {
    this.projects = await ProjectService.getProjects()
  }
}

</script>

