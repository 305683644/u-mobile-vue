<template>
    <div>
        <div class="container"  @click='origin'>
        <!-- 顶部 -->
        <top :title='title'></top>

        
        <!-- 商品列表 -->
        <ul class="check-list">
            <template>
                <v-touch @swipeleft='left(idx)' @swiperight='right(idx)' v-for='(item,idx) in carList' :key="item.id">
                   <li  :style="idx==num2 ? 'left: -0.98rem' : ''" >
                <label  >
                    <input type="checkbox" hidden >
                    <i @click.stop='changeCheck(item.id,idx)' :class="{'checked':item.status}" ></i>
                </label>
                <div class="pro-pic">
                    <img :src="$imgUrl+item.img" alt="" @click='goDetail(item.goodsid)'>
                </div>
                <div class="pro-detail" :goodsId="item.goodsid" @click='goDetail(item.goodsid)'>
                    <P class="pro-name">{{item.goodsname}}</P>
                    <!-- <P class="pro-type">{{item.goodsname}}</P> -->
                    <P class="pro-pri">￥{{item.price*item.num | toPrice}}</P>
                </div>
                <div class="button">
                    <input class="subtract" type="button" value="-" @click.stop='sub(item.id,idx)'>
                    <input class="text" type="text" v-model="item.num" disabled  @change='change(item.goodsId,idx)' >
                    <input class="add" type="button" value="+" @click.stop='add(item.id,idx)'>
                </div>
                <div class="del" @click.stop='del(item.id,idx)'>
                    删除
                </div>
            </li>   
                </v-touch>
              
            </template>
            
        </ul>
        <van-empty v-if="carList.length==0" description="购物车空空如也，快去买买买" />
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
        <div class="all2" @click="goPay()">去结算({{allCount}}件)</div>
    </div>
    </div>
</template>
<script>
import { Toast } from 'vant'
import { cartlist,cartdelete,cartadd,cartedit  } from '../../util/axios'
import {mapGetters,mapActions } from 'vuex'
export default {
    data(){
        return{
            title:"购物车",
            checkAll:false,
            num2:-1,
            num3:1,
            carList: [],
            editorId:0,
        }
    },
    mounted(){
        this.getCarList()
    },
    computed: {
        allPrice() {
            let sum = 0
            this.carList.map((item, index, arr) => {
                
                if(item.status){
                sum += item.price * item.num
                }
            })
            return sum
        },
        allCount() {
            let count = 0
            this.carList.map((item, index, arr) => {
                
                if(item.status){
                count +=  item.num
                }
            })
            return count
        }
    },
    watch:{
        carList:{
            deep:true,
            handler(){
                this.checkAll = this.carList.every(item=>item.status)
            }
        }
    },
    
    methods:{
        getCarList() {
            cartlist({
                uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
            }).then((res) => {
                console.log(res)
                if (res.code == 200) {
                    this.carList = res.list?res.list:[]
                    this.carList.map(item=>{
                        item.status = item.status==1 ? true :false
                        item.status=0
                        this.num2=-1
                    })

                } else {
                    Toast(res.msg)
                }
            })
        },
        origin(){
            this.num2=-1
        },
        left(i){
            
            this.num2=i
                },
        right(i){
            this.num2!=i
        },
        goPay(){
            let checkGoods=this.carList.filter((item,i)=>{
                if(item.status==1){
                    return item
                }
            })
            if(this.allCount!=0){
               sessionStorage.setItem('checkGoods',JSON.stringify(checkGoods))
                this.$router.push("/pay") 
            }else{
                Toast("您还没有选择商品")
            }
            
        },
        goDetail(id){
            this.$router.push({
                path:'/goodsDetail',
                query:{
                    id
                }
            })
        },
        changeCheck(id,i){
            this.editorId=id
            this.carList[i].status=!this.carList[i].status
            
        },
        //数量相减事件
        sub(id,i) {
             this.editorId=id
             
            if (this.carList[i].num == 1) {
                return
            }
            this.carList[i].num--
            //  cartedit({
            //         id:this.editorId,
            //         type:1//数量 
            //     }).then(res=>{
            //          if(res.code==200){
            //              this.carList=res.list
            //              this.getCarList()
                         
            //          }
            //     })
        },
        change(id,i) {
             this.editorId=id
            //  cartadd({
            //         uid:JSON.parse(sessionStorage.getItem('userInfo')).uid,
            //         goodsid:this.editorId,
            //         num:this.num3
            //     }).then(res=>{
            //          if(res.code==200){
            //              this.carList=res.list
            //              this.getCarList()
            //          }
            //     })
        },
        //数量相加事件
        add(id,i) {
            this.editorId=id
            this.carList[i].num++
            // cartedit({
            //         id:this.editorId,
            //         type:2//数量 
            //     }).then(res=>{
            //          if(res.code==200){
            //              this.carList=res.list
            //              this.getCarList()
            //          }
            //     })
        },
        //删除事件
        del(id,i) {
            this.editorId=id
            cartdelete({id:this.editorId}).then(res=>{
                if (res.code == 200) {
                    this.carList = res.list
                    this.getCarList()
                } else {
                    Toast(res.msg)
                }
            })
            //本地模拟删除
            this.carList.splice(i, 1)
            this.num=-1
        },
        //封装一个全选事件
        allCheck() {
            this.checkAll=!this.checkAll
            //利用map对商品列表进行遍历
            this.carList.map(item => {
                item.status = this.checkAll
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