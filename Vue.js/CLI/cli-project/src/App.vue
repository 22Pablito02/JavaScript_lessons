<template>
  <detailsP />
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
import detailsP from "./components/detailsP.vue";
export default {
  components: {
    homeP,
    blogP,
    articlesP,
    projectsP,
    detailsP
}
}
</script>


<style></style>
