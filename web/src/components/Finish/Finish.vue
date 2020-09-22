<template>
  <div>
    <flag-grid fillColor="#003bff"></flag-grid>

    <mini-title>Fin</mini-title>
  </div>
</template>
<script>

import styled from 'vue-styled-components'


import FlagCheckered from 'vue-material-design-icons/FlagCheckered.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let FlagGrid = iconCenter(FlagCheckered)

export default {
  name: 'Finish',
  props: {
    areas: Array,
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

