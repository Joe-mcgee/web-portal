<template>
  <div>
    <script-text-outline-grid fillColor="#003bff"></script-text-outline-grid>
  </div>
</template>
<script>

import ScriptTextOutline from 'vue-material-design-icons/ScriptTextOutline.vue'

import { iconCenter } from '@/shared/VortexHelp'

let ScriptTextOutlineGrid = iconCenter(ScriptTextOutline)
export default {
  name: 'Archive',
  props: {
    areas: Array,
  },
  components: {
    ScriptTextOutlineGrid
  },
  data: () => ({

  }),
}

</script>

