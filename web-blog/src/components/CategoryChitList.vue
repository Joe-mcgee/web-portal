<template>
  <v-row class="px-3">
    <v-col
      class="pt-1 pb-0 px-0"
      v-for="(category, j) in categories"
      :key="j"
      
    >
      <v-chip
        color="#FFC400"
        style="border: 1px solid black"
      >
        <v-avatar
          left
          color="#003BFF"
          class="darken-4"
          style="color: #FFC400;"
          >
        {{category.count}}
        </v-avatar>
          {{category.title}}
      </v-chip>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    categories: Array
  },
  data: () => ({}),
  created() {

  },
}
</script>
