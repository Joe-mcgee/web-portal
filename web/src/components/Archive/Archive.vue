<template>
  <div>
    <script-text-outline fillColor="#003bff"></script-text-outline>
  </div>
</template>
<script>

import ScriptTextOutline from 'vue-material-design-icons/ScriptTextOutline.vue'

export default {
  name: 'Archive',
  props: {
    areas: Array,
  },
  components: {
    ScriptTextOutline
  },
  data: () => ({

  }),
}

</script>

