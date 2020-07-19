<template>
    <div>
        <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 商品列表 -->
        <ul class="check-list">
            <li v-for='(item,idx) in goodsList' :key="item.goodsId">
                <label>
                    <input type="checkbox" hidden >
                    <i  @click='changeCheck(idx)' :class="{'checked':item.checked}" ></i>
                </label>
                <div class="pro-pic">
                    <img :src="item.img" alt="">
                </div>
                <div class="pro-detail">
                    <P class="pro-name">{{item.name}}</P>
                    <P class="pro-type">{{item.type}}</P>
                    <P class="pro-pri">￥{{item.price*item.count | toPrice}}</P>
                </div>
                <div class="button">
                    <input class="subtract" type="button" value="-" @click='sub(idx)'>
                    <input class="text" type="text" :value="item.count">
                    <input class="add" type="button" value="+" @click='add(idx)'>
                </div>
                <div class="del" @click='del(idx)'>
                    删除
                </div>
            </li>
        </ul>
        
    </div>
    <!-- 结算 -->
    <div class="Settlement">
        <p class="all">
            <label>
                   <input type="checkbox" hidden >
                   <i @click="allCheck" :class="{'checked':this.checkAll}"></i>
                </label>
            
            <span>全选</span>
        </p>
        <div class="total">
            总价：<span>￥{{allPrice | toPrice}}</span>
            <p class="state">不含运费，已优惠￥0.00</p>
        </div>
        <input type="submit" value="去结算(1件)" @click="goPay">
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"购物车",
            checkAll:false,
            
            goodsList:[
                {
                    goodsId:1001,
                    img:require("../../assets/images/shoping_car_images/shop.jpg"),
                    name:"欧莱雅面霜",
                    type:"规格：50g",
                    price:123,
                    count:1,
                    checked:false
                },
                {
                    goodsId:1002,
                    img:require("../../assets/images/shoping_car_images/shop.jpg"),
                    name:"欧莱雅面霜",
                    type:"规格：50g",
                    price:123,
                    count:1,
                    checked:false
                },
            ]
        }
    },
    computed: {
        allPrice() {
            let sum = 0
            //map 映射  forEach reduce...
            //数组.map
            this.goodsList.map((item, index, arr) => {
                //item代表数组的每一项
                //index代表索引
                // arr 代表原数组
                //你可以return 一个新数组
                if(item.checked){
                sum += item.price * item.count
                }
            })
            return sum
        }
    },
    watch:{
        goodsList:{
            deep:true,
            handler(){
                this.checkAll = this.goodsList.every(item=>item.checked)
            }
        }
    },
    methods:{

        goPay(){
            this.$router.push({
                path: "/pay",
                // query: {
                // id
                // } 
            })
        },
        changeCheck(i){
            this.goodsList[i].checked=!this.goodsList[i].checked
            console.log(this.goodsList[i].checked);
            
        },
        //数量相减事件
        sub(i) {
            //如果当前商品数量只剩一个的时候，不能自减
            if (this.goodsList[i].count == 1) {
                return
            }
            //我们要减的是数组中的 count 属性
            this.goodsList[i].count--
        },
        //数量相加事件
        add(i) {
            //一定要跟产品经理确定你的需求
            //要跟库存 或者 购买限制。比如当前是秒杀商品，只能买3个
            this.goodsList[i].count++
        },
        //删除事件
        del(i) {
            //本地模拟删除
            this.goodsList.splice(i, 1)
        },
        //封装一个全选事件
        allCheck() {
            this.checkAll=!this.checkAll
            console.log(this.checkAll);
            //利用map对商品列表进行遍历
            this.goodsList.map(item => {
                item.checked = this.checkAll
            })
        }

    }
}
</script>
<style scoped>
@import '../../assets/css/shopCar.css'
</style>