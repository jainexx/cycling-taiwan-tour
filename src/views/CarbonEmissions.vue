<script>
import breadCrum from "../components/breadCrum.vue";
import TrafficButtons from "../components/Traffic.vue";
export default {
  data() {
    return {
      selectedTransportation: "",
    };
  },
  components: {
    breadCrum,
    TrafficButtons,
  },
  methods: {
    showareatext(Transportation) {
      this.selectedTransportation = Transportation;
      console.log(this.selectedTransportation);
    },
  },
};
</script>

<template>
  <breadCrum />

  <div class="container">
    <div class="shape">
      <img
        src="../components/assets/CarbonEmissions/163f5170a0fe62b70db2a913508a4aa1.png"
        alt=""
      />
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
    <div class="shape1">
      <img
        src="../components/assets/CarbonEmissions/88316ac878793b27f61688e36d4bc6fe.png"
        alt=""
      />
    </div>
  </div>
  <div class="BigTrapzoid">
    <div class="Trapzoid">
      <h1 class="contenTitle">了解您的碳足跡﹐從今天開始改變</h1>
      <p>根據資料，台灣的交通碳排放主要來自於道路交通。</p>
      <p>每年<b>交通碳排放量</b>占台灣總碳排放量的顯著部分。</p>
      <p>以私家車和摩托車為主要交通工具,碳排放量高於使用公共交通的國家</p>
      <p>環島一號線953.1km,採計環島1號線為主,作為各項交通工具的碳足跡。</p>
    </div>
    <div class="longMap">
      <div class="Trapzoid1">
        <div class="square1">
          <TrafficButtons @area-change="this.showareatext" />
          <!-- <div class="tiny1">
            <button class="car">汽車</button>
          </div>
          <div class="tiny2">
            <button class="motorcycle">機車</button>
          </div>
          <div class="tiny3">
            <button class="train">火車</button>
          </div>
          <div class="tiny4">
            <button class="THSR">高鐵</button>
          </div> -->
        </div>
        <div v-if="this.selectedTransportation == '汽車'" class="square2">
          <p>1556455645</p>
        </div>
        <div class="square3" v-else>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ab.
          </p>
        </div>
        <div class="square3" v-if="selectedTransportation === '摩托車'">
          <p>55645</p>
        </div>
        <div class="square4" v-if="selectedTransportation === '火車'">
          <p>100000</p>
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
  width: 100dvw;
  overflow-x: hidden;
}

.container {
  height: 350px;
  weight: 1000px;
  display: flex;
  justify-content: center;
  // border: 2px solid rgb(0, 0, 0);
  //   align-items: center;
  margin-top: 50px;
  margin-left: 101px;
  .shape {
    height: 180px;
    width: 180px;
    background-color: rgb(254, 95, 95);
    // border: 2px solid rgb(0, 0, 0);
    margin-top: 150px;
    margin-right: 30px;
    img {
      width: 100%;
      height: 100%;
    }
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
    img {
      width: 100%;
      height: 100%;
    }
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
    background-color: #8efb76;
    border: 1px solid rgb(0, 0, 0);
    display: flex;
    margin: auto;
    position: relative;
    // opacity: 0.2;

    .square1 {
      height: 400px;
      width: 500px;
      background-color: #c6e058;
      // border: 2px solid rgb(0, 0, 0);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
    .square2,
    .square3,
    .square4 {
      z-index: 99;
      height: 400px;
      width: 500px;
      background-color: #c6e058;
      // border: 2px solid rgb(0, 0, 0);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      right: 0%;
      top: 0%;
      .diminutive1 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        // border: 2px solid rgb(0, 0, 0);
      }
      .diminutive2 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        // border: 2px solid rgb(0, 0, 0);
      }
      .diminutive3 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        // border: 2px solid rgb(0, 0, 0);
      }
      .diminutive4 {
        height: 70px;
        width: 500px;
        background-color: rgb(254, 234, 17);
        // border: 2px solid rgb(0, 0, 0);
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
