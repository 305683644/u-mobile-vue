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
        <p>欢迎注册</p>
        <div class="img">
          <img src="../../assets/images/list_images/logo.png" alt />
        </div>
        <div>
          <span class="span1 iconfont">&#xe612;</span>
          <!-- 昵称： -->
          <input type="text" v-model="userInfo.nickname" placeholder="请输入昵称" />
        </div>
        <div>
          <span class="span1 iconfont">&#xe660;</span>
          <!-- 手机号： -->
          <input type="text" v-model="userInfo.phone" placeholder="请输入手机号" />
        </div>
        <div>
          <span class="span2 iconfont">&#xe668;</span>
          <!-- 密码： -->
          <input type="text" v-model="userInfo.password" placeholder="请输入密码" /> 
        </div>
        <div>
          <span class="span2 iconfont">&#xe623;</span>
          <!--验证码： -->
          <input type="text" v-model="randstr" placeholder="请输入验证码" /> 
          <span  @click="changeCode" class="code">{{code}} </span>
        </div>
          <div class="forget"  @click="allCheck">
            <label  >
                   <input type="checkbox" hidden >
                   <i  @click="allCheck" :class="{'checked':this.checkAll}"></i>
                </label>
            我已阅读并同意使用条款和隐私政策</div>
        </div>
        <button @click="register">注册</button>
        <div class="register"  >已有账号 -> <a @click="login">去登录</a></div>
      </div>
   
  </div>
</template>

<script>
import { Toast } from 'vant'
import { register } from '../../util/axios'
export default {
  
  data() {
    return {
      reg:/^1[356789]\d{9}$/i,
      code:'',
      str:'0123456789',
      repeat:false,
      checkAll:false,
      title: "登录",
      userInfo: {
        nickname: "",
        phone:"",
        password: ""
      },
      randstr:''
    };
  },
  mounted(){
    this.getCode()
  },
  methods: {
    changeCode(){
        this.code='',
        this.getCode()
    },
    getCode(){
        for(var i=0;i<4;i++){//验证码随机数4位
            var n=Math.floor(Math.random()*9);//拿到了str的下标的随机数，随机数都是小数，向下取整
            if(this.repeat){
                this.code+=this.str[n];
            }else{
                if(this.code.indexOf(this.str[n])==-1){
                    this.code+=this.str[n];
                }else{
                    i--;
                }
            }
        }
        return this.code;
    },
    allCheck() {
            this.checkAll=!this.checkAll
    },
    login(){
      this.$router.push("login");
    },
    //封装一个注册事件
    register() {
      //调取接口
      register(this.userInfo).then((res) => {
         //前端做空判断
         if (this.userInfo.nickname == "" || this.userInfo.phone== "" || this.userInfo.password == "" ) {
        Toast.fail("请填写完整信息");
      } else 
      if(!(this.reg.test(this.userInfo.phone))){
            Toast.fail("手机号码格式错误");
          }else
           if(this.randstr!==this.code){
            Toast.fail("验证码错误");
          }else if(this.checkAll==false){
            Toast.fail("同意该协议才可注册");
          }else{
            if (res.code == 200) {
                    Toast.success(res.msg)
                    //清空输入框 并 跳转到登录界面
                    this.userInfo = {
                        phone: '',
                        password: '',
                        nickname: '',
                    }
                    this.randstr=''
                    this.$router.push('/login')
                } else if (res.code == 500) {
                    Toast.fail(res.msg)
                } else {
                    Toast.fail(res.msg)
                }
          }
        
      
      })
    },
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
  padding-bottom: 1rem;
  background: rgb(248, 97, 42);
  text-align: center;
}
.arrow{
  text-align: left;
  margin-left:0.3rem ;
}
.arrow img {
  width: 0.17rem;
  height: 0.29rem;
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
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
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
.code{
  display: inline-block;
  width: 1.5rem;
  height: 0.8rem;
  background: rgb(199, 199, 199);
  margin-left: 1.1rem;
  margin-top: 0.1rem;
  color: rgb(73, 73, 251);
  font-weight: bold;
  /* font-style: italic; */
  line-height: 0.8rem;
}
.forget{
  padding: 0 0.4rem 0.5rem;
  text-align:left;
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.02rem;
}

.register{
  padding: 0 0.7rem 0.5rem;
  font-size: 0.3rem;
  color: #fff;
}
.register a{
  color:#67b1fc;
}
.box{
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
  background: #fff;
}
i {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border: 0.02rem solid #cacaca;
  border-radius: 0.1rem;
  margin: 0 0.05rem 0 0.26rem;
  background-color: #fff;
  vertical-align: -0.05rem;
}
.checked {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  /* border: 0.02rem solid #cacaca; */
  /* border-radius: 50%; */
  background-color: #fff;
  /* border-color: #de2d27; */
  background: url("../../assets/images/shoping_car_images/select.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 0.05rem 0 0.26rem;
}
</style>
