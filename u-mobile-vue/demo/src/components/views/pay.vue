<template>
    <div>
         <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 收货信息 -->
        <div class="receive">
            <div class="left">
                <p class="message">收货人：yousu<span>10000000000</span></p>
                <p class="address"><i>收货地址：</i><span>北京市海淀区银泉路清林苑6号楼中公优就业总部3层</span></p>
            </div>
            <a class="right" href=""><img src="../../assets/images/public/right.jpg" alt=""></a>
        </div>
        <!-- 商品信息 -->
        <div class="pro-message">
            <div class="pro-detail">
                <div class="pro-pic"><img src="../../assets/images/order/shop.jpg" alt=""></div>
                <p class="pro-name">雅诗兰黛护肤霜<span>规格：50g</span></p>
                <p class="pro-pri"><span>￥</span>123.00</p>
            </div>
            <div class="count">
                <p class="buy-count">购买数量:</p>
                <div class="button">
                    <input class="subtract" type="button" value="-">
                    <input class="text" type="text" value="1">
                    <input class="add" type="button" value="+">
                </div>
            </div>
            <p class="express">配送方式<span>XX快递</span></p>
        </div>
        <!-- 优惠方式 -->
        <div class="discounts ">
            <p class="coupon">优惠券<span>无可用</span></p>
            <p class="integration">使用积分
                
                <span><input class="input" type="text" placeholder="输入积分">
                    <input class="use" type="button" value="使用">
                    可用<em>50</em>积分</span>
            </p>
        </div>
        <!-- 价格明细 -->
        <div class="pri">
            <div class="pri-detail">
                <p>商品金额<span>￥120.00</span></p>
                <p>运费<span>+￥0.00</span></p>
                <p>优惠券<span>-￥0.00</span></p>
                <p>会员优惠<span>-￥0.00</span></p>
                <p>积分抵扣<span>-￥0.00</span></p>
            </div>
            <div class="total">
                <p>实付金额：<span>￥123.00</span></p>
                <!-- <input type="submit" value="提交订单"> -->
            </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
            <input type="submit" value="提交订单">
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"确认订单"
        }
    }
}
</script>
<style scoped>
@import '../../assets/css/order.css';
</style>