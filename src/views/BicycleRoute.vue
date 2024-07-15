<script>
import breadCrum from '../components/breadCrum.vue';
import Carousel from '../components/Carousel.vue';
import Map from '../components/Map.vue';

export default {
    components: {
        breadCrum,
        Carousel,
        Map
    }
}
</script>

<template>
    <breadCrum />

    <div class="topBanner">
        <img src="../components/assets/BicycleRouteImg/banner-01.svg" alt="" width="100%">
    </div>


    <div class="map">
        <Map />
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

.map {
    width: 100dvw;
    height: 100dvh;
    background-color: #34AB4B;
    display: flex;
    justify-content: center;
    align-items: center;
}

.smallBannerTitle {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20pt;
    font-weight: bold;
    color: #39AB4B;
    margin: 3% auto;
    // position: absolute;
    // top: 193%;
    // left: 30%;

    .lineone{
        width: 200px;
        height: 1px;
        border: 1.5px solid #34AB4B;
        position: relative;

        &::before{
            content: "";
            width: 10px;
            height: 10px;
            background-color: #34AB4B;
            border-radius: 50%;
            position: absolute;
            top: -4px;
            left: -5px;
        }
    }

    .linetwo{
        width: 200px;
        height: 1px;
        border: 1.5px solid #39AB4B;
        position: relative;

        &::before{
            content: "";
            width: 10px;
            height: 10px;
            background-color: #34AB4B;
            border-radius: 50%;
            position: absolute;
            top: -4px;
            right: -5px;
        }
    }
}
.smallBanner{
    height: 400px;
    width: 70%;
    // position: absolute;
    margin: 3% auto;
    // margin-top: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;

    .banner{
        width: 1400px;
        height: 400px;
        border: none;
    }
}

</style>