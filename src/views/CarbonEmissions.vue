<script>
import breadCrum from "../components/breadCrum.vue";
export default {
  components: {
    breadCrum,
  },
};
</script>

<template>
  <breadCrum />

  <div class="container">
    <div class="shape">
      <img src="../components/assets/" alt="" />
    </div>
    <div class="BigRectangle">
      <p class="title">碳足跡是甚麼?</p>
      <p>
        <b>碳足跡</b>是指人類活動產生溫室氣體排放量,通常以二氧化碳當來衡量。
      </p>
      <p>
        它涵蓋了個人,企業或產品在生產,運輸,使用和廢棄過程中所排放的全部溫室氣體。
      </p>
      <p>減少碳足跡有助於減緩氣候變化,保護地球環境。</p>
    </div>
    <div class="shape1"></div>
  </div>
  <div class="BigTrapzoid">
    <div class="Trapzoid">
      <h1 class="contenTitle">了解您的碳足跡﹐從今天開始改變</h1>
      <p>根據資料，台灣的交通碳排放主要來自於道路交通。</p>
      <p>每年<b>交通碳排放量</b>占台灣總碳排放量的顯著部分。</p>
      <p>以私家車和摩托車為主要交通工具,碳排放量高於使用公共交通的國家</p>
    </div>
    <div class="longMap">
      <div class="Trapzoid1">
        <div class="square1">
          <div class="tiny1"></div>
          <div class="tiny2"></div>
          <div class="tiny3"></div>
          <div class="tiny4"></div>
          <div class="tiny5"></div>
        </div>
        <div class="square2">
          <div class="diminutive1"></div>
          <div class="diminutive2"></div>
          <div class="diminutive3"></div>
          <div class="diminutive4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap");

* {
  // border: 1px solid black;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Chocolate Classical Sans", sans-serif;
}
body {
  height: 100dvh;
  width: 100vw;
  overflow-x: hidden;
}

.container {
  height: 400px;
  weight: 1000px;
  display: flex;
  justify-content: center;
  //   border-bottom: 2px solid rgb(0, 0, 0);
  //   align-items: center;
  margin-top: 50px;
  .shape {
    height: 180px;
    width: 180px;
    background-color: rgb(254, 95, 95);
    border: 2px solid rgb(0, 0, 0);
    margin-top: 150px;
    margin-right: 30px;
  }
  .BigRectangle {
    height: 300px;
    width: 1000px;
    background-color: rgb(255, 255, 255);
    // border: 2px solid rgb(0, 0, 0);
    // display: flex;
    // justify-content: space-bet、ween;
    // align-items: end;
    // margin-bottom: 700px;
    text-align: center;
    .title {
      font-size: 36px;
      margin-bottom: 30px;
      color: #39ab4b;
    }
    p {
      font-size: 24px;
    }
  }
  .shape1 {
    height: 180px;
    width: 180px;
    background-color: rgb(254, 95, 95);
    // border: 2px solid #000000;
    margin-top: 150px;
    margin-left: 30px;
  }
}
.BigTrapzoid {
  height: 1000px;
  width: 100dvw;
  background-color: #c6e058;
  //   border: 2px solid rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 500px;
  border-top-right-radius: 500px;
  //   overflow: hidden;

  .Trapzoid {
    height: 200px;
    width: 1000px;
    background-color: #c6e058;
    margin-top: 60px;
    text-align: center;
    border-top-left-radius: 700px;
    border-top-right-radius: 700px;
    .contenTitle {
      color: white;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      text-align: center;
    }
  }
  .longMap {
    width: 1200px;
    height: 600px;
    margin: auto;
  }
  .Trapzoid1 {
    height: 400px;
    width: 1000px;
    background-color: rgb(255, 141, 141);
    border: 2px solid rgb(0, 0, 0);
    display: flex;
    margin: auto;
    .square1 {
      height: 400px;
      width: 500px;
      background-color: rgb(255, 207, 16);
      border: 2px solid rgb(0, 0, 0);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      .tiny1 {
        height: 50px;
        width: 500px;
        background-color: rgb(17, 254, 194);
        border: 2px solid rgb(0, 0, 0);
      }
      .tiny2 {
        height: 50px;
        width: 500px;
        background-color: rgb(17, 254, 194);
        border: 2px solid rgb(0, 0, 0);
      }
      .tiny3 {
        height: 50px;
        width: 500px;
        background-color: rgb(17, 254, 194);
        border: 2px solid rgb(0, 0, 0);
      }
      .tiny4 {
        height: 50px;
        width: 500px;
        background-color: rgb(17, 254, 194);
        border: 2px solid rgb(0, 0, 0);
      }
      .tiny5 {
        height: 50px;
        width: 500px;
        background-color: rgb(17, 254, 194);
        border: 2px solid rgb(0, 0, 0);
      }
    }
    .square2 {
      height: 400px;
      width: 500px;
      background-color: rgb(255, 112, 68);
      border: 2px solid rgb(0, 0, 0);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .diminutive1 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        border: 2px solid rgb(0, 0, 0);
      }
      .diminutive2 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        border: 2px solid rgb(0, 0, 0);
      }
      .diminutive3 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        border: 2px solid rgb(0, 0, 0);
      }
      .diminutive4 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        border: 2px solid rgb(0, 0, 0);
      }
    }
  }
}

.footer {
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
    right: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-right: 30px;
    p {
      color: white;
    }
    .firstContent,
    .secondContent {
      display: flex;
      justify-content: end;
    }
  }
  .footerBotLine {
    position: absolute;
    bottom: 0;
    height: 3%;
    background-color: rgba(57, 171, 75, 1);
    width: 100%;
  }
}
</style>
