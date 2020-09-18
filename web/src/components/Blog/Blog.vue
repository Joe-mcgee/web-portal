<template>
  <div>
    <typewriter-grid fillColor="#003bff"></typewriter-grid>
  </div>
</template>
<script>
import Typewriter from 'vue-material-design-icons/Typewriter.vue'

import { iconCenter } from '@/shared/VortexHelp'

let TypewriterGrid = iconCenter(Typewriter)
export default {
  name: 'Blog',
  props: {
    areas: Array,
  },
  components: {
    TypewriterGrid,
  },
  data: () => ({

  }),
}

</script>

