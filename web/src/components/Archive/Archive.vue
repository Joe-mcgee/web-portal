<template>
  <div>
    <script-text-outline-grid fillColor="#003bff"></script-text-outline-grid>

    <mini-title v-if="areas.indexOf('archive') < 3" >Archive</mini-title>
  </div>
</template>
<script>

import ScriptTextOutline from 'vue-material-design-icons/ScriptTextOutline.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let ScriptTextOutlineGrid = iconCenter(ScriptTextOutline)
export default {
  name: 'Archive',
  props: {
    areas: Array,
  },
  components: {
    ScriptTextOutlineGrid,
    MiniTitle,
  },
  data: () => ({

  }),
}

</script>

