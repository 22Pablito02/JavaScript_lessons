<template>
    <div class="articles">
        <article v-for="(ar, index) in filteredArticles" :key="index" class="article">
            <h2 class="title title--article">{{ ar.firstTitle }}</h2>
            <img :src="ar.img" class="article-img">
            <div class="date flex">
                <p class="news-date">{{ ar.date }}</p>
                <p class="news-date bread-crumbs">Interior / Home / Decore</p>
            </div>
            <p>{{ ar.firstParagraph }}</p>
            <p>{{ ar.secondParagraph }}</p>
            <div class="quote">
                <img class="quotation-marks" src="@/assets/img/quote.png" alt="">
                <div class="quote-text">The details are not the details. <br>They make the design.</div>
            </div>
            <h2 class="title title--article">Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <ol>
                <li>
                    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered.</p>
                </li>
                <li>
                    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered.</p>
                </li>
                <li>
                    <p>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but
                        the
                        majority have suffered.</p>
                </li>
            </ol>
            <img class="article-img--s" src="@/assets/img/artticle1.1.png" alt="">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <hr>
        </article>
    </div>
</template>

<script>
export default {
    props: [`activeTag`],
    data() {
        return {
            articlesContent: [
                {
                    tag: "Architecture",
                    firstTitle: "Let’s Get Solution for Building Construction Work",
                    img: require("@/assets/img/artticle1.png"),
                    date: "1 October,2023",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                },
                {
                    tag: "Architecture",
                    firstTitle: "Anything article",
                    img: require("@/assets/img/artticle1.png"),
                    date: "9 September,2020",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat pre"
                },
                {
                    tag: "Kitchen",
                    firstTitle: "Other article",
                    img: require("@/assets/img/artticle1.png"),
                    date: "31 December,2023",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                },
                {
                    tag: "Bedroom",
                    firstTitle: "And another article!",
                    img: require("@/assets/img/artticle1.png"),
                    date: "26 December,2021",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                },
            ]
        };
    },
    computed: {
        filteredArticles() {
            if (!this.activeTag) {
                return this.articlesContent;
            }
            return this.articlesContent.filter((article) => article.tag === this.activeTag);
        },
    },
}
</script>

<style lang="scss" scoped></style>