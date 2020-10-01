<template>
  <v-container fluid>
    <v-row>
      <v-col
        @click="getPostsByCategory(item.id)"
        v-for="(item) in categories"
        :key="item.id">

        <v-hover v-slot:default="{hover}">
          <v-card
            :elevation="hover ? 12: 2"
            :class="{'on-hover': hover}">
        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.logo.url"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.count"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    props: {
      categories: Array,      
    },
    data: () => ({}),
    methods: {
      getPostsByCategory(id) {
        console.log(':|')
        this.$emit('getPostsByCategory', id)
      }
    }
  }
</script>
