<script>

</script>

<template>
    <div class="footer">
        <img src="./assets/Slice 2-white-01.svg">
        <div class="content">
            <p class="firstContent">從北到南&nbsp,&nbsp&nbsp&nbsp從東到西,&nbsp&nbsp</p>
            <p class="secondContent">騎著公共自行車探索台灣的每一個角落﹒</p>
            <p class="thirdContent">From North to South,East to West,Explore Every Corner of Taiwan on a Public Bike.&nbsp&nbsp</p>
        </div>
        <div class="footerBotLine"></div>
    </div>
</template>

<style scoped lang="scss">
.footer {
  height: 35dvh;
  background: black;
  position: relative;

  img {
    width: 20dvw;
    height: 10dvh;
    position: absolute;
    bottom: 10%;
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
    bottom: 0%;
    height: 3%;
    background-color: rgba(57, 171, 75, 1);
    width: 100%;
  }
}
</style>