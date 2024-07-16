<script>
import mapPopup from "./mapPopup.vue"
export default {

    data(){
        return{
            foodRowNorth:[
            [
            {image:"../public/food-img/north/food1.jpg" ,title:"小王煮瓜",address:"台北市萬華區華西街17之4號攤位153號" },
            {image:"../public/food-img/north/food2.jpg",title:"吳記螃蟹羹",address:"基隆市仁愛區仁三路37號第5號攤"},
            {image:"../public/food-img/north/food3.jpg",title:"福卦包",address:"臺北市台北市中山區長安東路一段53巷16號"},
            {image:"../public/food-img/north/忠貞米干.jpg",title:"忠貞米干",address: "桃園市中壢區中正五路210號"}
            ],
            [
            {image:"../public/food-img/north/東門市場米粉.jpg" ,title:"東門市場米粉",address:"新竹市東區大同路86號"},
            {image:"../public/food-img/north/蛋塔先生.jpg",title:"蛋塔先生",address:"台北市大安區大安路一段75巷5號"},
            {image:"../public/food-img/north/雅夜市-騎士卷.jpg",title:"騎士現炸起司捲",address:"新北市板橋區南雅東路22_1前號"},
            {image:"../public/food-img/north/菊姐大腸圈.jpg" ,title:"菊姐大腸圈",address:"基隆市仁愛區孝二路93巷12號"}
            ],
            [
            {image:"../public/food-img/north/永心鳳茶.jpg",title:"永心鳳茶",address:"台北市 信義區忠孝東路五段68號3樓"},
            {image:"../public/food-img/north/正好鮮肉小籠包.jpg",title:"正好鮮肉小籠包",address: "宜蘭縣宜蘭市泰山路25-1號"},
            {image:"../public/food-img/north/牛家莊.jpg",title:"牛家莊",address:"桃園市桃園區縣府路310號"},
            {image:"../public/food-img/north/榮記客家湯圓.jpg",title:"榮記客家湯圓",address:"新竹市東區武昌街64號"}
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
        widthAdjust(rowIndex, boxIndex) {
        this.foodRowNorth[rowIndex].forEach((item, idx) => {

            if (idx === boxIndex){
                    item.isActive = !item.isActive
                    item.widthPercentage = item.isActive ?'60%' :'25%' 
                } else {
                    item.isActive = false; 
                    item.widthPercentage = '20%'; 
                }
            })
        },

        closeMap(){
            this.mapVisible=false,
            this.mapAddress=''
            this.mapTitle=''
        },
        showMap(address) {
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
    <div class="foodRow" v-for="(Row,rowIndex) in foodRowNorth" :key="rowIndex" >
        <div class="foodBox" v-for="(item,boxIndex) in Row" :key="boxIndex" >
            <div class="intro">
                <p class="title" >{{ item.title }}</p>
                <p class="content">{{item.address}}</p>
                <button type="button" @click="showMap(item.address)">前往地圖</button>
                
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
        transition: 1s;
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
        &.active{
            width: 100%;
        }
    }
}
</style>