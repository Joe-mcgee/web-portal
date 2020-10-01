<template>
  <div>
    {{post}}
  </div>
</template>
<script>
import * as ApiService from '@/shared/ApiService.js'
console.log(ApiService)
export default {
  props: {

  },
  components: {
  },
  data: () => ({
    post: {},
  }),
  async created() {
     this.post = await ApiService.getPost(this.$route.params.id) 
  },
}
</script>
