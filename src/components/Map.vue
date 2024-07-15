<script>
export default {
    data() {
        return {
            isRoundIslandVisible: true,
        };
    },
    methods: {
        showRoundIslandMap() {
            this.isRoundIslandVisible = true;
        },
        showSearchSpotMap() {
            this.isRoundIslandVisible = false;
        },
    },
};
</script>

<template>
    <div class="mapSection">
        <div class="btnContainer">
            <button @click="showRoundIslandMap" id="roundIslandBtn">環島路線</button>
            <button @click="showSearchSpotMap" id="searchSpotBtn">搜尋共享單車</button>
        </div>
        <div class="mapBody">
            <div :class="{ hidden: !isRoundIslandVisible }" class="roundIslandMap">
                <div class="mapText">
                    <h3>點選地圖左側選單，立即挑戰9日單車環島！</h3>
                    <p>探索台灣的絕美風景，享受自由自在的騎行樂趣。</p>
                    <p>不論你是初學者還是騎行高手，都能找到專屬你的理想路線！</p>
                </div>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1FsrtdQ8tNj02hWkQw8ajiSVrhAJYCpo&ehbc=2E312F&noprof=1"></iframe>
            </div>
            <div :class="{ hidden: isRoundIslandVisible }" class="searchSpotMap">
                <div id="mapApi"></div>
                <div class="searchArea"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap");

$firstColor: #c6e058;
$secondColor: #39ab4b;
$thirdColor: #6f9c76;
$fourthColor: #f5f5f5;
$fifthColor: #d9d9d9;

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Chocolate Classical Sans", sans-serif;
}

.mapSection {
    width: 80%;
    height: 90%;
    position: absolute;
    left: 10%;
    display: flex;
    flex-direction: column;

    .btnContainer {
        height: 10%;
        background: $secondColor;
        display: flex;
        justify-content: space-between;
        position: relative;

        button {
            height: 80%;
            width: 40%;
            background: $firstColor;
            color: $fourthColor;
            border: none;
            font-size: 2rem;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            position: absolute;
            bottom: 0;
            cursor: pointer;
        }

        #roundIslandBtn {
            left: 5%;
        }

        #searchSpotBtn {
            right: 5%;
        }
    }

    .mapBody {
        height: 90%;
        background: $firstColor;
        padding: 2%;

        .roundIslandMap {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;

            .mapText {
                height: 15%;
                color: $secondColor;
                font-size: 1.2rem;
                font-weight: bold;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h3 {
                    background: $fourthColor;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 1.5rem;
                    margin-bottom: 2%;
                }
            }

            iframe {
                width: 95%;
                height: 85%;
                border-radius: 20px;
                border: none;
                box-shadow: $thirdColor;
                position: absolute;
                bottom: 0;
            }
        }

        .searchSpotMap {
            height: 100%;
            width: 100%;
            border: 2px solid red;
            display: flex;
            justify-content: space-between;
        }

        .hidden {
            display: none;
        }
    }
}
</style>
