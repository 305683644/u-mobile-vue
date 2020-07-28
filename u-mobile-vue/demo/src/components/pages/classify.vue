<template>
    <div>
       <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 分类 -->
        <div class="content clearfix">
            <ul class="nav-left">
                <li @click='changeColor(idx)'  v-for='(item1,idx) in navList'  :key='item1.id'><a :class="[idx==num?'active':'']"  >{{item1.name}}</a>
                <div :class="[idx==num?'block right':'right none']">
                <div class="right-top" >
                    <h3 class="head"><a >
                        洗发类<span>更多></span></a>
                    </h3>
                    <ul class="clearfix">
                        <li><a >
                            <img src="../../assets/images/classify/shop_1.jpg" alt="">护亮泽洗发露
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_2.jpg" alt="">滋养洗发水
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_3.jpg" alt="">柔顺洗发露
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_4.jpg" alt="">去屑洗发露
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_5.jpg" alt="">柔顺洗发露
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_6.jpg" alt="">焕彩洗发水
                        </a></li>
                    </ul>

                </div>
                <div class="right-bottom">
                    <h3 class="head"><a >
                        染发类<span>更多></span></a>
                    </h3>
                    <ul class="clearfix">
                        <li><a >
                            <img src="../../assets/images/classify/shop_7.jpg" alt="">施华蔻染色
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_8.jpg" alt="">施华蔻双氧乳
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_9.jpg" alt="">施华蔻染发膏
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_7.jpg" alt="">施华蔻染色
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_8.jpg" alt="">施华蔻双氧乳
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_9.jpg" alt="">施华蔻染发膏
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_7.jpg" alt="">施华蔻染色
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_8.jpg" alt="">施华蔻双氧乳
                        </a></li>
                        <li><a >
                            <img src="../../assets/images/classify/shop_9.jpg" alt="">施华蔻染发膏
                        </a></li>
                    </ul>
                </div>
            </div>
            </li>
                

            </ul>
            

        </div>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"商品分类",
            num:0,
            navList:[
            {
                id:200,
                name:"施华蔻"
            },
            {
                id:201,
                name:"沙宣"
            },
            {
                id:202,
                name:"欧莱雅"
            },
            {
                id:203,
                name:"潘婷"
            },
            {
                id:204,
                name:"资生堂"
            },
            {
                id:205,
                name:"阿道夫"
            },
            {
                id:206,
                name:"卡诗"
            },
            {
                id:207,
                name:"海飞丝"
            },
            {
                id:208,
                name:"资生堂"
            },
            ]
        }
        },
        methods:{
            changeColor(idx){
                this.num=idx;
            },
        }
}
</script>
<style scoped>
@import '../../assets/css/productClassify.css';
</style>