<template>
<v-row>
  <!-- stuff --> 
    <v-card-subtitle class="py-0" v-text="post.created_at"></v-card-subtitle>
</v-row>
</template>
<script>
export default {
  props: {
    post: Object 
  },
  data: () => ({}),
  created() {
  },
}
</script>
