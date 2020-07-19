<template>
    <div>
        <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 我的信息 -->
        <div class="mine clearfix">
            <div class="user">
                <i>
                    <img src="../../assets/images/mine_images/head.jpg" alt="">
                </i>
                <div class="user-message">
                    <p class="user-name">悠溯</p>
                    <p class="level">V1</p>
                </div>
            </div>
            <P class="sign-in">
                每日签到
            </P>
        </div>
        <!-- 订单导航 -->
        <div class="icon-nav">
            <ul class="content">
                <li><a href="#"><img src="../../assets/images//mine_images/icon_1.jpg" alt=""><p>全部订单</p></a></li>
                <li><a href="#"><img src="../../assets/images//mine_images/icon_2.jpg" alt=""><p>代付款</p></a></li>
                <li><a href="#"><img src="../../assets/images//mine_images/icon_3.jpg" alt=""><p>待收货</p></a></li>
            </ul>
        </div>
        <!-- 信息列表 -->
        <ul class="message-list">
            <li>
                <p><img class="icon" src="../../assets/images//mine_images/icon_4.jpg" alt="">地址管理</p>
                <a href="#"><img src="../../assets/images/public/right.jpg" alt=""></a>
            </li>
            <li class="wallet">
                <p><img class="icon" src="../../assets/images//mine_images/icon_5.jpg" alt="">我的钱包</p>
                <span>200余额</span>
                <a href="#"><img src="../../assets/images/public/right.jpg" alt=""></a>
            </li>
            <li>
                <p><img class="icon" src="../../assets/images//mine_images/icon_6.jpg" alt="">我的优惠券</p>
                <a href="#"><img src="../../assets/images/public/right.jpg" alt=""></a>
            </li>
            <li>
                <p><img class="icon" src="../../assets/images//mine_images/icon_7.jpg" alt="">我的二维码</p>
                <a href="#"><img src="../../assets/images/public/right.jpg" alt=""></a>
            </li>
            <li>
                <p><img class="icon" src="../../assets/images//mine_images/icon_8.jpg" alt="">我的小伙伴</p>
                <a href="#"><img src="../../assets/images/public/right.jpg" alt=""></a>
            </li>
        </ul>

    </div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"我的订单"
        }
    }
}
</script>
<style scoped>
@import '../../assets/css/mine.css';
</style>