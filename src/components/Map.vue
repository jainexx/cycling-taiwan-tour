<script>
export default {
    data() {
        return {
            isRoundIslandVisible: true,
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        showRoundIslandMap() {
            this.isRoundIslandVisible = true;
        },
        showSearchSpotMap() {
            this.isRoundIslandVisible = false;
        },
        initMap() {
            const map = new google.maps.Map(this.$refs.map, {
                center: new google.maps.LatLng(25.0374865, 121.5647688),
                zoom: 16,
                mapTypeControl: false,
            });
            
            const place = 

            const autocomplete = new google.maps.places.Autocomplete(
                this.$refs.autocompleteInput
            );
            autocomplete.addListener("place_changed", () => {
                let selectedPlace = autocomplete.getPlace();
                center = {
                    lat: selectedPlace.geometry.location.lat(),
                    lng: selectedPlace.geometry.location.lng(),
                };
                map.setCenter(center);

                const marker = new google.maps.marker.AdvancedMarkerElement({
                    position: center,
                    map: map,
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `
            <div>
                <h3>${selectedPlace.name}</h3>
                <p>地址: ${selectedPlace.formatted_address}</p>
                <p>經緯度: ${selectedPlace.geometry.location}</p>
            </div>`,
                });
                infowindow.open(map, marker);
            });
            
        },
    },
};
</script>

<template>
    <div class="mapSection">
        <div class="btnContainer">
            <button @click="showRoundIslandMap" id="roundIslandBtn">
                環島路線
            </button>
            <button @click="showSearchSpotMap" id="searchSpotBtn">
                搜尋共享單車
            </button>
        </div>
        <div class="mapBody">
            <div
                :class="{ hidden: !isRoundIslandVisible }"
                class="roundIslandMap"
            >
                <div class="mapText">
                    <h3>點選地圖左側選單，立即挑戰9日單車環島！</h3>
                    <p>探索台灣的絕美風景，享受自由自在的騎行樂趣。</p>
                    <p>
                        不論你是初學者還是騎行高手，都能找到專屬你的理想路線！
                    </p>
                </div>
                <iframe
                    src="https://www.google.com/maps/d/u/0/embed?mid=1FsrtdQ8tNj02hWkQw8ajiSVrhAJYCpo&ehbc=2E312F&noprof=1"
                ></iframe>
            </div>
            <div
                :class="{ hidden: isRoundIslandVisible }"
                class="searchSpotMap"
            >
                <div class="searchArea">
                    <p>輸入地址</p>
                    <input
                        type="text"
                        name="search"
                        placeholder="請輸入地址..."
                        ref="autocompleteInput"
                    />
                    <button id="searchUbikeBtn">搜尋附近Ubike</button>
                </div>
                <div ref="map" id="mapApi"></div>
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
            display: flex;
            flex-direction: column;

            .searchArea {
                width: 100%;
                height: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    font-size: 2rem;
                    color: $secondColor;
                }

                input {
                    border: $secondColor;
                    margin-bottom: 1%;
                    font-size: 1.2rem;
                    width: 40dvw;
                }
                button {
                    background: $secondColor;
                    color: $fourthColor;
                    border: $firstColor;
                    font-size: 1.2rem;
                    border-radius: 2px;
                    cursor: pointer;
                    transition: all 0.3s;
                    &:hover {
                        scale: 1.2;
                    }
                    &:active {
                        scale: 0.8;
                    }
                }
            }

            #mapApi {
                width: 100%;
                height: 80%;
                border-radius: 20px;
                border: 2px solid $secondColor;
            }
        }

        .hidden {
            display: none;
        }
    }
}
</style>
