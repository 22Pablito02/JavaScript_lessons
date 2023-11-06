<template>
    <section class="linear-image linear-image--project flex">
        <div class="blog-title">
            <h2 class="title title--blog-bg">Our Project</h2>
            <p>Home / Project</p>
        </div>
    </section>

    <section id="add" class="projects container">

        <categories @new-category = "onActiveCatChange"/>
        <projectItems :activeCategory="activeCategory"/>
        <div class="pagination">
            <ul>
                <li><a href="#" class="circle-arrow circle-arrow--block active-arrow">01</a></li>
                <li><a href="#" class="circle-arrow circle-arrow--block">02</a></li>
                <li><a href="#" class="circle-arrow circle-arrow--block">03</a></li>
                <li><a href="#" class="circle-arrow circle-arrow--block"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                            height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a></li>
            </ul>
        </div>
    </section>
</template>

<script>

import categories from '@/components/categories.vue';
import projectItems from '@/components/projectItems.vue';


export default {
    data() {
        return {
            activeCategory: "",
        }
    },
    components: {
        categories,
        projectItems
    },
    methods: {
        onActiveCatChange(newActivecategory) {
            this.activeCategory = newActivecategory;
            console.log(this.activeCategory);
        },
    },
}
</script>

<style lang="css" scoped></style>