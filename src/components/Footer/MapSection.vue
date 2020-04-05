<template>
    <div class="map-block">
        <div class="yandex-map">
            <h3>Как к нам пройти</h3>
            <div class="map-ways">
                <span class="text-way">Добраться до офиса от метро можно двумя способами</span>
                <!-- <div class="first-way way">
                    <span>м. Электозаводская</span>
                </div>
                <div class="second-way way">
                    <span>м. Семёновская</span>
                </div> -->
            </div>
            <b-container>
                <yandex-map 
                    :coords="coords"
                    zoom="16"
                    style="width: 100%; height: 345px;"
                >
                    <ymap-marker
                        marker-id="123" 
                        :coords="coords"
                    />
                    <ymap-marker
                        marker-id="1"
                        marker-type="polyline"
                        :marker-stroke="{color: '#ff0000', width: 5}"
                        :coords="polyline1"
                    />
                    <ymap-marker
                        marker-id="1"
                        marker-type="polyline"
                        :marker-stroke="{color: '#265985', width: 5}"
                        :coords="polyline2"
                    />
                </yandex-map>
            </b-container>
            <Footer />
            <div class="footer-background"></div>
        </div>
    </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { coordLinesElectro, coordLinesSemen } from './Coordinate'
import Footer from './Footer'

export default {
  components: { yandexMap, ymapMarker, Footer },
  data() {
    return {
        coords: [55.782782107260545,37.712498275463034],
        polyline1: coordLinesElectro,
        polyline2: coordLinesSemen,
        // markerIcon: {
        //     layout: 'default#imageWithContent',
        //     imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        //     imageSize: [43, 43],
        //     imageOffset: [0, 0],
        //     content: '123 v12',
        //     contentOffset: [0, 15],
        //     contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // }
    };
  },
  methods: { }
};
</script>

<style lang="scss">
.map-block {
    padding-top: 100px;
    .yandex-map {
        position: relative;
        h3 {
            margin-bottom: 0;
            font-weight: 800;
        }
        .map-ways {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
            .text-way {
                width: 100%;
                font-size: 14px;
                font-weight: bold;
                // margin-bottom: 30px;
            }
            .first-way {
                &:before {
                    content: "";
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    right: -25px;
                    top: 25px;
                    background: url('../../assets/maps-and-flags.png') center center / contain no-repeat;
                }
                span {
                    &:before {
                        content: "1";
                        position: relative;
                        font-size: 48px;
                        top: 3px;
                        right: -19px;
                        font-weight: 800;
                        color: #ff000045;
                    }
                    &:after {
                        content: "";

                    }
                }
                
            }
            .second-way {
                span {
                    &:after {
                        content: "2";
                        position: relative;
                        font-size: 48px;
                        top: 3px;
                        right: 20px;
                        font-weight: 800;
                        color: #26598582;
                    }
                }
            }
            .way {
                width: 50%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    .footer-background {
        width: 100%;
        min-height: 415px;
        position: absolute;
        top: 250px;
        z-index: -1;
        background: #32325d;
    }
    .container {
        // z-index: 1;
        .ymap-container {
            box-shadow: 0 25px 60px -12px rgba(0,0,0,0.5);
        }
    }
}
</style>
