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
                <p class="title">小王煮瓜</p>
                <p class="content">台北市萬華區華西街17之4號攤位153號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/food1.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">吳記螃蟹羹</p>
                <p class="content">基隆市仁愛區仁三路37號第5號攤</p>
                <button type="button">前往地圖</button>
                
            </div>
            <img src="../components/assets/food-img/north/food2.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">福卦包</p>
                <p class="content">臺北市台北市中山區長安東路一段53巷16號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/food3.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">忠貞米干x</p>
                <p class="content">桃園市中壢區中正五路210號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/忠貞米干.jpg" alt="">
        </div>
    </div>
    <div class="foodRow">
        <div class="foodBox" >
            <div class="intro">
                <p class="title">東門市場米粉湯</p>
                <p class="content">新竹市東區大同路86號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/東門市場米粉.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">榮記客家湯圓</p>
                <p class="content">新竹市東區武昌街64號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/榮記客家湯圓.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">正好鮮肉小籠包</p>
                <p class="content">宜蘭縣宜蘭市泰山路25-1號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/正好鮮肉小籠包.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">永心鳳茶</p>
                <p class="content">台北市信義區忠孝東路五段68號3樓</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/永心鳳茶.jpg" alt="">
        </div>
    </div>
    <div class="foodRow">
        <div class="foodBox" >
            <div class="intro">
                <p class="title">楠雅夜市騎士捲</p>
                <p class="content">新北市板橋區南雅東路22_1前號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/湳雅夜市-騎士卷.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">牛家莊</p>
                <p class="content">桃園市桃園區縣府路310號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/牛家莊.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">菊姐大腸圈</p>
                <p class="content">基隆市仁愛區孝二路93巷12號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/菊姐大腸圈.jpg" alt="">
        </div>
        <div class="foodBox" >
            <div class="intro">
                <p class="title">蛋塔先生</p>
                <p class="content">台北市大安區大安路一段75巷5號</p>
                <button type="button">前往地圖</button>
            </div>
            <img src="../components/assets/food-img/north/蛋塔先生.jpg" alt="">
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
            opacity: 0;
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