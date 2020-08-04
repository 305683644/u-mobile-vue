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
        <div class="pro-message" >
            <div v-for='(item,idx) in payList' :key="item.goodsid">
                <div class="pro-detail">
                    <div class="pro-pic"><img :src="$imgUrl+item.img" alt=""></div>
                    <p class="pro-name">{{item.goodsname}}
                        <!-- <span>规格：50g</span> -->
                        </p>
                    <p class="pro-pri"><span>￥</span>{{item.price*item.num | toPrice}}</p>
                </div>
                <div class="count">
                    <p class="buy-count">购买数量:</p>
                    <div class="button">
                        <input class="subtract" type="button" value="-" @click.stop='sub(item.id,idx)'>
                        <input class="text" type="text" v-model="item.num" disabled >
                        <input class="add" type="button" value="+" @click.stop='add(item.id,idx)'>
                    </div>
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
                <p>商品金额<span>￥{{allPrice | toPrice}}</span></p>
                <p>运费<span>+￥0.00</span></p>
                <p>优惠券<span>-￥0.00</span></p>
                <p>会员优惠<span>-￥0.00</span></p>
                <p>积分抵扣<span>-￥0.00</span></p>
            </div>
            <div class="total">
                <p>实付金额：<span>￥{{allPrice | toPrice}}</span></p>
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
            title:"确认订单",
            payList:[]
        }
    },
    mounted() {
        this.getPayList()
    },
    computed: {
        allPrice() {
            let sum = 0
            this.payList.map((item, index, arr) => {
               
                sum += item.price * item.num
                
            })
            return sum
        },
    },
    methods:{
        getPayList(){
            this.payList=JSON.parse(sessionStorage.getItem('checkGoods'))
            console.log(this.payList)
        },
        sub(id,i) {
            if (this.payList[i].num == 1) {
                return
            }
            this.payList[i].num--
            let checkGoods=this.payList.map((item,i)=>{
               
                return item
                
            })
             sessionStorage.setItem('checkGoods',JSON.stringify(checkGoods))
        },
        //数量相加事件
        add(id,i) {
            this.payList[i].num++
            let checkGoods=this.payList.map((item,i)=>{
               
                return item
                
            })
             sessionStorage.setItem('checkGoods',JSON.stringify(checkGoods))
        },
    }
}
</script>
<style scoped>
@import '../../assets/css/order.css';
</style>