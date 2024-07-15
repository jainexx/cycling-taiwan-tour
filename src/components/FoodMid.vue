<script>
export default {
    data() {
    return {
        }
    },
}
</script>
<template>
    <div class="foodRow" >
        <div class="foodBox">
            <div class="intro">
                <p class="title">三灣鵝肉</p>
                <p class="content">苗栗縣三灣鄉中正路28號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/三灣鵝肉.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">大元餅行</p>
                <p class="content">彰化市民生路129巷4號</p>
                <button type="button">前往地圖</button>
                
            </div>
            <img src="../components/assets/food-img/中部/大元餅行.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">媽祖埔豆腐張</p>
                <p class="content">雲林縣虎尾鎮林森路二段471號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/媽祖埔豆腐張.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">林記古早味</p>
                <p class="content">台中市中區三民路二段3-12號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/林記古早味麻薏湯.jpg" alt="">
        </div>
    </div>
    <div class="foodRow">
        <div class="foodBox" >
            <div class="intro">
                <p class="title">楊媽媽豬籠粄客家米食</p>
                <p class="content">苗栗縣南庄鄉中正路26號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/楊媽媽豬籠粄客家米食.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">游記扣仔嗲</p>
                <p class="content">南投縣埔里鎮隆生路80號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/游記扣仔嗲.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">源記粉粿冰</p>
                <p class="content">彰化縣鹿港鎮民族路198號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/源記粉粿冰.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">王家蔡頭粿</p>
                <p class="content">台中市中區三民路二段87號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/王記菜頭粿.jpg" alt="">
        </div>
    </div>
    <div class="foodRow">
        <div class="foodBox" >
            <div class="intro">
                <p class="title">東海蓮心冰雞爪凍</p>
                <p class="content">台中市烏日區中山路一段405號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/蓮心雞腳凍.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">豆子芋園</p>
                <p class="content">台中市龍井區新興路1巷23號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/豆子芋園.jpg alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">阿三肉圓</p>
                <p class="content"> 彰化縣彰化市三民路242號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/阿三肉圓.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">阿斗伯冷凍芋</p>
                <p class="content">台中市中區成功路356號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/中部/阿斗伯冷凍芋.jpg" alt="">
        </div>
    </div>
</template>



<style scoped lang="scss">
*{
    // border:1px solid black;
    padding: auto;
    margin: auto;
}
.foodRow{
    display:flex;
    width: 100%;
    height: 33.34%;
    .foodBox{
        width: 25%;
        height: 100%;
        position: relative;
        .intro{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            // opacity: 0;
            transition: 0.5s;
            background-color: rgba(198, 224, 88, 1);
            z-index: -1;
            text-align: center;
            color: #39AB4B;
            .title{
                font-size: 36px;
            }
            .content{
                margin-top: 40px;
                font-size: 24px;
            }
            button{
                margin-top:50px;
                width: 50%;
                height: 15%;
                border-radius:20px ;
                background-color: #39AB4B;
                color: white;
                font-size: 24px;
                border:none;
            }
        }
        img{
            width: 100%;
            height: 100%;

        }
        &:hover{
            .intro{
                opacity: 1;
                z-index: 99;
            }
        }
    }
}
</style>