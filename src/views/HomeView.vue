<script>
import breadCrum from '../components/breadCrum.vue'

export default{
    components:{
        breadCrum
    }
}
</script>

<template>
    <breadCrum />

    <div class="topImage">
        <div class="threeImg">
            <img src="../components/assets/HomePageImg/topbanner01.png">
            <img src="../components/assets/HomePageImg/topbanner02.png">
            <img src="../components/assets/HomePageImg/topbanner03.png">
        </div>

        <img class="women" src="../components/assets/HomePageImg/ubike-woman.svg">

        <div class="topcontent">
            <p class="firstContent">從北到南,從東到西,</p>
            <p class="secondContent">騎著公共自行車探索台灣的每一個角落。</p>
            <p class="thirdContent">From North to South,East to West,Explore Every Corner of Taiwan on a Public Bike.&nbsp&nbsp</p>
        </div>
    </div>

    <div class="bicycleLineBox">
        <div class="text">
          <h1>開啟你的環台之旅：我們幫你準備好了！</h1>
          <p>沒有腳踏車嗎？不用擔心！
            <br>我們已經為你整理好了所有YouBike的站點位置，
            <br>隨時隨地都能借車還車，讓你的環台之旅更加便捷輕鬆。
          </p>
          <h1>準備好了嗎？騎上YouBike，<br>開啟一段難忘的環台之旅吧！</h1>
          <RouterLink class="button" to="/BicycleRoute" style="text-decoration: none;">馬上開始旅程！</RouterLink>
        </div>

        <img class="bicycleLine" src="../components/assets/HomePageImg/bicycleline01.png">
    </div>

    <div class="foodBox">
      <img class="homePageImg" src="../components/assets/HomePageImg/tw-01.png">
      <div class="textbox">
        <h1>發現台灣的每個驚喜：環台騎行之旅</h1>
        <p>讓腳踏車帶你探索這座寶島的每一個驚喜，
          <br>感受只有親身體驗才能擁有的樂趣！
          <br>用雙輪丈量台灣，感受心靈的悸動，
          <br>這將是一段無可取代的難忘旅程。
        </p>
        <RouterLink class="button" to="/FoodTourism" style="text-decoration: none;">前往我夢想的目的地</RouterLink>
        </div>
    </div>

    <div class="carbonBox">
        <div class="textBox">
          <h1>選擇自行車作為環台的交通工具，不僅減少碳排放，對環境友善，
            <br>還能提高個人的身體素質，鍛鍊心肺功能，增強體力。
          </h1>
          <p>環台是一個需要毅力和體力的挑戰，通過騎行達成這個目標，
            <br>能給自己帶來極大的成就感，激勵你在生活中面對其他挑戰。
            <br>選擇腳踏車環台，不僅是一種出行方式，更是一種生活態度。
            <br>讓我們一起騎上腳踏車，開啟一段難忘的環台之旅吧！
          </p>
          <RouterLink class="button" to="/CarbonEmissions" style="text-decoration: none;">為什麼要減少排放量？</RouterLink>
        </div>
    </div>

</template>

<style scoped lang="scss">
.topImage {
  width: 100dvw;
  height: 60dvh;
  background: linear-gradient(180deg, rgb(55, 170, 72), rgb(57, 171, 75));

  .threeImg {
    width: 100dvw;
    height: 50dvh;
    display: flex;
    justify-content: space-around;
    padding-top: 5dvh;
    padding-left: 5dvw;
    animation-name: example;
    animation-duration: 3s;
    animation-direction: reverse;

    img {
      width: 20%;
      border-radius: 150px;
      opacity: 70%;

      @keyframes example {
        from {
          opacity: 100%;
          filter: blur(2px);
        }

        to {
          opacity: 0%;
          filter: blur(10px);
        }
      }
    }
  }

  .women {
    width: 20dvw;
    position: absolute;
    top: 30dvh;
    left: 10dvw;
    // transform: translateX(50%);
    // transition: all 0.5s;
    animation-name: wom;
    animation-duration: 2.5s;
    animation-direction: reverse;

    @keyframes wom {
      from {
        opacity: 1;
        transform: translateX(0%);
        filter: blur(0px);
      }

      to {
        opacity: 0;
        transform: translateX(100%);
        filter: blur(5px);
      }
    }
  }
}

