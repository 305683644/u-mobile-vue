<template>
    <div>
         <div class="container">
        <div class="top-nav">
            <!-- 顶部 -->
            <header class="header">
                <div class="wrap">
                    <h1><a >
                            <img src="../../assets/images/index_images/logo.jpg" alt="">
                        </a>
                    </h1>
                    <input type="text" placeholder="寻找商品" @keyup.enter="goSearch">
                    <div class="points">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <!-- 导航 -->
            <nav class="nav">
                <div class="wrap">
                    <ul>
                        <li @click='changeColor2(idx)'  :class="[idx==num2?'first':'']"  v-for='(item1,idx) in navList'  :key='item1.idx'>
                            <a  >{{item1.name}}</a>
                        </li>
                        
                    </ul>
                    <div class="arrow">
                        <img src="../../assets/images/index_images/arrow.jpg">
                    </div>
                </div>
            </nav>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="banner" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="$imgUrl+image.img" />
            </van-swipe-item>
        </van-swipe>
        <!-- <div class="banner">
            <a >
                <img src="../../assets/images/index_images/banner.jpg" alt="">
            </a>
            <a >
                <img src="../../assets/images/index_images/banner.jpg" alt="">
            </a>
        </div> -->
        <!-- icon导航 -->
        <div class="icon-nav">
            <div class="item">
                <a >
                    <img src="../../assets/images/index_images/icon_1.jpg" alt="">
                    <p>限时抢购</p>
                </a>
            </div>
            <div class="item">
                <a >
                    <img src="../../assets/images/index_images/icon_2.jpg" alt="">
                    <p>积分商城</p>
                </a>
            </div>
            <div class="item">
                <a >
                    <img src="../../assets/images/index_images/icon_3.jpg" alt="">
                    <p>联系我们</p>
                </a>
            </div>
            <div class="item" @click="goClassify">
                <a >
                    <img src="../../assets/images/index_images/icon_4.jpg" alt="">
                    <p>商品分类</p>
                </a>
            </div>
        </div>
        <!-- 特卖 -->
        <div class="sale">
            <div class="left">
                <a >
                    <h3><img src="../../assets/images/index_images/timer.jpg">限时秒杀</h3>
                    <p class="des">每天零点场 好货秒不停</p>
                    <p class="time">
                        <van-count-down :time='time'>
                            <template v-slot="timeData">
                                <span class="block">{{ timeData.hours<10?'0'+timeData.hours:timeData.hours }}</span>:
                                <!-- <span class="colon"></span> -->
                                <span class="block">{{ timeData.minutes<10?'0'+timeData.minutes:timeData.minutes }}</span>:
                                <!-- <span class="colon"></span> -->
                                <span class="block">{{ timeData.seconds<10?'0'+timeData.seconds:timeData.seconds }}</span>
                            </template>
                            </van-count-down>
                        <!-- <span>19</span>:<span>30</span>:<span>29</span>  -->
                        <i>秒杀</i>
                        </p>
                    <img class="pic" src="../../assets/images/index_images/shop_5.jpg" alt="">
                    <div class="price">￥ <span>14.8</span></div>
                </a>
            </div>
            <div class="right">
                <div class="top">
                    <a >
                        <h3>品牌上新</h3>
                        <p class="des">每天9点 抢大牌</p>
                        <img class="brand" src="../../assets/images/index_images/brand.jpg" alt="">
                    </a>
                    <img class="right-pic" src="../../assets/images/index_images/shop_1.jpg" alt="">
                </div>
                <div class="bottom clearfix">
                    <div class="bottom-left">
                        <a >
                            <h3>每日十件</h3>
                            <p class="des">只为你选好货</p>
                            <img src="../../assets/images/index_images/shop_2.jpg" alt="">
                        </a>
                    </div>
                    <div class="bottom-right">
                        <a >
                            <h3>拼啊</h3>
                            <p class="des">超级好货拼团</p>
                            <img src="../../assets/images/index_images/shop_3.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 广告图 -->
        <div class="poster">
            <a ><img src="../../assets/images/index_images/bar.jpg" alt=""></a>
        </div>
        <!-- 产品列表 -->
        <div class="pro">
            <div class="wrap">
                <ul class="pro-nav">
                    <li @click='changeColor(idx)'  :class="[idx==num?'active':'']"  v-for='(item,idx) in goodsList'  :key='idx'><a >{{item.title}}</a>
                        <ul  :class="[idx==num?'block pro-list':'pro-list none']" >
                        <li v-for='list in item.content' :key='list.id' @click="goGoodsDetail(list.id)">
                            <a>
                                <div class="pro-pic"><img :src='$imgUrl+list.img' alt=""></div>
                                <div class="pro-des">
                                    <p class="pro-name">{{list.goodsname}}</p>
                                    <p class="pro-pri"><span>￥</span>{{list.price | toPrice}}</p>
                                    <p class="count">市场价 ￥{{list.market_price | toPrice}}</p>
                                    <input type="button"  value="立即抢购">
                                </div>
                            </a>
                        </li>
                        </ul>    
                </li>
               </ul>
            </div>
        </div>  
             
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import { getbanner, getseckill, getindexgoods } from '../../util/axios'
export default {
    
    data(){
        return{
            num:0,
            num2:0,
            navList:[
            {
                id:100,
                name:"推荐"
            },
            {
                id:101,
                name:"女装"
            },
            {
                id:102,
                name:"鞋包"
            },
            {
                id:103,
                name:"居家"
            },
            {
                id:104,
                name:"母婴童装"
            },
            {
                id:105,
                name:"美食"
            },
            {
                id:106,
                name:"男装"
            },
            {
                id:107,
                name:"鞋包"
            },
            {
                id:108,
                name:"居家"
            },
            ],
            images: [],
            hotsList: [],
            newsList: [],
            goodsList:[
             
            ],
            time:30 * 60 * 60 * 1000,   
            timeData:{
                hours:0,
                minutes:0,
                seconds:0
            },
            start:0,
            end:0
            
        }
    },
    mounted() {
        //组件一加载 就调取并发处理
        axios.all([getbanner(), getindexgoods(),getseckill()]).then(
            axios.spread((banners, goods,seckList) => {
                this.images = banners.list
                this.goodsList = goods.list
               this.goodsList[0].title="热门推荐"
               this.goodsList[1].title="发现新品"
               this.goodsList[2].title="全部商品"
                this.start = seckList.begintime
                 this.end = seckList.endtime
                //  let timer = this.end - new Date().getTime()
                 this.timeData.hours=parseInt((this.end - new Date().getTime())/1000  / 60 / 60 % 24)

                this.timeData.minutes=parseInt((this.end - new Date().getTime())/1000  / 60 % 60)

                this.timeData.seconds=parseInt((this.end - new Date().getTime())/1000  % 60)
                // 个位数前补零
                // if (this.timeData.hours < 10) {
                //     this.timeData.hours = '0' + this.timeData.hours
                // }
                // if (this.timeData.minutes < 10) {
                //     this.timeData.minutes = '0' + this.timeData.minutes
                // }
                // if (this.timeData.seconds < 10) {
                //     this.timeData.seconds = '0' + this.timeData.seconds
                // }
                
            })
        )
    },    
    methods:{
        changeColor(idx){
        this.num=idx;
        },
        changeColor2(idx){
        this.num2=idx;
        },
        goSearch(id){
            this.$router.push({
                path: "/search",
                query: {
                id
                }

        })
        },
        goGoodsDetail(id){
             this.$router.push({
                path: "/goodsDetail",
                query: {
                id
                } 
        })
        },
        goClassify(){
             this.$router.push({
                path: "/classify",
                // query: {
                // id
                // } 
        })
        }
        
    }
   
}
</script>
<style scoped>
@import '../../assets/css/index.css';
.van-count-down{
    width: 2.2rem;
    box-sizing: border-box;
    margin-top: 0.05rem; 
    display: inline-block;
    vertical-align: -0.05rem;
}
</style>