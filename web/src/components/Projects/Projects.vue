<template>
  <div>
    <flask fillColor="#003bff"></flask>
  </div>
</template>
<script>


import Flask from 'vue-material-design-icons/Flask.vue'
export default {
  name: 'Projects',
  props: {
    areas: Array,
  },
  components: {
    Flask
  },
  data: () => ({

  }),
}

</script>

