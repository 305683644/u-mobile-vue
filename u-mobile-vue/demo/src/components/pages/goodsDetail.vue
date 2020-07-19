<template>
    <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 主图及介绍 -->
        <div class="main">
            <a class="main-pic" href="#"><img src="../../assets/images/detail_images/pic_1.jpg" alt=""><img src="../../assets/images/detail_images/pic_2.jpg" alt=""></a>
            <div class="pro-des">
                <p class="pro-name">娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</p>
                <p class="pro-pri">￥123.00<span>（此价格不与套装优惠同时享受）</span></p>
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
                        <input class="subtract" type="button" value="-">
                        <input class="text" type="text" value="1">
                        <input class="add" type="button" value="+">
                    </div>
            </div>
            <div class="type">
                    <p class="top">商品属性
                        <a href="#"><img src="../../assets/images/detail_images/arrow.jpg" alt=""></a>
                    </p>
                    <div class="bottom">
                        <p>规格</p><span class="checked">30g</span><span>5g</span>
                    </div>
            </div>
            
        </div>
        <!-- 商品详情 -->
        <div class="pro-detail">
            <h3>商品详情</h3>
            <img src="../../assets/images/detail_images/pic_3.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_4.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_5.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_6.jpg" alt="">
            <img src="../../assets/images/detail_images/pic_7.jpg" alt="">
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
            <div class="count" @click="goCar">
                <b></b>
                <i>2</i>
            </div>
            <div class="join"><input type="button" value="加入购物车"></div>
            <div class="buy"><input type="submit" value="立即购买"></div>
        </div>
    </footer> 

    </div>   
    
</template>
<script>
export default {
    data(){
        return{
            title:"商品详情",
        }
    },
    methods:{
        goCar(){
            this.$router.push({
                path:"/car"
            })
        }
    }
}
</script>
<style scoped>
@import '../../assets/css/productDetail.css'
</style>