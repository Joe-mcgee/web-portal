<template>
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
</template>
<script>
export default {
  props: {},
  components: {},
  data: () => ({}),
}
