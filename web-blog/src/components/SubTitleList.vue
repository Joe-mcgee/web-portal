<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(item) in items" :key="item.id">
        <v-hover v-slot:default="{hover}">
          <v-card
            :elevation="hover ? 12: 2"
            :class="{'on-hover': hover}">
        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.content"></v-list-item-subtitle>
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
    post: Object 
  },
  data: () => ({
    items: [
      {
        icon: 'mdi-clock',
        title: 'Date',
        content: null
      },
    ]

  }),
  created() {
    this.items.find((item) => {
      return item.title == 'Date'
    }).content = this.post.created_at + ' ago'
  },
}
</script>
      <v-card-subtitle class="py-0" v-text="post.created_at"></v-card-subtitle>
