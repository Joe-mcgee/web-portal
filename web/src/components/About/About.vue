<template>
  <div>
    <information-variant-grid fillColor="#003bff"></information-variant-grid>
  </div>
</template>
<script>


import InformationVariant from 'vue-material-design-icons/InformationVariant.vue'


import { iconCenter } from '@/shared/VortexHelp'

let InformationVariantGrid = iconCenter(InformationVariant)
export default {
  name: 'About',
  props: {
    areas: Array,
  },
  components: {
    InformationVariantGrid
  },
  data: () => ({

  }),
}

</script>

