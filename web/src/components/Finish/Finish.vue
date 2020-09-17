<template>
  <div>
    <flag-checkered fillColor="#003bff"></flag-checkered>
  </div>
</template>
<script>


import FlagCheckered from 'vue-material-design-icons/FlagCheckered.vue'
export default {
  name: 'Finish',
  props: {
    areas: Array,
  },
  components: {
    FlagCheckered
  },
  data: () => ({

  }),
}

</script>

