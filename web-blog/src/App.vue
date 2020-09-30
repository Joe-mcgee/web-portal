<template>
<!-- App.vue -->
<v-app>
  <v-app id="inspire">
    <v-app-bar
      app
      contain
      prominent
      :src="require('@/assets/banner.jpeg')"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="64"
        >
          <v-img
            :src="require('@/assets/separated-unicorn.jpeg')"
            ></v-img>
        </v-avatar>
          <p class="color-text"><i>Blog</i> => Dev | DLT | Polymathy</p>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-card
                class="mx-auto"
                width="256"
                tile
              >
                <v-navigation-drawer permanent>
                  <v-list
                    
                    >
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                      </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                      <v-list-item-content>
                        <v-list-item-title class="title">
                          Taylor Hulsmans
                        </v-list-item-title>
                        <v-list-item-subtitle>thulsmans.2994@me.com</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                      </v-list-item-action>
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
          </v-col>

          <v-col>
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
                      <v-col cols="9">
                        <v-row>
                          <v-card-title
                            class="headline"
                            v-text="item.title"
                          ></v-card-title>
                          <!-- title -->
                        </v-row>
                        <v-row>
                          <!-- stuff -->
                          <v-col class="pt-0">
                            <v-card-subtitle class="pt-0" v-text="item.created_at"></v-card-subtitle>
                          </v-col>
                        </v-row>
                        <v-row>
                          <!-- tags -->
                          <v-col
                            v-for="(category, j) in item.categories"
                            :key="j"
                          >
                            <v-chip
                              class="ma-2 "
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
                      <v-col>
                        <v-avatar
                          class="ma-3"
                          tile
                        >
                          <v-img :src="item.logo.url"></v-img>
                        </v-avatar>
                      </v-col>                
                    </v-row>

                  </div>
                    <v-row>
                      <v-card-text class="pt-0">
                        {{item.content | truncate(100, '...')}}
                      </v-card-text>
                    </v-row>
                </v-card>
              </v-col>

              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</v-app>
</template>

<script>
import * as ApiService from '@/shared/ApiService.js'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    item: 0,
    items: [
      {
        icon: 'mdi-home',
        text: 'Recent',
      }
    ],
    recent: []

    //
  }),
  async created() {
    this.recent = await ApiService.getPosts()
    console.log(this.recent)
  }
};
</script>
<style>
.color-text {
  color: #ffc400;
  text-shadow: -1px -1px 0 #003bff, 1px -1px 0 #003bff, -1px 1px 0 #003bff, 1px 1px 0 #003bff;
}
</style>
