<template>
    <ul class="categories">
        <li v-for="category in categories" :key="category.id" @click="setActiveCategory(category)">
            <button :class="{ activeCat: category === activeCategory}">{{ category }}</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            categories: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
            activeCategory: "",
        };
    },
    methods: {
        setActiveCategory(category) {
            this.activeCategory = category;
            this.$emit('new-category', this.activeCategory);
            // console.log(this.activeCategory);
        },
    },
}
</script>
    
<style lang="scss" scoped></style>