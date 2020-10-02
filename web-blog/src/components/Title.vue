<template>
  <div>
  <v-row
    class="fill-height py-3 color-text title"
    justify="center"
    align="center">
  <h1 class="text-title">{{text}}</h1> 
  </v-row>
  <v-row
    v-if="subtext"
    class="fill-height sub-title"
    justify="center"
    align="center"
    >
    {{subtext}}
  </v-row>
  <v-divider></v-divider>
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
