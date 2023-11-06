<template>
    <div class="news-blocks grid">
        <router-link v-for="(block, index) in blockInfo" :key="index" :to="block.url" :href="block.url" class="news-block">
            <div class="relative">
                <img class="news-img" :src="block.img" alt="">
                <div class="img-description flex">{{ block.imgDescr }}</div>
            </div>
            <h3 class="block-title">{{ block.title }}</h3>
            <div class="date-block">
                <p class="news-date">{{ block.date }}</p>
                <div class="circle-arrow circle-arrow--news"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                        viewBox="0 0 10 20" fill="none">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blockInfo: [
                {
                    url: "/details",
                    img: require("@/assets/img/news1.png"),
                    imgDescr: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022"
                },
                {
                    url: "/details",
                    img: require("@/assets/img/news2.png"),
                    imgDescr: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "26 December,2022"
                },
                {
                    url: "/details",
                    img: require("@/assets/img/news3.png"),
                    imgDescr: "Interior Design",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "26 December,2022"
                },
                {
                    url: "/details",
                    img: require("@/assets/img/news4.png"),
                    imgDescr: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022"
                },
                {
                    url: "/details",
                    img: require("@/assets/img/news5.png"),
                    imgDescr: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    date: "26 December,2022"
                },
                {
                    url: "/details",
                    img: require("@/assets/img/news6.png"),
                    imgDescr: "Interior Design",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "26 December,2022"
                },
            ]
        };
    },
}
</script>

<style lang="scss" scoped></style>