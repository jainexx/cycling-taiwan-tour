<script>
import breadCrum from '../components/breadCrum.vue'
import foodPagebutton from '../components/FoodPagebutton.vue'
export default{
    components:{
        breadCrum,
        foodPagebutton
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
                <foodPagebutton />
                <!-- <button class="northareaBtn" id="northareaBtn">北部地區</button>
                <button id="midareaBtn">中部地區</button>
                <button id="southareaBtn">南部地區</button>
                <button id="eastareaBtn">東部地區</button> -->
            </div>
            <div class="foodIntro">
                <div class="title">
                    <p id="title">探索台灣北部的美食魅力</p>
                </div>
                <div class="content">
                    <p id ="areaIntro">台灣北部﹐擁有豐富多樣的美食文化﹒從台北的夜市小吃﹐到基隆的海鮮盛宴﹐每一道料理都蘊含著獨特的地方風味﹒來到北部﹐一定要品嘗經典的蚵仔煎﹑牛肉麵﹐以及新竹的貢丸湯﹒每一口都是對傳統與創新的完美詮釋</p>
                    <!-- <p id ="areaIntroes"></p> -->
                </div>
            </div>
            
            <div class="northfoodFrame" id="northfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info">
                            <p class="title">店家資訊</p>
                        </div>
                        <img src="./north/Slice 4 (2).png"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/牛家莊.png"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/小王煮瓜.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/吳記螃蟹羹5號.jpg"alt="" id="northfoodImg">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/東門市場米粉.png"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/榮記客家湯圓.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/正好鮮肉小籠包.png"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/永心鳳茶.jpg"alt="" id="northfoodImg">
                    </div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/湳雅夜市-騎士卷.jpg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/福掛包.jpeg"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/菊姐大腸圈.png"alt="" id="northfoodImg">
                    </div>
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./north/蛋塔先生.jpg"alt="" id="northfoodImg">
                    </div>
                </div>
            </div>
            <div class="midfoodFrame" id="midfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox">
                        <div class="info" id="info"></div>
                        <img src="./footerLogo.svg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
            </div>
            <div class="southfoodFrame" id="southfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox">
                    <img src="./headerLogo.svg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
            </div>
            <div class="eastfoodFrame" id="eastfoodFrame">
                <div class="Line" id="line">
                    <div class="foodBox">
                    <img src="./banner-food.svg" alt="">
                    </div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
                <div class="Line" id="line">
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                    <div class="foodBox" id="foodBox"></div>
                </div>
            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap');

*{
    border: 1px solid black;
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
            display: none;
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