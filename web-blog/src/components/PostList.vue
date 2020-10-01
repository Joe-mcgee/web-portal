<template>
  <div>
    <v-col
      v-for="(item, i) in posts"
      :key="i"
      cols="12"
    >

    <v-hover v-slot:default="{hover}">
      <v-card
      :elevation="hover ? 12: 2"
      :class="{'on-hover': hover, 'pl-3': true, 'pt-3': true}"
      >
        
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-row class="pt-0 pl-0">
            <v-col class="pt-0"
              >
              <v-row class="pt-0"

              @click="go( item.id)"
                >
                <v-card-title
                  class="headline  py-0"
                  v-text="item.title"
                ></v-card-title>
                <!-- title -->
              </v-row>
              <SubTitleList :post="item" />
              <CategoryList :categories="item.categories" />
            </v-col>                
            <v-col
              class="pt-0"
              >
              <v-row 
                @click="go( item.id)"
                class="fill-height ma-0"
                align="center"
                justify="center"
                >
                <v-img
                  max-width="20vmin"
                  :src="item.logo.url">
                </v-img>
              </v-row>
            </v-col>                
          </v-row>

        </div>
          <v-row
            >
            <v-card-text class="pt-0">
              {{item.content | truncate(300, '')}}
              <v-btn
                @click="go(item.id)"
                depressed
                x-small
                color="primary"
              >
                Read More
            </v-btn>
            </v-card-text>
          </v-row>
      </v-card>
    </v-hover>
    </v-col>

    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src

import CategoryList from '@/components/CategoryList'
import SubTitleList from '@/components/SubTitleList'
export default {
  name: 'Home',
  props: {
    posts: Array,
  },
  components: {
    CategoryList,
    SubTitleList,
  },
  data: () => ({
    hover: false,
  }),
  async created() {
  },
  methods: {
    go(id) {
      this.$router.push({path: `/posts/${id}`})
    }
  }
}
</script>
