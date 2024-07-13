<script>
import breadCrum from '../components/breadCrum.vue'
import foodPagebutton from '../components/FoodPagebutton.vue'
export default{
    components:{
        breadCrum,
        foodPagebutton
    },
    data(){
        return{
            selectedArea:'北部地區',
            areaTitle:'探索台灣北部的美食魅力',
            areaIntro:'台灣北部﹐擁有豐富多樣的美食文化﹒從台北的夜市小吃﹐到基隆的海鮮盛宴﹐每一道料理都蘊含著獨特的地方風味﹒來到北部﹐一定要品嘗經典的蚵仔煎﹑牛肉麵﹐以及新竹的貢丸湯﹒每一口都是對傳統與創新的完美詮釋',
            lines: [
            [
                { imageUrl: "../../components/assets/food-img/北部/five.jpg", width: "25%"},
                { imageUrl: "../components/assets/food-img/北部/小王煮瓜.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/忠貞米干.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/東門市場米粉.jpg", width: "25%" }
            ],
            [
                { imageUrl: "../components/assets/food-img/北部/東門市場米粉.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/榮記客家湯圓.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/正好鮮肉小籠包.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/永心鳳茶.jpg", width: "25%" }
            ],
            [
                { imageUrl: "../components/assets/food-img/北部/湳雅夜市-騎士卷.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/牛家莊.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/福掛包.jpg", width: "25%" },
                { imageUrl: "../components/assets/food-img/北部/菊姐大腸圈.jpg", width: "25%" }
            ]
        ],
    }
    },
    methods:{
        showAreaContent(area){
            this.selectedArea = area
            if(area === '北部地區'){
                this.areaTitle = '探索台灣北部的美食魅力';
                this.areaIntro = '台灣北部﹐擁有豐富多樣的美食文化﹒從台北的夜市小吃﹐到基隆的海鮮盛宴﹐每一道料理都蘊含著獨特的地方風味﹒來到北部﹐一定要品嘗經典的蚵仔煎﹑牛肉麵﹐以及新竹的貢丸湯﹒每一口都是對傳統與創新的完美詮釋';
            }else if(area === '中部地區'){
                this.areaTitle = '探索台灣中部的美食魅力';
                this.areaIntro = '台灣中部地區擁有豐富的美食文化，以台中為中心，不僅有知名的夜市小吃，還有獨特的客家料理和道地的山珍海味，每一道菜都散發著濃厚的家鄉風味，絕對讓人回味無窮。';
            }else if(area === '南部地區'){
                this.areaTitle = '探索台灣南部的美食魅力';
                this.areaIntro = '台灣南部地區以高雄為中心，不僅擁有豐富的海鮮資源，還有獨特的客家和閩南料理，每一口都是對當地風土人情的美味詮釋，無論是在夜市還是在小巷深處，處處都能品味到台灣南部的地道美食。';
            }else if(area === '東部地區'){
                this.areaTitle = '探索台灣東部的美食魅力';
                this.areaIntro = '台灣東部地區，如花蓮和台東，不僅風景優美，也以其特有的原住民文化和新鮮的海產著稱。無論是享受海邊美景還是品'
            }
        },
        toggleFoodBoxWidth(boxIndex) {
      // 将当前行的所有foodBox宽度设为0，除了被点击的那个
            this.lines.forEach(line => {
                line.forEach(box=>{
                    box.width='20%'
                    console.log(box.image)
                })
            })
            this.lines.forEach(line =>{
                line[boxIndex].width ='80%'
            })
        },
    }
}


</script>

