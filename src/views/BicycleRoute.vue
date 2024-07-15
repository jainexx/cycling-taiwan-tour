<script>
import breadCrum from '../components/breadCrum.vue';
import Carousel from '../components/Carousel.vue';
export default {
    components: {
        breadCrum,
        Carousel
    }
}
</script>

<template>
    <breadCrum />

    <div class="topBanner">
        <img src="../components/assets/BicycleRouteImg/banner-01.svg" alt="" width="100%">
    </div>

    <div class="map">
    </div>
<div class="smallBannerTitle">
    <div class="lineone"></div>
    近期活動
    <div class="linetwo">
    </div></div>
    <div class="smallBanner">
        <div class="banner">
            <Carousel />
        </div>
    </div>

</template>

<style scoped lang="scss">


.map{
    border: 2px solid black;
    width: 70%;
    height: 900px;
    // position: absolute;
    // left: 15%;
    margin: auto;

}

.smallBannerTitle{
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15pt;
    margin: auto;
    // position: absolute;
    // top: 193%;
    // left: 30%;

    .lineone{
        width: 200px;
        height: 1px;
        border: 1px solid black;
    }
    .linetwo{
        width: 200px;
        height: 1px;
        border: 1px solid black;
    }
}
.smallBanner{
    border: 2px solid black;
    height: 400px;
    width: 70%;
    // position: absolute;
    margin:auto;
    // margin-top: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
    .banner{
        width: 1200px;
        height: 400px;
        border: none;
    }

}

</style>