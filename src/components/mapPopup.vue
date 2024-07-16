    <template>
        <div class="background">

        </div>
        <div class="map-container">
            <div ref="map" class="google-map"></div>
            <button @click="closeMapEmit()" type="button">X</button>
        </div>
    </template>

    <script>
    export default {
        props: {
            address: {
                type: String,
                required: true
                },
            mapVisible:{
                type: Boolean,
                required: true
                },
            title:{
                type: String,
                required: true,
                },
        },
        
        // mounted() {
        //     this.initMap();
        // },
        mounted(){
            if(this.mapVisible){
                this.initMap()
            }
        },
        watch: {
            mapVisible(newValue) {
                if (newValue) {
                    this.initMap();
                }
            }
        },
        methods: {
            closeMapEmit(){
                this.$emit('close')
            },
            
            initMap() {
 
                const geocoder = new google.maps.Geocoder();
                const mapOptions = {
                zoom: 20,
                center: { lat: 0, lng: 0 }  
                };
                const map = new google.maps.Map(this.$refs.map, mapOptions)
                const marker = new google.maps.Marker({
                    position: map.getCenter(),
                    map: map,
                    title: 'Marker Title'
                });

                geocoder.geocode({ address: this.address }, (results, status) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        map.setCenter(results[0].geometry.location);
                        new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        // title:this.title
                    })
                    this.infoWindow = new google.maps.InfoWindow({
                        content: `<div><h3>${results[0].formatted_address}</h3><p>${this.address}</p></div>`
                    })

                    marker.addListener  ("click", () => {
                        this.infoWindow.open(this.map, marker);
                    })
                    } else {
                    alert('地址解析失败: ' + status);
                    }
                });
                }
            }
        }
    </script>

    <style scoped lang="scss">
    .background{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.3;
    }
    .map-container {
        position: fixed;
        // position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
        height: 70%; 
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(198, 224, 88, 1);
        border-radius: 20px;
        .google-map{
            width: 90%;
            height: 90%;
            border-radius: 20px;
            // position: absolute;
            // transform: translate(-50%,-50%);
        
        }
        button{
            position: absolute;
            top:0;
            right: 0;
            background-color: #39AB4B;
            color: #ffffff;
            width: 5%;
            height: 10%;
            font-size: 36px;
            border: none;
            border-radius: 20px;
    }
    }

    

    </style>