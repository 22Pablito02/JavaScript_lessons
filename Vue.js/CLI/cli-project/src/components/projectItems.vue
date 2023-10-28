<template>
    <div class="proj">
        <div v-for="(proj, index) in filteredCat" :key="index" class="proj-item">
            <div class="proj-img">
                <img v-if="proj.showStar" class="like-star" src="@/assets/img/star.png">
                <img @dblclick="like(proj)" :src="proj.img">
            </div>
            <div class="description">
                <h3 class="block-title">{{ proj.title }}</h3>
                <p>{{ proj.subtitle }}</p>
                <a href="#" class="circle-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["activeCategory"],
    data() {
        return {
            projInfo: [
                {
                    category: "Bed Room",
                    img: require("@/assets/img/proj1.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Bed Room",
                    img: require("@/assets/img/proj2.png"),
                    title: "Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Bed Room",
                    img: require("@/assets/img/proj3.png"),
                    title: "Classic Minimal Bedroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Bed Room",
                    img: require("@/assets/img/proj4.png"),
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Living Area",
                    img: require("@/assets/img/proj5.png"),
                    title: "Minimal Bedroom table",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Kitchan",
                    img: require("@/assets/img/proj6.png"),
                    title: "System Table",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Living Area",
                    img: require("@/assets/img/proj7.png"),
                    title: "Modern Medroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
                {
                    category: "Living Area",
                    img: require("@/assets/img/proj8.png"),
                    title: "Modern Bedroom",
                    subtitle: "Decor / Artchitecture",
                    showStar: false,
                },
            ],
        };
    },
    methods: {
        like(proj) {
            proj.showStar = !proj.showStar;
        }
    },
    computed: {
        filteredCat() {
            if (!this.activeCategory) {
                return this.projInfo;
            }
            return this.projInfo.filter((cat) => cat.category === this.activeCategory);
        },
    },
};
</script>

<style lang="scss" scoped></style>