<template>
    <section class="error container container--err flex">
        <div class="error-info">
            <h1 class="err-num">404</h1>
            <p class="err-text">We are sorry, but the page
                you requested was not found</p>
            <router-link :to="home" class="btn btn-back-home">Back To Home <svg xmlns="http://www.w3.org/2000/svg" width="18"
                    height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M1 8.43529L14.7232 8.29844M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </router-link>
        </div>
        <img src="@/assets/img/error.jpg" class="err-img">
    </section>
</template>

<script>
export default {
    data(){
        return{
            home:"/"
        }
    }
}
</script>

<style lang="css" scoped>
.container--err {
    position: unset;
}

.error {
    height: 1018px;
}

.error-info {
    max-width: 50%;
    margin: auto 0;
}

.err-num {
    color: #CDA274;
    font-family: "DM Serif Display";
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
}

.err-text {
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    margin: 15px 0 23px;
    line-height: 150%
}

.btn-back-home {
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    padding: 26px 54px;
    max-width: max-content;
}

.err-img {
    max-width: 50%;
    height: 1018px;
    position: absolute;
    right: 0;
    border-radius: 0 0 0 300px;
}
</style>