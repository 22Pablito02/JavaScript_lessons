<template>
    <section class="linear-image linear-image--blog flex">
        <div class="blog-title">
            <h2 class="title title--blog-bg">Articles & News</h2>
            <p>Home / Blog</p>
        </div>
    </section>

    <section class="latest-post container">
        <h2 class="title title--blog">Latest Post</h2>
        <a class="news-block news-block--post flex" href="#">
            <img class="post-img" src="@/assets/img/latest-post.png">
            <div class="post-info">
                <h3 class="block-title block-title--post">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                    in.Contrary to popular belief.</p>
                <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div class="date-block date-block--post">
                    <p class="news-date">26 December,2022</p>
                    <div class="circle-arrow circle-arrow--news"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                            height="20" viewBox="0 0 10 20" fill="none">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    </section>

    <section id="app" class="news news--blog container">
        <h2 class="title title--blog">Articles & News</h2>
        <div class="news-blocks grid">
            <news />
        </div>
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
import news from "@/components/news.vue";
export default {
    components: {
        news,
    },
};
</script>

<style lang="scss" scoped></style>