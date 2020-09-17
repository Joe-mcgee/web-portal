<template>
  <div>
    <typewriter fillColor="#003bff"></typewriter>
  </div>
</template>
<script>


import Typewriter from 'vue-material-design-icons/Typewriter.vue'
export default {
  name: 'Blog',
  props: {
    areas: Array,
  },
  components: {
    Typewriter,
  },
  data: () => ({

  }),
}

</script>

