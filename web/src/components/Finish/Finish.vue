<template>
  <div>
    <flag-grid fillColor="#003bff"></flag-grid>
  </div>
</template>
<script>

import styled from 'vue-styled-components'


import FlagCheckered from 'vue-material-design-icons/FlagCheckered.vue'
import { iconCenter } from '@/shared/VortexHelp'

let FlagGrid = iconCenter(FlagCheckered)

export default {
  name: 'Finish',
  props: {
    areas: Array,
  },
  components: {
    FlagGrid
  },
  data: () => ({

  }),
  created() {
    console.log(this.$props)
  }
}

</script>

