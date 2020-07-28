<template>
  <div>
    <div class="container">
      <div class="arrow">
        <a  @click='$router.go(-1)'>
                    <img src="../../assets/images/public/arrow.jpg" alt="">
                </a>
      </div>
      
      <!-- 顶部 -->
      <!-- <top :title='title'></top> -->

      <div class="wrap">
        <p>欢迎登录</p>
        <div class="img">
          <img src="../../assets/images/list_images/logo.png" alt />
        </div>
        <div>
          <span class="span1 iconfont">&#xe660;</span>
          <!-- 用户名： -->
          <input type="text" v-model="userInfo.phone" placeholder="请输入手机号" />
        </div>
        <div>
          <span class="span2 iconfont">&#xe668;</span>
          <!-- 密码： -->
          <input type="text" v-model="userInfo.password" placeholder="请输入密码" />
          <div class="forget" >忘记密码</div>
        </div>
        <button @click="login">登录</button>
        <div class="register"  >没有账号？<a @click="register" >去注册</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import {login} from '../../util/axios'

export default {
  data() {
    return {
      title: "登录",
      userInfo: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    register(){
      this.$router.push("/register");
    },
    //封装一个登录事件
    login() {
      login(this.userInfo).then((res) => {
        //前端做空判断
      if (this.userInfo.phone == "" || this.userInfo.password == "") {
        Toast.fail("请输入手机号或者密码")
      } else {
        //调取接口
        //模拟登录成功
        if (res.code == 200) {
                    Toast.success(res.msg)
                    //清空输入框 并 跳转到个人中心页面
                    this.userInfo = {
                        phone: '',
                        password: '',
                    }
                    //把数据存储到本地存储中
                    sessionStorage.setItem('userInfo',JSON.stringify(res.list))
                    this.$router.push('/car')
                } else if (res.code == 500) {
                    Toast.fail(res.msg)
                } else {
                    Toast.fail(res.msg)
                }
        }
      })
      
    }
  }
};
</script>

<style lang="" scoped>
.container {
  width: 7.5rem;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 0.6rem;
  /* padding-bottom: 2.37rem; */
  padding-bottom: 3.2rem;
  background: rgb(248, 97, 42);
  text-align: center;
}
.wrap {
  width: 7.1rem;
  margin: 0 auto;
}
.arrow{
  text-align: left;
  margin-left:0.3rem ;
}
.arrow img {
  width: 0.17rem;
  height: 0.29rem;
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
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  font-size: 0.7rem;
}
.img {
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;
}
span {
  position: absolute;
  left: 50%;
  /* top: 50%; */
  margin-left: -2.7rem;
  /* left: 1rem; */
  font-size: 0.45rem;
  color: #666;
}
.span1 {
  margin-top: 0.3rem;
}
.span2 {
  margin-top: 0.3rem;
}
.forget{
  padding: 0 0.7rem 0.5rem;
  text-align: right;
  font-size: 0.3rem;
  color: #fff;
}
.register{
  padding: 0 0.7rem 0.5rem;
  font-size: 0.3rem;
  color: #fff;
}
.register a{
  color:#67b1fc;
}
</style>
