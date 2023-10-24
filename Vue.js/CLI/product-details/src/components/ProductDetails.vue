<template>
  <div>Продукт: {{ product.name }}</div>
  <div>Стоимость: {{ formattedPrice }}</div>
  <div v-if="product.available" class="green">Available</div>
  <div v-if="!product.available" class="red">Out of stock</div>
  <button @click="product.available = !product.available">Доступность</button>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "cucumber",
        price: 45,
        available: true,
      }
    };
  },
  computed: {
    formattedPrice() {
      return "$" + String(this.product.price)
    }
  }
}
</script>

<style lang="css" scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>