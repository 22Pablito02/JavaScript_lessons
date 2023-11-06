<template>
    <section class="linear-image linear-image--details"></section>
    <section class="details container">
        <div class="details-info">
            <h2 class="title title--details">{{ detailsInfo.title }}</h2>
            <p>{{ detailsInfo.firstP }}</p>
            <br>
            <p>{{ detailsInfo.secondP }}</p>
        </div>
        <div class="galary">
            <swiper :style="{
                '--swiper-navigation-color': '#666',
                '--swiper-pagination-color': '#666',
            }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
                <swiper-slide>
                    <div class="swiper-zoom-container">
                        <img src="@/assets/img/galary1.png" />
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="swiper-zoom-container">
                        <img src="@/assets/img/galary1.png" />
                    </div>
                </swiper-slide><swiper-slide>
                    <div class="swiper-zoom-container">
                        <img src="@/assets/img/galary1.png" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(["detailsInfo"])
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
}
</script>

<style lang="css" scoped></style>