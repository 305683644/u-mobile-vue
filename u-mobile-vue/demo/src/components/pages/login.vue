<template>
  <div>
    <div class="container">
      <!-- 顶部 -->
      <!-- <top :title='title'></top> -->

      <div class="wrap">
        <p>欢迎登录</p>
        <div class="img">
          <img src="../../assets/images/list_images/logo.png" alt />
        </div>
        <div>
          <span class="span1 iconfont">&#xe612;</span>
          <!-- 用户名： -->
          <input type="text" v-model="userInfo.name" placeholder="请输入用户名" />
        </div>
        <div>
          <span class="span2 iconfont">&#xe668;</span>
          <!-- 密码： -->
          <input type="text" v-model="userInfo.pass" placeholder="请输入密码" />
        </div>
        <button @click="login">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "登录",
      userInfo: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    //封装一个登录事件
    login() {
      //前端做空判断
      if (this.userInfo.name == "" || this.userInfo.pass == "") {
        alert("请输入用户名或者密码");
      } else {
        //调取接口
        //模拟登录成功
        if (this.userInfo.name == "admin" && this.userInfo.pass == "123") {
          //把登录状态存储到本地存储中
          sessionStorage.setItem("isLogin", "登录");
          //跳转到首页
          this.$router.push("/home");
        } else {
          alert("用户名或者密码错误");
        }
      }
    }
  }
};
</script>

<style lang="" scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 0.88rem;
  /* padding-bottom: 2.37rem; */
  padding-bottom: 4.34rem;
  background: orangered;
  text-align: center;
}
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
input {
  width: 6rem;
  height: 1rem;
  /* border: 1px solid orangered; */
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  padding: 0 0.9rem;
  box-sizing: border-box;
  font-size: 0.35rem;
  color: #666;
  /* background: rgba(0, 0, 0, 0); */
}
button {
  width: 6rem;
  height: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  margin-bottom: 0.4rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  background: #409eff;
  color: #fff;
  font-size: 0.4rem;
}
p {
  color: #fff;
  margin-top: 1.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.7rem;
}
.img {
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;
}
span {
  position: absolute;
  left: 1rem;
  font-size: 0.45rem;
  color: #666;
}
.span1 {
  top: 5.1rem;
}
.span2 {
  top: 6.48rem;
}
</style>
