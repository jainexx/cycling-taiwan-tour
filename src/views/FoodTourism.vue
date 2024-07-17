<script>
import breadCrum from '../components/breadCrum.vue'
import foodPagebutton from '../components/FoodPagebutton.vue'
import FoodNorth from '../components/FoodNorth.vue'
import FoodMid from '../components/FoodMid.vue'
import FoodSouth from '../components/FoodSouth.vue'
import FoodEast from '../components/FoodEast.vue'
export default{
    components:{
        breadCrum,
        foodPagebutton,
        FoodNorth,
        FoodMid,
        FoodSouth,
        FoodEast
    },
    data(){
        return{
            selectedArea:'北部地區',
            areaTitle:'探索台灣北部的美食魅力',
            areaIntro:'台灣北部﹐擁有豐富多樣的美食文化﹒從台北的夜市小吃﹐到基隆的海鮮盛宴﹐每一道料理都蘊含著獨特的地方風味﹒來到北部﹐一定要品嘗經典的蚵仔煎﹑牛肉麵﹐以及新竹的貢丸湯﹒每一口都是對傳統與創新的完美詮釋',
            lines:[
                {}
            ]
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
    }
}
</script>
<template>
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.76326155790832!2d121.7428295!3d25.1285163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4e158be43c41%3A0xf567e0b145940e00!2z6J6D6J-557654oCn5rK56aOvKOWQs-iomCDnrKw16Jmf5pSk77yJ!5e0!3m2!1szh-TW!2stw!4v1721092195501!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <breadCrum />
    <div class="imgContainer">
        <img src="../components/assets/banner-02-01.png" alt="">
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
                <FoodNorth />
            </div>
                
            <div v-if="selectedArea === '中部地區'"class="midfoodFrame" id="midfoodFrame">
                <FoodMid />
                
            </div>
            <div v-if="selectedArea === '南部地區'" class="southfoodFrame" id="southfoodFrame">
                <FoodSouth />
                
            </div>
            <div v-if="selectedArea === '東部地區'"class="eastfoodFrame" id="eastfoodFrame">
                <FoodEast />
                
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
    height: 800px;
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 90%;
        height: 100%;
    }
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
                width:60%;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                p{
                    color: white;
                    font-size: 24px;
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
            // display: flex;
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
                    width: 100%;
                    .intro{
                        height: 100%;
                        width: 100%;
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
                            padding: 5%;
                            }
                        .content{
                            margin-top: 40px;
                            font-size: 25px;
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


