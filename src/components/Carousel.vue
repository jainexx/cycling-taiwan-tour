<script>
import nsYangjin from './assets/photo/NS陽金.jpg';
import twbDongSanda from './assets/photo/TWB東三塔.jpg';
import kk120 from './assets/photo/KK120.jpg';
import huanHuadong365 from './assets/photo/環花東365.jpg';
import shuangxiLivDay from './assets/photo/雙溪Liv day.jpg';
import zhinanGong from './assets/photo/紫南宮.jpg';
import wuling from './assets/photo/武嶺.jpg';
import huanDaliaoMiaoli from './assets/photo/環大苗栗.jpg';
import xuejianSimagang from './assets/photo/雪見司馬.jpg';
import shidaiQilunJie from './assets/photo/時代騎輪節.jpg';
import tbaBeigao360 from './assets/photo/TBA北高360.jpg';
import lianlian197 from './assets/photo/戀戀197.jpg';

export default {
    data () {
        return {
            events:[
                {
                    image: nsYangjin,
                    itle: '1月 NeverStop ：陽金P字山道挑戰',
                    date: '2024年1月7日（星期日）',
                    route: '總爬升約2,200公尺;全程約75公里'
                },
                { 
                    imgSrc: twbDongSanda, 
                    title: '2月 TWB 東三塔550', 
                    date: '日期：2024年2月24日（星期六） ～ 2024年2月25日（星期日）', 
                    route: '活動路線：總爬升約5,000公尺;全程約550公里' 
                },
                { 
                    imgSrc: kk120, 
                    title: '3月 GIANT KK120 自我挑戰活動', 
                    date: '日期：2024年3月17日（星期日）', 
                    route: '活動路線：總爬升約300公尺;全程約95公里' 
                },
                {
                    imgSrc: huanHuadong365, 
                    title: '4月 環花東365自行車挑戰', 
                    date: '日期：2024年04月13日（星期六）～ 2024年04月14日（星期日）', 
                    route: '活動路線：總爬升約2,000公尺;全程約340公里'
                },
                { 
                    imgSrc: shuangxiLivDay, 
                    title: '5月 LIVDAY初夏大山-騎訪雙溪',
                    date: '日期：2024年05月26日（星期日）', 
                    route: '活動路線：總爬升約1,164公尺;全程約66公里' 
                },
                { 
                    imgSrc: zhinanGong, 
                    title: '6月 NeverStop：一騎來發財紫南宮環縣極限挑戰', 
                    date: '日期：2024年06月02日（星期日）', 
                    route: '活動路線：總爬升約800公尺;全程約99.9公里' 
                },
                { 
                    imgSrc: wuling, 
                    title: '7月 TIS 崇越盃武嶺自行車挑戰賽', 
                    date: '日期：2024年06月24日（星期一）', 
                    route: '活動路線：總爬升約2,623公尺;全程約52公里' 
                },
                { 
                    imgSrc: huanDaliaoMiaoli, 
                    title: '8月 TBA 環大苗栗經典挑戰', 
                    date: '日期：2024年08月25日（星期日）', 
                    route: '活動路線：總爬升約1,200公尺;全程約107公里' 
                },
                { 
                    imgSrc: xuejianSimagang, 
                    title: '9月 GIANT CUP 百里千尺 - 雪見司馬', 
                    date: '日期：2024年09月01日（星期日）', 
                    route: '活動路線：總爬升約2,400公尺;全程約136公里' 
                },
                { 
                    imgSrc: shidaiQilunJie, 
                    title: '10月 時代騎輪節', 
                    date: '日期：2024年10月20日（星期日）', 
                    route: '活動路線：總爬升約600公尺;全程約102公里' 
                },
                { 
                    imgSrc: tbaBeigao360, 
                    title: '11月 TBA 北高360', 
                    date: '日期：2024年11月08日（星期五）', 
                    route: '活動路線：總爬升約300公尺;全程約360公里' 
                },
                { 
                    imgSrc: lianlian197, 
                    title: '12月 戀戀197', 
                    date: '日期：2024年12月01日（星期日）', 
                    route: '活動路線：總爬升約1,100公尺;全程約130公里' 
                }
            ]
        };
    },
    mounted () {
        this.initCarousel();
    },
    methods: {
        initCarousel() {
            const owl = $('.owl-carousel');
            owl.owlCarousel ({
                loop: true,
                margin: 10,
                responsiveClass: true,
                center: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    },
                    1500: {
                        items: 3
                    }
                }
            });
            // 手動更新頁面窗口大小變更，觸發 resize 事件以確保輪播顯示正確
            $(window).trigger('resize');
            // 手動刷新頁面窗口，觸發 refresh 事件重新渲染元件以確保輪播顯示正確
            owl.trigger('refresh.owl.carousel');
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="slider">
            <div class="owl-carousel">
                <div class="slider-card">
                    <img src="./assets/photo/NS陽金.jpg" alt="NS陽金">
                    <div class="cardBody">
                        <h4>1月 NeverStop ：陽金P字山道挑戰</h4>
                        <p>日期：2024年1月7日（星期日）</p>
                        <p>活動路線：總爬升約2,200公尺;全程約75公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/TWB東三塔.jpg" alt="TWB東三塔">
                    <div class="cardBody">
                        <h4>2月 TWB 東三塔550</h4>
                        <p>日期：2024年2月24日（星期六） </p>
                        <p>活動路線：總爬升約5,000公尺;全程約550公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/KK120.jpg" alt="KK120">
                    <div class="cardBody">
                        <h4>3月 GIANT KK120 自我挑戰活動</h4>
                        <p>日期：2024年3月17日（星期日）</p>
                        <p>活動路線：總爬升約300公尺;全程約95公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/環花東365.jpg" alt="環花東365">
                    <div class="cardBody">
                        <h4>4月 環花東365自行車挑戰</h4>
                        <p>日期：2024年04月13日（星期六）</p>
                        <p>活動路線：總爬升約2,000公尺;全程約340公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/雙溪Liv day.jpg" alt="雙溪Liv day">
                    <div class="cardBody">
                        <h4>5月 LIVDAY初夏大山-騎訪雙溪</h4>
                        <p>日期：2024年05月26日（星期日）</p>
                        <p>活動路線：總爬升約1,164公尺;全程約66公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/紫南宮.jpg" alt="紫南宮">
                    <div class="cardBody">
                        <h4>6月 NeverStop：一騎來發財紫南宮環縣極限挑戰</h4>
                        <p>日期：2024年06月02日（星期日）</p>
                        <p>活動路線：總爬升約800公尺;全程約99.9公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/武嶺.jpg" alt="武嶺">
                    <div class="cardBody">
                        <h4>7月 TIS 崇越盃武嶺自行車挑戰賽</h4>
                        <p>日期：2024年06月24日（星期一）</p>
                        <p>活動路線：總爬升約2,623公尺;全程約52公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/環大苗栗.jpg" alt="環大苗栗">
                    <div class="cardBody">
                        <h4>8月 TBA 環大苗栗經典挑戰</h4>
                        <p>日期：2024年08月25日（星期日）</p>
                        <p>活動路線：總爬升約1,200公尺;全程約107公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/雪見司馬.jpg" alt="雪見司馬">
                    <div class="cardBody">
                        <h4>9月 GIANT CUP 百里千尺 - 雪見司馬</h4>
                        <p>日期：2024年09月01日（星期日）</p>
                        <p>活動路線：總爬升約2,400公尺;全程約136公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/時代騎輪節.jpg" alt="時代騎輪節">
                    <div class="cardBody">
                        <h4>10月 時代騎輪節</h4>
                        <p>日期：2024年10月20日（星期日）</p>
                        <p>活動路線：總爬升約600公尺;全程約102公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/TBA北高360.jpg" alt="TBA北高360">
                    <div class="cardBody">
                        <h4>11月 TBA 北高360</h4>
                        <p>日期：2024年11月08日（星期五）</p>
                        <p>活動路線：總爬升約300公尺;全程約360公里</p>
                    </div>
                </div>
                <div class="slider-card">
                    <img src="./assets/photo/戀戀197.jpg" alt="戀戀197">
                    <div class="cardBody">
                        <h4>12月 戀戀197</h4>
                        <p>日期：2024年12月01日（星期日）</p>
                        <p>活動路線：總爬升約1,100公尺;全程約130公里</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    
    .slider {
        margin-bottom: 20px;
        position: relative;

        :deep(.owl-item.active.center .slider-card) {
            transform: scale(1.15);
            opacity: 1;
            &:hover .cardBody {
                display: block;
            }
        }

        .slider-card {
            background-color: #fff;
            margin: 50px 15px 90px 15px;
            border-radius: 5px;
            transform: scale(0.9);
            opacity: 0.5;
            transition: all 0.3s;

            img {
                border-radius: 5px 5px 0px 0px;
            }

            .cardBody {
                display: none;
                margin-top: 5%;

                h4 {
                font-size: 20px;
                text-align: center;
                font-weight: bold;
                }

                p {
                font-size: 15px;
                margin: 5% 0;
                text-align: center;
                }
            }
        }
    }
}

:deep(.owl-nav .owl-next) {
    position: absolute;
    top: 150px;
    right: -50px;
    opacity: 1;
    font-size: 50px !important;
    z-index: 1;
    transform: translateY(-50%);
}

:deep(.owl-nav .owl-prev) {
    position: absolute;
    top: 150px;
    left: -50px;
    opacity: 1;
    font-size: 50px !important;
    z-index: 1;
    transform: translateY(-50%);
}
</style>