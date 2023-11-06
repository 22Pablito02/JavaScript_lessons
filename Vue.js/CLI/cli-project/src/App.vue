<template>
  <headerCom />
  <router-view />
  <footerCom />
</template>

<script>
import headerCom from './components/headerCom.vue';
import footerCom from './components/footerCom.vue'

export default {
  components: {
    headerCom,
    footerCom,
  }
}
</script>

<style></style>