<template>
    <breadCrum />
    

    <div class="imgContainer">
        <img src="./banner-food.svg" alt="">
    </div>

    <div class="container1">
        <div class="btnContainerMiddle1">
            <button id="splitBtn">美&nbsp&nbsp食&nbsp&nbsp饗&nbsp&nbsp宴</button>
            <!-- <button id="splitBtn"> 溫&nbsp&nbsp馨&nbsp&nbsp旅&nbsp&nbsp宿</button> -->
        </div>
        <div class="container2"></div>
        <div class="container3">
            <div class="btnContainerMiddle2" id="btnCont">
                <foodPagebutton @area-change="showAreaContent"/>
                <!-- <button class="northareaBtn" id="northareaBtn">北部地區</button>
                <button id="midareaBtn">中部地區</button>
                <button id="southareaBtn">南部地區</button>
                <button id="eastareaBtn">東部地區</button> -->
            </div>
            <div class="foodIntro">
                <div class="title">
                    <p id="title">{{areaTitle}}</p>
                </div>
                <div class="content">
                    <p id ="areaIntro">{{areaIntro}}</p>
                    <!-- <p id ="areaIntroes"></p> -->
                </div>
            </div>
            
            <div v-if="selectedArea === '北部地區'" class="northfoodFrame" id="northfoodFrame">

                <div v-for="(line, lineIndex) in lines" :key="lineIndex" class="Line" id="line">
                    <div  v-for="(box, boxIndex) in line" :key="boxIndex" class="foodBox" :style="{ width: box.width }" @click="toggleFoodBoxWidth(boxIndex)">
                        <div class="info" id="info">
                            <p class="title">店家資訊</p>
                        </div>
                        <img :src="box.imageUrl"  alt="foodImage">
                    </div>
                </div>
                    <!-- <div  v-for="(foodBox, boxIndex) in line" :key="boxIndex" class="foodBox" :style="{ width: foodBox.width }" @click="toggleFoodBoxWidth(lineIndex, boxIndex)">
                    <div class="foodBox">
                        <div class="info" id="info">
                            <p class="title">店家資訊</p>
                        </div>
                        <img src="../components/assets/food-img/北部/小王煮瓜.jpg"alt="" id="northfoodImg">
                    </div>
                    <div  v-for="(foodBox, boxIndex) in line" :key="boxIndex" class="foodBox" :style="{ width: foodBox.width }" @click="toggleFoodBoxWidth(lineIndex, boxIndex)">
                    <div class="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/忠貞米干.jpg"alt="" id="northfoodImg">
                    </div>
                    <div  v-for="(foodBox, boxIndex) in line" :key="boxIndex" class="foodBox" :style="{ width: foodBox.width }" @click="toggleFoodBoxWidth(lineIndex, boxIndex)">
                    <div class="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/東門市場米粉.jpg"alt="" id="northfoodImg">
                    </div>
                </div> -->
                <!-- <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/東門市場米粉.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/榮記客家湯圓.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/正好鮮肉小籠包.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/永心鳳茶.jpg"alt="" id="northfoodImg">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/湳雅夜市-騎士卷.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/牛家莊.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/福掛包.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/北部/菊姐大腸圈.jpg"alt="" id="northfoodImg">
                    </div>
                </div> -->
            </div>
            <div v-if="selectedArea === '中部地區'"class="midfoodFrame" id="midfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/三灣鵝肉.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/大元餅行.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/媽祖埔豆腐張.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/林記古早味麻薏湯.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/楊媽媽豬籠粄客家米食.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/游記扣仔嗲.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/源記粉粿冰.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/王記菜頭粿.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/蓮心雞腳凍.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/豆子芋園.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/中部/阿三肉圓.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox"><div class="info" id="info"></div>
                    <img src="../components/assets/food-img/中部/阿斗伯冷凍芋.jpg" alt=""></div>
                </div>
            </div>
            <div v-if="selectedArea === '南部地區'" class="southfoodFrame" id="southfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/六千牛肉湯.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/劉家汕頭麵.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/劉里長雞肉飯.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/北門砂鍋魚頭.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/古早味素食麻糬嬤.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/楊寶寶.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/吉林海產粥.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/松記羊肉.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/林家豬腳.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/矮仔成蝦仁飯.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/邵陽燒餅.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/南部/黃記涼麵涼圓.jpg" alt="">
                    </div>
                </div>
            </div>
            <div v-if="selectedArea === '東部地區'"class="eastfoodFrame" id="eastfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/一耕食堂.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/初。幸福現烤甜甜圈.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/來點卡路里早午餐.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/台澢號.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/單一純賣雞湯小卷米粉.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/大禹街龍鳳腿.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/明禮路蔥油餅.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/東池池上便當.jpg" alt="">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/榕樹下米苔目.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/正大漢方御膳食鋪.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/法式棺材板.jpg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="../components/assets/food-img/東部/葉式海鮮.jpg" alt="">
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap');

