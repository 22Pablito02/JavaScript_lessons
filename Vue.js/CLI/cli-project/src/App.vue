<template>
  <homeP />
  <blogP />
  <articlesP />
  <projectsP />
</template>

<script>
import homeP from "@/components/homeP.vue"
import blogP from "@/components/blogP.vue"
import articlesP from "@/components/articlesP.vue"
import projectsP from "./components/projectsP.vue";
export default {
  components: {
    homeP,
    blogP,
    articlesP,
    projectsP
  }
}
</script>


<style></style>
