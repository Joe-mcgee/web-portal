<template>
  <div>
    <information-variant fillColor="#003bff"></information-variant>
  </div>
</template>
<script>


import InformationVariant from 'vue-material-design-icons/InformationVariant.vue'
export default {
  name: 'About',
  props: {
    areas: Array,
  },
  components: {
    InformationVariant
  },
  data: () => ({

  }),
}

</script>

