<template>
  <div>
    <information-variant-grid fillColor="#003bff"></information-variant-grid>

    <mini-title>About</mini-title>
  </div>
</template>
<script>


import InformationVariant from 'vue-material-design-icons/InformationVariant.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let InformationVariantGrid = iconCenter(InformationVariant)
export default {
  name: 'About',
  props: {
    areas: Array,
  },
  components: {
    InformationVariantGrid,
    MiniTitle
  },
  data: () => ({

  }),
}

</script>

