<script>
export default {
    data() {
        return {
            isRoundIslandVisible: true,
            selectedPlace: {},
            btnIsActive: false,
            switchBtn: false,

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
        btnChangeColor(){
            this.switchBtn = false;
            this.btnIsActive = !this.btnIsActive;
        },
        anotherBtnChange(){
            this.switchBtn = !this.switchBtn;
            this.btnIsActive = false;
        },
        initMap() {
            const map = new google.maps.Map(this.$refs.map, {
                center: new google.maps.LatLng(25.0374865, 121.5647688),
                zoom: 17,
                mapId: "4504f8b37365c3d0",
                mapTypeControl: false,
            });

            const autocomplete = new google.maps.places.Autocomplete(
                this.$refs.autocompleteInput
            );
            autocomplete.addListener("place_changed", () => {
                this.selectedPlace = autocomplete.getPlace();
                let center = {
                    lat: this.selectedPlace.geometry.location.lat(),
                    lng: this.selectedPlace.geometry.location.lng(),
                };
                map.setCenter(center);

                const marker = new google.maps.marker.AdvancedMarkerElement({
                    position: center,
                    map: map,
                });

                const infowindow = new google.maps.InfoWindow({
                    content: `
            <div>
                <h6>${this.selectedPlace.name}</h6>
                <p>地址: ${this.selectedPlace.formatted_address}</p>
                <p>經緯度: ${this.selectedPlace.geometry.location}</p>
            </div>`,
                });
                infowindow.open(map, marker);
            });

            const searchUbikeBtn = document.querySelector("#searchUbikeBtn");
            searchUbikeBtn.addEventListener('click', ()=>{
                const service = new google.maps.places.PlacesService(map);
                const request = {
                    location: this.selectedPlace.geometry.location,
                    radius: "400",
                    keyword: "YouBike",
                }
    
                service.nearbySearch(request, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        results.forEach((place) => {
                            const placeId = place.place_id;
    
                            const psyduckImg = document.createElement("img");
                            psyduckImg.src =
                                "src/components/assets/BicycleRouteImg/Psyduck-Pokemon-PNG.png";
                            psyduckImg.style.width = "30px";
                            psyduckImg.style.height = "40px";

                            const psyduckMarker =
                                new google.maps.marker.AdvancedMarkerElement({
                                    position: place.geometry.location,
                                    map: map,
                                    content: psyduckImg,
                                });
    
                            const infowindow = new google.maps.InfoWindow({
                                content: `
                        <div>
                            <h6>${place.name}</h6>
                            <p>經緯度: ${place.geometry.location}</p>
                            <a href="https://www.google.com/maps/place/?q=place_id:${placeId}" target="_blank">前往Google Maps查看</a>
                        </div>`,
                            });
    
                            psyduckMarker.addListener("click", () => {
                                infowindow.open({
                                    anchor: psyduckMarker,
                                    map,
                                });
                            });
                        });
                    } else {
                        alert("找不到附近的 YouBike 站點");
                    }
                });
            })
            
        },
        downloadMap(){
            const link = document.createElement('a');
            link.href = 'src/components/assets/BicycleRouteImg/環島1號線.kmz';
            link.download = '環島1號線(9日).kmz'; //<a> 元素的download屬性，指定檔案名
            document.body.appendChild(link);
            link.click(); //觸發 <a> 元素的 click 事件，觸發download屬性
            document.body.removeChild(link);
        }
        
    },
};
</script>

<template>
    <div class="mapSection">
        <div class="btnContainer">
            <button @click="showRoundIslandMap();btnChangeColor()" class="roundIslandBtn" :class="{'btn':true, 'btnActive': btnIsActive }">
                環島路線
            </button>
            <button  @click="showSearchSpotMap();anotherBtnChange()" class="searchSpotBtn" :class="{'btn':true, 'btnActive': switchBtn }">
                搜尋共享單車
            </button>
        </div>
        <div class="mapBody">
            <div
                :class="{ hidden: !isRoundIslandVisible }"
                class="roundIslandMap"
            >
                <div class="mapText">
                    <p>點選地圖左側選單，立即挑戰9日單車環島！探索台灣的絕美風景，享受自由自在的騎行樂趣!</p>
                    <!-- <p>
                        不論你是初學者還是騎行高手，都能找到專屬你的理想路線！
                    </p> -->
                    <button class="smallBtn1" @click="downloadMap">下載路線圖</button>
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
                    <p>搜尋附近YouBike</p>
                    <div class="inputArea">
                        <input
                            type="text"
                            name="search"
                            placeholder="請輸入地址..."
                            ref="autocompleteInput"
                        />
                        <button id="searchUbikeBtn" class="smallBtn2">搜尋</button>
                    </div>
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

        .btn {
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
        .btnActive {
            color:$secondColor;
            height: 100%;
            font-weight: bolder;
        }

        .roundIslandBtn {
            left: 5%;
        }

        .searchSpotBtn {
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

                p{

                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }

                .smallBtn1 {
                    width: 50%;
                    letter-spacing: 10px;
                    background: $secondColor;
                    color: $fourthColor;
                    border: $firstColor;
                    font-size: 1.2rem;
                    border-radius: 20px;
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
                    font-size: 1.8rem;
                    color: $secondColor;
                }

                .inputArea{
                    display: flex;
                    margin-top: 1%;
                    input {
                        width: 40dvw;
                        height: 5dvh;
                        border: $secondColor;
                        margin-bottom: 1%;
                        font-size: 1.2rem;
                        border-top-left-radius:10px;
                        border-bottom-left-radius:10px;
                    }
                    .smallBtn2 {
                        width: 15%;
                        height: 5dvh;
                        background: $secondColor;
                        color: $fourthColor;
                        border: $firstColor;
                        font-size: 1.2rem;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                        cursor: pointer;
                        transition: all 0.3s;
                        &:hover {
                            font-weight: bold;
                        }
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
