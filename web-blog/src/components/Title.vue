<template>
  <v-col>
  <v-row
    class="fill-height pt-3 color-text headline"
    justify="center"
    align="center">
  <h1 class="text-title">{{text}}</h1> 
  </v-row>
  <v-row

    class="fill-height title pt-3"
    justify="center"
    align="center"
    >
    {{subtext}}
  </v-row>
  </v-col>
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
