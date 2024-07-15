<script>
export default {
    data() {
    return {
        foodRowSouth:[
            [
            {image:"../public/food-img/南部/六千牛肉湯.jpg" ,title:"六千牛肉湯",address:"台南市中西區海安路一段63號"},
            {image:"../public/food-img/南部/北門砂鍋魚頭.jpg",title:"北門砂鍋魚頭",address:"嘉義市東區忠孝路284-1號"},
            {image:"../public/food-img/南部/古早味素食麻糬嬤.jpg",title:"古早味素食麻糬嬤",address:"屏東縣屏東市民權路43-9號"},
            {image:"../public/food-img/南部/吉林海產粥.jpg",title:"吉林海產粥",address: "高雄市大樹區竹寮路149號"}
            ],
            [
            {image:"../public/food-img/南部/松記羊肉.jpg" ,title:"松記羊肉",address:"高雄市左營區海平路100巷31-1號"},
            {image:"../public/food-img/南部/林家豬腳.jpg",title:"林家豬腳",address:"屏東縣萬巒鄉民和路1-4號"},
            {image:"../public/food-img/南部/邵陽燒餅.jpg",title:"邵陽燒餅",address:"高雄市茄萣區濱海路一段558號"},
            {image:"../public/food-img/南部/黃記涼麵涼圓.jpg" ,title:"黃記涼麵涼圓",address:"嘉義市東區興中街6號"}
            ],
            [
            {image:"../public/food-img/南部/楊寶寶.jpg",title:"楊寶寶",address:"高雄市楠梓區朝明路106號"},
            {image:"../public/food-img/南部/矮仔成蝦仁飯.jpg",title:"矮仔成蝦仁飯",address: "台南市中西區海安路一段66號"},
            {image:"../public/food-img/南部/劉里長雞肉飯.jpg",title:"劉里長雞肉飯",address:"嘉義市東區公明路197號"},
            {image:"../public/food-img/南部/劉家汕頭麵.jpg",title:"劉家汕頭麵",address:"台南市中西區民權路三段184號之1號"}
            ]
        ]
        }
    }
}
</script>
<template>
    <div class="foodRow" v-for="Row in foodRowSouth" >
        <div class="foodBox" v-for="item in Row">
            <div class="intro">
                <p class="title" >{{ item.title }}</p>
                <p class="content">{{item.address}}</p>
                <button type="button">前往地圖</button>
            </div>
            <img :src="item.image" alt="">
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
                position: absolute;
                bottom: 10%;
                left: 25%;
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