.topcontent {
  position: absolute;
  top: 35dvh;
  left: 50%;
  color: #f5f5f5;
  font-size: 15pt;
  font-weight: 500;
  color: white;
  text-shadow: black 0.2em 0.2em 0.8em;
  animation-name: example;
  animation-duration: 2.5s;
  animation-direction: reverse;


  @keyframes example {
    from {
      opacity: 100%;
      top: 35dvh;
      filter: blur(0px);
    }

    to {
      opacity: 0%;
      top: 30dvh;
      filter: blur(6px);
    }
  }

  .thirdContent {
    font-size: 9pt;
    font-weight: 100;
  }
}

.bicycleLineBox {
  width: 100dvw;
  height: 60dvh;
  background-color: #d9d9d9;
  border-radius: 30px 30px 0 0px;
  margin-top: -5dvh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .text{
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 20px;
      letter-spacing: 2px;
      color: #39ab4b;
      line-height: 40px;
    }

    p {
      padding-top: 2dvh;
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 30px;
      padding-bottom: 1dvh;
    }

    .button {
      width: 250px;
      height: 55px;
      border-radius: 50px;
      font-size: 20px;
      letter-spacing: 2px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #39ab4b;
      cursor: pointer;
      margin-top: 1dvh;

      &:hover {
        scale: 0.95;
        background-color: #c6e058;
      }
    }
  }

  .bicycleLine {
    width: 50dvw;
    height: 40dvh;
  }
}

.foodBox {
  width: 100%;
  height: 60dvh;
  background-color: #f5f5f5;
  border-radius: 30px 30px 0 0px;
  margin-top: -5dvh;
  position: sticky;
  top: 5dvh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .textbox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 20px;
      letter-spacing: 2px;
      color: #39ab4b;
      line-height: 40px;
    }

    p {
      padding-top: 2dvh;
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 30px;
      padding-bottom: 1dvh;
    }

    .button {
      width: 250px;
      height: 55px;
      border-radius: 50px;
      font-size: 20px;
      letter-spacing: 2px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #39ab4b;
      cursor: pointer;
      margin-top:1dvh;

      &:hover{
        scale: 0.95;
        background-color: #c6e058;
      }
    }
  }

  .homePageImg {
    width: 35dvw;
    height: 40dvh;
  }
}

.carbonBox {
  width: 100%;
  height: 55dvh;
  background-color: #d5d5d5;
  border-radius: 30px 30px 0 0px;
  position: sticky;
  top: 30dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  .textBox {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 20px;
      letter-spacing: 2px;
      color: #39ab4b;
      line-height: 40px;
    }

    p {
      padding-top: 2dvh;
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 30px;
      padding-bottom: 1dvh;
    }

    .button {
      width: 280px;
      height: 55px;
      border-radius: 50px;
      font-size: 20px;
      letter-spacing: 2px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #39ab4b;
      cursor: pointer;
      margin-top: 1dvh;

      &:hover {
        scale: 0.95;
        background-color: #c6e058;
      }
    }
  }
}

.footer {
  position: absolute;
  height: 304px;
  background: black;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
    left: 1%;
  }

  .content {
    position: absolute;
    right: 20px;
    bottom: 40px;

    p {
      color: white;
      right: 20px;
    }

    .firstContent,
    .secondContent {
      display: flex;
      justify-content: end;
    }
  }

  .footerBotLine {
    position: absolute;
    top: 304px;
    height: 3%;
    background-color: rgba(57, 171, 75, 1);
    width: 100%;
  }
}
</style>