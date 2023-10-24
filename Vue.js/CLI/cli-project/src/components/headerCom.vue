<template>
    <section class="header container">
        <div class="logo-block">
            <a href="#"><img src="@/assets/img/logo.png" alt="" class="logo"></a>
            <a href="#">
                <div class="name-logo">Interno</div>
            </a>
        </div>
        <div class="header-right">
            <ul class="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.header {
    display: flex;
    justify-content: space-between;
    padding-top: 53px;
    padding-bottom: 53px;
}

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


.header-right {
    display: flex;
    align-items: center;
    width: 243px;
}

.nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.nav {
    list-style: none;
}

.nav>li {
    color: #292F36;
    text-align: center;
    font-family: "Jost";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    transition: .5s;
}

.nav>li:hover {
    transform: scale(1.18);
    transition: .5s;
}
</style>