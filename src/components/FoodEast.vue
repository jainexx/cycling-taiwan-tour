<script>
export default {
    data() {
    return {
        foodRowEast:[
            [
            {image:"../public/food-img/東部/一耕食堂.jpg" ,title:"一耕食堂",address:"台東縣長濱鄉97-3號"},
            {image:"../public/food-img/東部/大禹街龍鳳腿.jpg",title:"大禹街龍鳳腿",address:"花蓮縣花蓮市大禹街75號"},
            {image:"../public/food-img/東部/台澢號.jpg",title:"台澢號",address:"臺東縣臺東市台東縣東河鄉都蘭村146-2號"},
            {image:"../public/food-img/東部/正大漢方御膳食鋪.jpg",title:"正大漢方御膳食鋪",address: "花蓮縣花蓮市中正路309號"}
            ],
            [
            {image:"../public/food-img/東部/來點卡路里早午餐.jpg" ,title:"來點卡路里早午餐",address:"花蓮縣花蓮市國聯五路47號"},
            {image:"../public/food-img/東部/初。幸福現烤甜甜圈.jpg",title:"初。幸福現烤甜甜圈",address:"台東縣台東市博愛路302號長照中心旁"},
            {image:"../public/food-img/東部/明禮路蔥油餅.jpg",title:"明禮路葱油餅",address:"花蓮縣花蓮市明禮路18-3號"},
            {image:"../public/food-img/東部/東池池上便當.jpg" ,title:"東池池上便當",address:"台東市中華路一段864號"}
            ],
            [
            {image:"../public/food-img/東部/法式棺材板.jpg",title:"法式棺材板",address:"花蓮縣花蓮市花蓮市博愛街19號"},
            {image:"../public/food-img/東部/單一純賣雞湯小卷米粉.jpg",title:"單一雞湯小卷米粉",address: "花蓮縣花蓮市中美路67-2號"},
            {image:"../public/food-img/東部/葉式海鮮.jpg",title:"葉式海鮮",address:"台東縣台東市強國街211號"},
            {image:"../public/food-img/東部/榕樹下米苔目.jpg",title:"榕樹下米苔目",address:"台東縣台東市博愛路362巷1-3號"}
            ]
        ]
        }
    },
}
</script>
<template>
    <div class="foodRow" v-for="Row in foodRowEast" >
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