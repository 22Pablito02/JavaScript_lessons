<template>
    <headerCom />
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



            <!-- <div class="galary-slider">
                <img src="@/assets/img/galary1.png">
                <div class="zoom">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36.9329 33.2863L28.5452 24.8986C30.5646 22.2103 31.6547 18.938 31.651 15.5758C31.651 6.98748 24.6638 0.000244141 16.0755 0.000244141C7.48723 0.000244141 0.5 6.98748 0.5 15.5758C0.5 24.1641 7.48723 31.1513 16.0755 31.1513C19.4378 31.155 22.71 30.0648 25.3984 28.0455L33.7861 36.4332C34.2107 36.8127 34.7644 37.0153 35.3337 36.9994C35.903 36.9834 36.4445 36.7502 36.8472 36.3475C37.2499 35.9448 37.4832 35.4032 37.4991 34.834C37.5151 34.2647 37.3125 33.7109 36.9329 33.2863ZM4.95015 15.5758C4.95015 13.3754 5.60264 11.2244 6.82511 9.39484C8.04758 7.56528 9.78513 6.13931 11.818 5.29726C13.8509 4.45521 16.0879 4.23489 18.246 4.66416C20.4041 5.09344 22.3864 6.15303 23.9423 7.70894C25.4983 9.26485 26.5578 11.2472 26.9871 13.4053C27.4164 15.5634 27.1961 17.8004 26.354 19.8333C25.512 21.8662 24.086 23.6037 22.2564 24.8262C20.4269 26.0486 18.2759 26.7011 16.0755 26.7011C13.126 26.6976 10.2982 25.5243 8.2126 23.4387C6.12696 21.353 4.95369 18.5253 4.95015 15.5758Z" />
                    </svg>
                </div>
            </div>
            <div class="dots">
                <li></li>
                <li></li>
                <li></li>
            </div> -->
        </div>
    </section>
    <FooterCom />
</template>

<script>
import FooterCom from './footerCom.vue';
import headerCom from './headerCom.vue';
import { mapState } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    components: {
        headerCom,
        FooterCom,
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