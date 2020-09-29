<template>
  <div>
    <script-text-outline-grid fillColor="#003bff"></script-text-outline-grid>

    <mini-title v-bind:nestData=nestData >Archive</mini-title>
  </div>
</template>
<script>

import ScriptTextOutline from 'vue-material-design-icons/ScriptTextOutline.vue'


import * as ListItems from '@/components/ListItems.js'
let MiniTitle = ListItems.miniTitle()
let ScriptTextOutlineGrid = ListItems.iconCenter(ScriptTextOutline)
export default {
  name: 'Archive',
  props: {
    areas: Array,
    nestData: Object,
  },
  components: {
    ScriptTextOutlineGrid,
    MiniTitle,
  },
  data: () => ({

  }),
}

</script>

