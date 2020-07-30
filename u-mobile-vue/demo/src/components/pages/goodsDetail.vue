<template>
    <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 主图及介绍 -->
        <div class="main">
            <a class="main-pic" href="#"><img :src="$imgUrl+detailInfo.img" alt="">
            <!-- <img src="../../assets/images/detail_images/pic_2.jpg" alt=""> -->
            </a>
            <div class="pro-des">
                <p class="pro-name">{{detailInfo.goodsname}}</p>
                <p class="pro-pri">￥{{detailInfo.price | toPrice}}<span>（此价格不与套装优惠同时享受）</span></p>
                <p>市场价￥<del>{{detailInfo.market_price | toPrice}}</del></p>
            </div>
        </div>
        <!-- 选项 -->
        <div class="choose">
            <div class="sale">
                <p>促销：<em>满 减</em><span>满2件9折；3件8折</span>
                    <a class="right" href="#"><img src="../../assets/images/detail_images/arrow.jpg" alt=""></a>
                </p>
            </div>
            <div class="count">
                <p>购买数量</p>
                    <div class="button">
                        <input class="subtract" type="button" value="-" @click='sub()'>
                        <input class="text" type="text" v-model="num2" >
                        <input class="add" type="button" value="+" @click='add()'>
                    </div>
            </div>
            <div class="type">
                    <p class="top">商品属性
                        <a href="#"><img src="../../assets/images/detail_images/arrow.jpg" alt=""></a>
                    </p>
                    <div class="bottom">
                        <p>{{detailInfo.specsname}}</p><span @click='changeColor(i)' :class="[i==num?'checked':''] " v-for="(item,i) in detailInfo.specsattr" :key="i">{{item}}</span>
                    </div>
            </div>
            
        </div>
        <!-- 商品详情 -->
        <div class="pro-detail">
            <h3>商品详情</h3>
            <div v-html="detailInfo.description"></div>
            <!-- <img src="../../assets/images/detail_images/pic_3.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_4.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_5.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_6.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_7.jpg" alt=""> -->
        </div>
        <!-- 商品评价 -->
        <div class="pro-evaluate">
            <h3>商品评价</h3>
            <div class="evaluate">
                <p class="user-name">1235668fg</p> 
                <p class="comment">效果很好，物流到位，下次还接着来！</p>
                <div class="pic-list">
                    <img src="../../assets/images/detail_images/pic_8.jpg" alt="">
                    <img src="../../assets/images/detail_images/pic_9.jpg" alt="">
                    <img src="../../assets/images/detail_images/pic_10.jpg" alt="">
                </div>
                <time class="time">2020-01-13</time>
            </div>
            <p class="count">
                共1000+条评论<a href="#">查看更多></a>
            </p>
        </div>

<footer class="footer">
        <div class="con">
            <div class="count" @click="goCar2" >
                <b></b>
                <i>{{num3}}</i>
            </div>
            <div class="join"><input type="button" value="加入购物车" @click="goCar"></div>
            <div class="buy"><input type="submit" value="立即购买" @click="goPay"></div>
        </div>
    </footer> 

    </div>   
    
</template>
<script>
import { Toast } from 'vant'
import { getgoodsinfo,cartadd,cartlist } from '../../util/axios'
export default {
    data(){
        return{
            title:"商品详情",
            num:0,
            num2:1,
            num3:0,
            carList: [],
            detailInfo: {
            },
        }
    },
    mounted() {
        this.getGoodsDetail()
        this.getCarList()
    },
    methods: {
        //封装获取商品详情的方法
        getGoodsDetail() {
            getgoodsinfo({
                id: this.$route.query.id,
            }).then((res) => {
                console.log(res, '详情')
                if (res.code == 200) {
                    this.detailInfo = res.list[0]
                    this.detailInfo.specsattr=this.detailInfo.specsattr.split(',')
                }
            })
        },
        getCarList() {
            cartlist({
                uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
            }).then((res) => {
                if (res.code == 200) {
                    this.carList = res.list
                     this.carList.map((item,idex)=>{
                        this.num3+=item.num
                    })
                    
                } 
            })
        },
        changeColor(idx){
            this.num=idx;
        },
        sub() {
            //如果当前商品数量只剩一个的时候，不能自减
            if (this.num2 == 1) {
                return
            }
            //我们要减的是数组中的 num 属性
            this.num2 --
        },
        //数量相加事件
        add() {
            //一定要跟产品经理确定你的需求
            //要跟库存 或者 购买限制。比如当前是秒杀商品，只能买3个
            this.num2++
        },
        goCar() {
            //调取加入购物车的方法
            let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
            if(isLogin){
                //调取加入购物车方法
                cartadd({
                    uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
                    goodsid:this.$route.query.id,
                    num:this.num2//数量 
                })
                .then(res=>{
                    if(res.code==200){
                         Toast(res.msg)
                         //跳转到购物车页面
                         this.$router.push('/car')
                    }else if(res.code==403){
                         Toast(res.msg)
                         //跳转到购物车页面
                         this.$router.push('/login')
                    }else{
                        Toast(res.msg)
                    }
                })
            }else{
                Toast('请先登录')
                //跳转到登录页面
                this.$router.push('/login')
            }
        },
        goCar2() {
            //调取加入购物车的方法
            let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
            if(isLogin){
                //跳转到购物车页面
                this.$router.push('/car')
                
            }else{
                Toast('请先登录')
                //跳转到登录页面
                this.$router.push('/login')
            }
        },
        goPay() {
            //调取加入购物车的方法
            let isLogin =JSON.parse(sessionStorage.getItem('userInfo')) ? true: false
            if(isLogin){
                //调取加入购物车方法
                cartadd({
                    uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
                    goodsid:this.$route.query.id,
                    num:this.num2//数量 
                })
                .then(res=>{
                    if(res.code==200){
                         Toast(res.msg)
                         //跳转到购物车页面
                         this.$router.push('/pay')
                    }else{
                        Toast(res.msg)
                    }
                })
            }else{
                Toast('请先登录')
                //跳转到登录页面
                this.$router.push('/login')
            }
        },
    },
    
}
</script>
<style scoped>
@import '../../assets/css/productDetail.css'
</style>