<template>
 <div>
    <header class="header">
        <div class="con">
            <div class="wrap">
                <a  @click='$router.go(-1)'>
                    <img src="../assets/images/public/arrow.jpg" alt="">
                </a>
                <h2>{{title}}</h2>
                <div class="points">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
 </div>
</template>

<script>
export default {
 props:['title'],
 data() {
 return {
     
 };
 },
 methods:{

 }
};
</script>

<style lang="" scoped>
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  height: 0.88rem;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 1;
}
.header .con {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #f26b11;
}
.header .wrap {
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img {
  width: 0.17rem;
  height: 0.29rem;
}
.header h2 {
  font-size: 0.34rem;
  color: #fff;
}
.header .points span {
  float: left;
  margin-left: 0.1rem;
  width: 0.12rem;
  height: 0.12rem;
  background-color: #fff;
  border-radius: 50%;
}
</style>
