<template>
    <headerCom />
    <section class="linear-image linear-image--articles"></section>
    <section id="app" class="publication container flex">
        <articleContent :active-tag="activeTag" />
        <tags @new-tag="onActiveTagChange" />
    </section>
    <footerCom />
</template>

<script>
import headerCom from "@/components/headerCom.vue";
import tags from "@/components/tags.vue";
import articleContent from "@/components/articleContent.vue";
import footerCom from "@/components/footerCom.vue";
export default {
    data() {
        return {
            activeTag: "",
        };
    },
    components: {
        headerCom,
        tags,
        articleContent,
        footerCom
    },
    methods: {
        onActiveTagChange(newActiveTag) {
            this.activeTag = newActiveTag;
        },
    },
}
</script>

<style lang="scss" scoped></style>