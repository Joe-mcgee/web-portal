<template>
  <div>
    <human-greeting-proximity-grid fillColor="#003bff"></human-greeting-proximity-grid>

    <mini-title>Contact</mini-title> </div>
</template>
<script>
import HumanGreetingProximity from 'vue-material-design-icons/HumanGreetingProximity.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let HumanGreetingProximityGrid = iconCenter(HumanGreetingProximity)
export default {
  name: 'Contact',
  props: {
    areas: Array,
  },
  components: {
    HumanGreetingProximityGrid,
    MiniTitle
  },
  data: () => ({

  }),
}

</script>

