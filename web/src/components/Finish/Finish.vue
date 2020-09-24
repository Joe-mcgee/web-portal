<template>
  <div>
    <flag-grid fillColor="#003bff"></flag-grid>

    <mini-title v-bind:nestData=nestData >Fin</mini-title>
  </div>
</template>
<script>

import styled from 'vue-styled-components'


import FlagCheckered from 'vue-material-design-icons/FlagCheckered.vue'

import * as ListItems from '@/components/ListItems.js'
let MiniTitle = ListItems.miniTitle()
let FlagGrid = ListItems.iconCenter(FlagCheckered)

export default {
  name: 'Finish',
  props: {
    areas: Array,
    nestData: Object
  },
  components: {
    FlagGrid,
    MiniTitle,
  },
  data: () => ({

  }),
  created() {
  }
}

</script>

