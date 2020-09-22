<template>
  <div>
    <typewriter-grid fillColor="#003bff"></typewriter-grid>

    <mini-title>Blog</mini-title>
  </div>
</template>
<script>
import Typewriter from 'vue-material-design-icons/Typewriter.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let TypewriterGrid = iconCenter(Typewriter)
export default {
  name: 'Blog',
  props: {
    areas: Array,
  },
  components: {
    TypewriterGrid,
    MiniTitle,
  },
  data: () => ({

  }),
}

</script>

