<template>
  
  <v-sheet rounded="lg">
    <v-card
      class="mx-auto"
      width="256"
      tile
    >
      <v-navigation-drawer permanent>
        <v-list
          
          >
          <v-list-item >
            <v-list-item-content>
              <v-list-item-title class="title">
                Taylor Hulsmans
              </v-list-item-title>
              <v-list-item-subtitle>thulsmans.2994@me.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="item"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="go(item.text)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    item: 0,
    items: [
      { icon: 'mdi-home', text: 'Recent' }
    ]

  }),
  methods: {
    go(name) {
      let url
      switch (name) {
        case 'Recent':
          url = `/`
      }
      this.$router.push({path: url })
    }
  },
}
</script>
