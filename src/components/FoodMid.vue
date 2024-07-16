<script>
import mapPopup from "./mapPopup.vue"
export default {
    data() {
    return {
        foodRowMid:[
            [
            {image:"../public/food-img/中部/三灣鵝肉.jpg" ,title:"三灣鵝肉",address:"苗栗縣三灣鄉中正路28號"},
            {image:"../public/food-img/中部/大元餅行.jpg",title:"大元餅行",address:"彰化市民生路129巷4號"},
            {image:"../public/food-img/中部/王記菜頭粿.jpg",title:"王家蔡頭粿",address:"台中市中區三民路二段87號"},
            {image:"../public/food-img/中部/豆子芋園.jpg",title:"豆子芋園",address: "台中市龍井區新興路1巷23號"}
            ],
            [
            {image:"../public/food-img/中部/林記古早味麻薏湯.jpg" ,title:"林記古早味麻薏湯",address:"台中市中區三民路二段3-12號"},
            {image:"../public/food-img/中部/阿三肉圓.jpg",title:"阿三肉圓",address:"彰化縣彰化市三民路242號"},
            {image:"../public/food-img/中部/阿斗伯冷凍芋.jpg",title:"阿斗伯冷凍芋",address:"台中市中區成功路356號"},
            {image:"../public/food-img/中部/游記扣仔嗲.jpg" ,title:"游記扣仔爹",address:"南投縣埔里鎮隆生路80號"}
            ],
            [
            {image:"../public/food-img/中部/媽祖埔豆腐張.jpg",title:"媽祖埔豆腐張",address:"雲林縣虎尾鎮林森路二段471號"},
            {image:"../public/food-img/中部/楊媽媽豬籠粄客家米食.jpg",title:"楊媽媽豬籠粄客家米食",address: "苗栗縣南庄鄉中正路26號"},
            {image:"../public/food-img/中部/源記粉粿冰.jpg",title:"源記粉粿冰",address:"彰化縣鹿港鎮民族路198號"},
            {image:"../public/food-img/中部/蓮心雞腳凍.jpg",title:"蓮心雞腳凍",address:"台中市烏日區中山路一段405號"}
            ]
        ],
        mapVisible: false,
        mapAddress: '',
        mapTitle: '',
        }
    },
    components:{
            mapPopup,
        },
    methods:{

        closeMap(){
            this.mapVisible=false,
            this.mapAddress=''
            this.mapTitle=''
        },
        showMap(address,title) {
            this.mapVisible = true
            this.mapTitle = title
            console.log(this.mapTitle)
            this.mapAddress = address
            
            console.log(this.mapAddress)
            console.log(this.mapTitle)
    }

}
}
</script>
<template>
        <div class="foodRow" v-for="(Row,rowIndex) in foodRowMid" :key="rowIndex" >
        <div class="foodBox" v-for="(item,boxIndex) in Row" :key="boxIndex" >
            <div class="intro">
                <p class="title" >{{ item.title }}</p>
                <p class="content">{{item.address}}</p>
                <button type="button" @click="showMap(item.address,item.title)">前往地圖</button>
                
            </div>
            <img :src="item.image" alt=""  @click="widthAdjust(rowIndex,boxIndex)" :class="{active: item.isActive}">
        </div>
    </div>
    <!-- <mapPopup v-if="this.mapVisible" :address="mapAddress" /> -->
    <mapPopup v-if="mapVisible" :address="mapAddress" :mapVisible = "mapVisible" :title="mapTitle" @close="closeMap()"/>
        
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