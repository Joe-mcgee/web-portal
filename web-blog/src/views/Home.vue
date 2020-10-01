<template>
  <v-sheet
    min-height="70vh"
    rounded="lg"
  >
    <v-col
      v-for="(item, i) in recent"
      :key="i"
      cols="12"
    >
      <v-card
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-row>
            <v-col class="pt-0">
              <v-row class="pt-0">
                <v-card-title

                  @click="go('posts', item.id)"
                  class="headline pr-0 pb-0 pt-0"
                  v-text="item.title"
                ></v-card-title>
                <!-- title -->
              </v-row>
              <v-row>
                <!-- stuff -->
                <v-col class="py-0">
                  <v-card-subtitle class="py-0 pl-1" v-text="item.created_at"></v-card-subtitle>
                </v-col>
              </v-row>
              <v-row
                >
                <!-- tags -->
                <v-col
                  class="pt-1 pb-0 pr-0"
                  justify="center"
                  align="center"
                  v-for="(category, j) in item.categories"
                  :key="j"
                >
                  <v-chip
                    color="#FFC400"
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
            </v-col>                
            <v-col
              class="pt-0"
              >
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
                >
                <v-img
                  contain
                  max-width="20vh"
                  :src="item.logo.url"></v-img>
              </v-row>
            </v-col>                
          </v-row>

        </div>
          <v-row>
            <v-card-text class="pt-0">
              {{item.content | truncate(300, '...')}}
            </v-card-text>
          </v-row>
      </v-card>
    </v-col>

    <!--  -->
  </v-sheet>
</template>

<script>
// @ is an alias to /src

import * as ApiService from '@/shared/ApiService.js'
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    recent: []
  }),
  async created() {
    this.recent = await ApiService.getPosts()
  },
  methods: {
    go(url, id) {
      this.$router.push({path: `${url}/${id}`})
    }
  }
}
</script>
