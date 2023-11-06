<template>
    <section class="unique container">
        <div class="unique-block">
            <div class="unique-items">
                <h1 class="unique-title">Let Your Home<br>Be Unique</h1>
                <p>There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <router-link :to="artURL" class="btn">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17"
                        viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886"
                            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
        </div>
    </section>

    <section class="project container">
        <h2 class="title">Follow Our Projects</h2>
        <p class="subtitle">It is a long established fact that a reader will be distracted by the of readable
            content of page lookings at its layouts points.</p>

        <div class="examples">
            <div class="exemples-block">
                <img class="exemple-photo exemple-photo-tr" src="@/assets/img/Exemple1.png" alt="">
                <div class="description">
                    <h3 class="block-title">Modern Kitchan</h3>
                    <p>Decor / Artchitecture</p>
                    <a href="#" class="circle-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                            viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
            </div>
            <div class="exemples-block">
                <img class="exemple-photo exemple-photo-tl" src="@/assets/img/Exemple2.png" alt="">
                <div class="description">
                    <h3 class="block-title">Modern Kitchan</h3>
                    <p>Decor / Artchitecture</p>
                    <a href="#" class="circle-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                            viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
            </div>
        </div>

        <div class="examples">
            <div class="exemples-block">
                <img class="exemple-photo exemple-photo-br" src="@/assets/img/Exemple3.png" alt="">
                <div class="description">
                    <h3 class="block-title">Modern Kitchan</h3>
                    <p>Decor / Artchitecture</p>
                    <a href="#" class="circle-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                            viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
            </div>
            <div class="exemples-block">
                <img class="exemple-photo exemple-photo-bl" src="@/assets/img/Exemple4.png" alt="">
                <div class="description">
                    <h3 class="block-title">Modern Kitchan</h3>
                    <p>Decor / Artchitecture</p>
                    <a href="#" class="circle-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="20"
                            viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
            </div>
        </div>
    </section>

    <section class="statistics">
        <div class="cells container grid">
            <div class="cell">
                <div class="num">12</div>
                <p class="stat-text">Years Of Experiance</p>
            </div>
            <div class="cell">
                <div class="num">85</div>
                <p class="stat-text">Success Project</p>
            </div>
            <div class="cell">
                <div class="num">15</div>
                <p class="stat-text">Active Project</p>
            </div>
            <div class="cell">
                <div class="num">95</div>
                <p class="stat-text">Happy CUstomers</p>
            </div>
        </div>
    </section>

    <section id="app" class="news container">
        <h2 class="title title--blog">Articles & News</h2>
        <news />
    </section>
</template>

<script>
import news from "@/components/news.vue";
export default {
    data(){
        return{
            artURL: "/articles",
        }
    },
    components: {
        news,
    }
}
</script>

<style lang="scss" scoped></style>