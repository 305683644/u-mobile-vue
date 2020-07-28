<template>
    <div>
        <div class="container"  @click='origin'>
        <!-- 顶部 -->
        <top :title='title'></top>

        
        <!-- 商品列表 -->
        <ul class="check-list">
            <template>
                <v-touch @swipeleft='left(idx)' @swiperight='right(idx)' v-for='(item,idx) in carList' :key="item.id">
                   <li  :style="idx==num ? 'left: -0.98rem' : ''">
                <label>
                    <input type="checkbox" hidden >
                    <i  @click='changeCheck(idx)' :class="{'checked':item.checked}" ></i>
                </label>
                <div class="pro-pic">
                    <img :src="$imgUrl+item.img" alt="">
                </div>
                <div class="pro-detail" :goodsId="item.goodsId">
                    <P class="pro-name">{{item.goodsname}}</P>
                    <P class="pro-type">{{item.goodsname}}</P>
                    <P class="pro-pri">￥{{item.price*item.num | toPrice}}</P>
                </div>
                <div class="button">
                    <input class="subtract" type="button" value="-" @click='sub(idx)'>
                    <input class="text" type="text" :value="item.num">
                    <input class="add" type="button" value="+" @click='add(idx)'>
                </div>
                <div class="del" @click='del(idx)'>
                    删除
                </div>
            </li>   
                </v-touch>
              
            </template>
            
        </ul>
        <van-empty v-if="carList==null" description="购物车空空如也，快去买买买" />
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
        <div class="all2" @click="goPay">去结算({{allCount}}件)</div>
    </div>
    </div>
</template>
<script>
import { Toast } from 'vant'
import { cartlist,cartdelete } from '../../util/axios'
export default {
    data(){
        return{
            title:"购物车",
            checkAll:false,
            num:-1,
            carList: [],
            // goodsList:[
            //     {
            //         goodsId:1001,
            //         img:require("../../assets/images/shoping_car_images/shop.jpg"),
            //         name:"欧莱雅面霜",
            //         type:"规格：50g",
            //         price:123,
            //         count:1,
            //         checked:false
            //     },
            //     {
            //         goodsId:1002,
            //         img:require("../../assets/images/shoping_car_images/shop.jpg"),
            //         name:"欧莱雅面霜",
            //         type:"规格：50g",
            //         price:123,
            //         count:1,
            //         checked:false
            //     },
            // ]
        }
    },
    mounted(){
        this.getCarList()
    },
    computed: {
        allPrice() {
            let sum = 0
            this.carList.map((item, index, arr) => {
                
                if(item.checked){
                sum += item.price * item.num
                }
            })
            return sum
        },
        allCount() {
            let count = 0
            this.carList.map((item, index, arr) => {
                
                if(item.checked){
                count +=  item.num
                }
            })
            return count
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
        getCarList() {
            cartlist({
                uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
            }).then((res) => {
                if (res.code == 200) {
                    this.carList = res.list
                    this.carList.map(item=>{
                        item.status = item.status==1 ? true :false
                    })
                } else {
                    Toast(res.msg)
                }
            })
        },
        origin(){
            this.num=-1
        },
        left(i){
            this.num=i
                },
        right(i){
            this.num!=i
        },
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
            this.num=-1
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

    },
    beforeRouteEnter(to, from, next) {
        if (sessionStorage.getItem('userInfo')) {
            next()
        } else {
            Toast('请先登录,才能查看购物车')
            //直接给用户跳转到购物车
            next('/login')
        }
    },
}
</script>
<style scoped>
@import '../../assets/css/shopCar.css'
</style>