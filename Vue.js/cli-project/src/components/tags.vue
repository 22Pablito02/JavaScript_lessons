<template>
    <div>
        <h3 class="block-title">Tags</h3>
        <div class="tags flex">
            <button v-for="tag in tags" :key="tag" :class="{ active: tag === activeTag }" @click="setActiveTag(tag)"
                class="tag">
                {{ tag }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ["Kitchen", "Bedroom", "Building", "Architecture", "Kitchen Planning", "Bedroom"],
            activeTag: "",
        };
    },
    methods: {
        setActiveTag(tag) {
            this.activeTag = tag;
            this.$emit('new-tag', this.activeTag);
        },
    },
}
</script>

<style lang="scss" scoped></style>