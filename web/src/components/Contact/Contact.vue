<template>
  <div>
    <human-greeting-proximity fillColor="#003bff"></human-greeting-proximity>
  </div>
</template>
<script>


import HumanGreetingProximity from 'vue-material-design-icons/HumanGreetingProximity.vue'
export default {
  name: 'Contact',
  props: {
    areas: Array,
  },
  components: {
    HumanGreetingProximity
  },
  data: () => ({

  }),
}

</script>

