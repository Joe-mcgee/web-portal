<template>
<!-- App.vue -->
  <v-app>
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <Drawer />
          </v-col>
          <v-col>
            <router-view :key="$route.fullPath"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Drawer from '@/components/Drawer.vue'
import * as ApiService from '@/shared/ApiService.js'
export default {
  name: 'App',

  components: {
    AppBar,
    Drawer,
  },

  data: () => ({
    recent: []

    //
  }),
  async created() {
    this.recent = await ApiService.getPosts()
  }
};
</script>
<style>
.color-text {
  color: #ffc400;
  text-shadow: -1px -1px 0 #003bff, 1px -1px 0 #003bff, -1px 1px 0 #003bff, 1px 1px 0 #003bff;
}
</style>