*{
    // border: 1px solid black;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Chocolate Classical Sans", sans-serif;
}
body{
    height: 100%;
}
.header{
    height:96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid rgba(57, 171, 75, 1);
    .headerImg{
        width:20%;
        height: 100%;
        // background-image: url("./騎行台灣logo.svg");
        // background-size: contain;
        // background-repeat: no-repeat;
        }
    
    .btnContainer{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 40%;
        height: 100%;
        button{
            background: rgba(57, 171, 75, 1);
            color: white;
            border-radius: 30px;
            width: 25%;
            height: 30%;
            font-size: 14px;
            border:none;
        }
    }
}
.breadCrumb{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin: auto;
    border-bottom: 2px solid rgba(57, 171, 75, 1);
    nav{
        margin-left:30px;
        height: 30px;
        .breadcrumb-item.active{
            font-size: 18px;
            color: rgba(57, 171, 75, 1);
        }
        a{
            color: rgba(57, 171, 75, 1);
        }
    }
}
.imgContainer{
    height: 600px;
    // width: 1280px;
}


.container1{
    height: 1600px;
    background-color: rgba(217, 217, 217, 1);
    position: relative;
    .btnContainerMiddle1{
        position: absolute;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        top: -6%;
        z-index: 99;
        button{
            height: 100%;
            display: block;
            width: 30%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            font-size: 40px;
            background-color: rgba(245, 245, 245, 1);
            border: none;
            color:rgba(57, 171, 75, 1);
        }
    }
    .container2{
        height: 100px;
    }
    .container3{
        position: relative;
        height: 1500px;
        position: relative;
        background-color:rgba(57, 171, 75, 1);
        z-index: 99;
        .btnContainerMiddle2{
            position: absolute;
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            top:-6%;
            z-index: 0;
            button{
                height: 80%;
                width: 20%;
                display: block;
                background-color: rgba(198, 224, 88, 1);
                color: white;
                border: none;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                font-size: 40px;
                z-index: 1;
            }
            .northareaBtn{
                background-color: rgba(57, 171, 75, 1);
            }
        }
        .foodIntro{
            margin: auto;
            width: 100%;
            height: 20%;
            text-align: center;
            .title{
                height: 50%;
                width: 40%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                
                p{
                    font-size: 36px;
                    width: 70%;
                    color: rgba(198, 224, 88, 1);
                    text-align: center;
                }
            }
            .content{
                height: 50%;
                width: 50%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                p{
                    color: white;
                    font-size: 18px;
                }
            }
        }
        .northfoodFrame, .midfoodFrame, .southfoodFrame, .eastfoodFrame{
            position: absolute;
            left:5%;
            // top:0;
            margin: 15px auto;
            width: 90%;
            height: 60%;
            display: flex;
            flex-wrap: wrap;
            // display: none;
            .Line{
                width: 100%;
                height: 33.3%;
                display: flex;
                overflow: hidden;
                .foodBox{
                    width: 25%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    // overflow: visible;
                    transition: 0.8s;
                    .info{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top:0;
                        left:0;
                        background-color: rgba(198, 224, 88, 1);
                        transition: 0.2s;
                        // display: none;
                    }
                    img{
                        position: absolute;
                        top: 0;
                        left: 0;
                        // object-fit: contain;
                        width: 430px;
                        height: 300px;
                    }
                }
            }
        }
        .northfoodFrame{
            display: inline-block;
            display: flex;
        }
    }
}

.footer{
    height: 304px;
    background: black;
    position: relative;
    // bottom: 0;
    img{
        position: absolute;
        bottom: 0;
        left: 1%;
    }
    .content{
        position: absolute;
        right:0;
        bottom: 0;
        margin-bottom: 20px;
        margin-right: 30px;
        p{
            color: white;
        }
        .firstContent, .secondContent{
            display: flex;
            justify-content: end;
        }
    }
    .footerBotLine{
        position: absolute;
        bottom: 0;
        height: 3%;
        background-color: rgba(57, 171, 75, 1);
        width: 100%;
    }
}

</style>