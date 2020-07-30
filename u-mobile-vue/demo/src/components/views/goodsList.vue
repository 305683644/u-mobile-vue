<template>
    <div>
        <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 搜索 -->
        <!-- <div class="search"><i></i><input type="text" placeholder="搜索商品"></div> -->
                <!-- 商品列表 -->
                <ul class="pro-list ">
                    <li  v-for="item in goodsList" :key='item.id'  @click='goDetail(item.id)'>
                        <a href="#">
                            <div class="pro-pic"><img :src="$imgUrl+item.img" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">{{item.goodsname}}</p>
                                <p class="pro-pri"><span>￥</span>{{item.price | toPrice}}</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <!-- <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_3.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">滋源修护滋养洗发香乳 520ml*2瓶</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_4.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">施华蔻修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_5.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">资生堂洗发香乳</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_5.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">雅诗兰黛染发膏60ml</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_5.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">雅诗兰黛染发膏60ml</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li> -->
                </ul>
                <van-empty v-if="goodsList==null" description="当前没有商品数据" />
        </div>

    </div>
</template>
<script>
import {getgoods} from '../../util/axios'
export default {
    data(){
        return {
            title:"商品列表",
            goodsList:[]
        }
    },
    mounted() {
        this.getGoods()
    },
    methods:{
        //封装获取商品列表的方法
        getGoods(){
            getgoods({
                fid:this.$route.query.id
            })
            .then(res=>{
                console.log(res)
                if(res.code==200){
                    this.goodsList = res.list
                }
            })
        },
        //封装一个跳转商品详情
        goDetail(id){
            this.$router.push({
                path:'/goodsDetail',
                query:{
                    id
                }
            })
        }
    }

    
}
</script>
<style scoped>

@import '../../assets/css/productList.css';
/* .container{
    padding-top:1.5rem ;
} */
</style>