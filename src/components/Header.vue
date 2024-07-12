<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink  to="/HomePage"><img src="./assets/Slice 1.svg" alt="logo"></RouterLink>
        <!-- <RouterLink class="routeItem" to="/">Home</RouterLink> -->
        <div class="pageChageButton">
            <!-- <RouterLink class="routeItem" to="/HomePage"></RouterLink> -->
            <RouterLink class="routeItem" to="/BicycleRoute">自行車路線</RouterLink>
            <RouterLink class="routeItem" to="/FoodTourism">美食資訊</RouterLink>
            <RouterLink class="routeItem" to="/CarbonEmissions">碳排放量</RouterLink>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
*{
    // border:1px solid black;
    margin:0;
    padding: 0;
}
.headerArea {
    width: 100dvw;
    height: 100px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #39AB4B;
    img{
        height: 100px;
    }
    .pageChageButton{
        display: flex;
        align-items: start;
        width: 50%;
        .routeItem{
            text-align: center;
            width: 40%;
            padding:5px;
            border-radius: 30px;
            color:rgb(255, 255, 255);
            margin:7%;
            font-size: 18px;
            text-decoration: none;
            background-color: #39AB4B
    }
}
}
</style>