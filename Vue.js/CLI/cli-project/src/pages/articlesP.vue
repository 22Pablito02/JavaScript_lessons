<template>
    <section class="linear-image linear-image--articles"></section>
    <section id="app" class="publication container flex">
        <articleContent :active-tag="activeTag" />
        <tags @new-tag="onActiveTagChange" />
    </section>
</template>

<script>
import tags from "@/components/tags.vue";
import articleContent from "@/components/articleContent.vue";
export default {
    data() {
        return {
            activeTag: "",
        };
    },
    components: {
        tags,
        articleContent,
    },
    methods: {
        onActiveTagChange(newActiveTag) {
            this.activeTag = newActiveTag;
        },
    },
}
</script>

<style lang="scss" scoped></style>