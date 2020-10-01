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

      class="pl-3 pt-3"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-row class="pt-0 pl-0">
            <v-col class="pt-0">
              <v-row class="pt-0">
                <v-card-title
                  @click="go('posts', item.id)"
                  class="headline  py-0"
                  v-text="item.title"
                ></v-card-title>
                <!-- title -->
              </v-row>
              <SubTitleList :post="item" />
              <CategoryChitList :categories="item.categories" />
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
                  max-width="20vmin"
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
import CategoryChitList from '@/components/CategoryChitList'
import SubTitleList from '@/components/SubTitleList'
export default {
  name: 'Home',
  components: {
    CategoryChitList,
    SubTitleList
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
