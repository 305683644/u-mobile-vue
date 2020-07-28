<template>
    <div>
        <router-view/>
        <footer>
         <div class="menu">
            <ul class="con">
                <router-link tag="li" activeClass='active1' :class="{'active1':$route.path=='/search','active1':$route.path=='/goodsList'}" to="/home"><a href="#"><i></i><p>首页</p></a></router-link>
                <router-link tag="li" activeClass='active2' :class="[$route.path=='/pay'?'active2':'']" to="/car"><a href="#" class="center"><i></i><p>购物车</p></a></router-link>
                <router-link tag="li" activeClass='active3' to="/mine"><a href="#" class="right"><i></i><p>我的</p></a></router-link>

            </ul>
        </div>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.2rem;
}
footer .menu {
  width: 7.5rem;
  margin: 0 auto;
  height: 1.2rem;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
}
footer .con {
  width: 6.3rem;
  height: 1.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}
footer .con li a {
  font-size: 0.2rem;
  color: #8a8a8a;
  text-align: center;
}
footer .con li a i {
  display: block;
  width: 0.58rem;
  height: 0.58rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
  text-align: center;
  margin: 0.18rem auto 0;
}
footer .con li a:first-child i {
  background-image: url("../../assets/images/public/icon_8.jpg");
}
footer .con li a.center i {
  background-image: url("../../assets/images/public/icon_7.jpg");
}
footer .con li a.right i {
  background-image: url("../../assets/images/public/icon_5.jpg");
}
footer .con li.active1 a {
  color: #f8701a;
}
footer .con li.active2 a {
  color: #f8701a;
}
footer .con li.active3 a {
  color: #f8701a;
}
footer .con li.active1 a:first-child i {
  background-image: url("../../assets/images/public/icon_6.jpg");
}
footer .con li.active2 a:first-child i {
  background-image: url("../../assets/images/public/icon_9.jpg");
}
footer .con li.active3 a:first-child i {
  background-image: url("../../assets/images/public/icon_10.jpg");
}
footer .con li p {
  line-height: 0.38rem;
}
</style>