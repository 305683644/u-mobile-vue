<template>
    <div>
        <div class="container">
        <!-- 顶部 -->
        <top :title='title'></top>
        <!-- 搜索 -->
        <!-- <div class="search"><i></i><input type="text" placeholder="搜索商品"></div> -->
                <!-- 商品列表 -->
                <ul class="pro-list ">
                    <li>
                        <a href="#">
                            <div class="pro-pic"><img src="../../assets/images/list_images/shop_2.jpg" alt=""></div>
                            <div class="pro-des">
                                <p class="pro-name">阿道夫修护滋养洗发香乳 洗发水 持久留香520ml*2瓶 旗舰店正品换新升级</p>
                                <p class="pro-pri"><span>￥</span>123.00</p>
                                <p class="count">3625条评论</p>
                            </div>
                        </a>
                    </li>
                    <li>
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
                    </li>
                </ul>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            title:"商品列表",
        }
    }
    
}
</script>
<style scoped>

@import '../../assets/css/productList.css'
/* .container{
    padding-top:1.5rem ;
} */
</style>