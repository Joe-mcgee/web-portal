<template>
  <div>
  <v-row
    class="fill-height pt-3 color-text title"
    justify="center"
    align="center">
  <h1 class="text-title">{{text}}</h1> 
  </v-row>
  <v-row
    v-if="subtext"
    class="fill-height sub-title pt-3"
    justify="center"
    align="center"
    >
    {{subtext}}
  </v-row>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    subtext: String
  },
  data: () => ({})
}
</script>
