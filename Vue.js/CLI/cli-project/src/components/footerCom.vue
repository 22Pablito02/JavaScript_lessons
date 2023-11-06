<template>
    <footer class="footer grid container">
        <div class="footer-left">
            <div class="logo-block logo-block--footer">
                <a href="#"><img src="@/assets/img/logo.png" alt="" class="logo"></a>
                <a href="#">
                    <div class="name-logo">Interno</div>
                </a>
            </div>
            <p>It is a long established fact that a reader will be distracted lookings.
            </p>
            <div class="social">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.919 22C15.2207 22 19.7615 13.5348 19.7615 6.19468C19.7615 5.95371 19.7615 5.71455 19.7483 5.47629C20.6316 4.6911 21.3939 3.7162 22 2.6007C21.1772 3.05016 20.3027 3.34491 19.4084 3.47486C20.35 2.78038 21.0551 1.68931 21.3928 0.401884C20.5062 1.04898 19.5371 1.50568 18.5262 1.75072C16.8168 -0.485708 13.9579 -0.594063 12.1396 1.50969C10.9681 2.86615 10.4698 4.88863 10.8339 6.81774C7.205 6.59302 3.8236 4.48389 1.5312 1.0142C0.3333 3.55249 0.946 6.79848 2.9293 8.42842C2.211 8.40269 1.5081 8.16468 0.88 7.73419V7.80469C0.8811 10.4486 2.3958 12.7251 4.5012 13.249C3.8368 13.4724 3.1394 13.5048 2.464 13.3437C3.0547 15.6072 4.7498 17.1575 6.6803 17.2022C5.082 18.7482 3.1075 19.5877 1.0747 19.585C0.7161 19.5836 0.3575 19.5579 0 19.5051C2.0647 21.135 4.466 22 6.919 21.996"
                            fill="black" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clip-path="url(#clip0_39_25)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 22H17.6V14.3011C17.6 12.1891 16.6683 11.0107 14.9974 11.0107C13.1791 11.0107 12.1 12.2386 12.1 14.3011V22H7.7V7.7H12.1V9.30811C12.1 9.30811 13.4805 6.88574 16.5913 6.88574C19.7032 6.88574 22 8.78472 22 12.7139V22ZM2.6862 5.41299C1.2023 5.41299 0 4.20086 0 2.70596C0 1.21216 1.2023 0 2.6862 0C4.169 0 5.3713 1.21216 5.3713 2.70596C5.3724 4.20086 4.169 5.41299 2.6862 5.41299ZM0 22H5.5V7.7H0V22Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_39_25">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>

        <div class="footer-pages">
            <h3 class="block-title block-title--footer">Pages</h3>
            <router-link v-for="link in link" :key="link.id" :to="link.url">{{ link.name }} </router-link>
        </div>
        <div calss="footer-services"></div>
        <div calss="footer-contacts grid">
            <h3 class="block-title block-title--footer">Contact</h3>
            <div class="contact-info grid">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            link: [
                {
                    id: 0,
                    name: "Home",
                    url: "/",
                },
                {
                    id: 1,
                    name: "Projects",
                    url: "/projects",
                },
                {
                    id: 2,
                    name: "Blog",
                    url: "/blog",
                },
            ],
        }
    }
}
</script>

<style lang="css" scoped>
.logo-block {
    display: flex;
    align-items: center;
}

.logo {
    width: 33px;
    height: 34px;
    margin-right: 10px;
}

.name-logo {
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
}

.footer {
    grid-template-columns: 1fr .5fr .5fr 1fr;
    column-gap: 101px;
    margin-top: 96px;
    margin-bottom: 134px;
}

.footer-left {
    width: 393px;
    margin-bottom: 18px;
}

.social {
    display: flex;
    margin-top: 31px;
}

.social>a {
    margin-right: 54px;
}

.footer-pages {
    max-width: 125px;
}

.footer-services {
    max-width: 120px;
}

.footer-contacts {
    max-width: 258px;
    gap: 26px;
}

.block-title--footer {
    margin-bottom: 26px;
}

.subtitle-footer {
    margin: 0;
}

.footer-pages>a {
    display: grid;
    margin-bottom: 21px;
    color: #4D5053;
    font-family: "Jost";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
}

.contact-info {
    gap: 26px;
}

.logo-block--footer {
    margin-bottom: 18px;
}
</style>