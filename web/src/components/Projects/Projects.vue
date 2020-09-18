<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
  </div>
</template>
<script>
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

  }),
}

</script>

