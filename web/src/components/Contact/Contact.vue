<template>
  <div>
    <human-greeting-proximity-grid fillColor="#003bff"></human-greeting-proximity-grid>
  </div>
</template>
<script>
import HumanGreetingProximity from 'vue-material-design-icons/HumanGreetingProximity.vue'

import { iconCenter } from '@/shared/VortexHelp'

let HumanGreetingProximityGrid = iconCenter(HumanGreetingProximity)
export default {
  name: 'Contact',
  props: {
    areas: Array,
  },
  components: {
    HumanGreetingProximityGrid,
  },
  data: () => ({

  }),
}

</script>

