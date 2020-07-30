<template>
  <div>
    <div class="container">
      <!-- 顶部 -->
      <top :title="title"></top>
      <!-- 分类 -->
      <div class="content clearfix">
        <ul class="nav-left">
          <li @click="changeColor(idx)" v-for="(item1,idx) in cateList" :key="item1.id">
            <a :class="[idx==num?'active':'']">{{item1.catename}}</a>
            <div :class="[idx==num?'block right':'right none']">
              <div class="right-top" v-for="item2 in secondList" :key="item2.id">
                <h3 class="head">
                  <a>
                    {{item2.catename}}
                    <span @click="goList(item2.id)">更多></span>
                  </a>
                </h3>
                <ul class="clearfix">
                  <li 
                  v-for="item3 in goodsList"
                  :key="item3.id"
                  @click="goDetail(item3.id)">
                    <a>
                      <img :src="$imgUrl+item3.img" alt />
                      {{item3.goodsname}}
                    </a>
                  </li>
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
import { getcatetree, getgoods } from "../../util/axios";
export default {
  data() {
    return {
      title: "商品分类",
      pidId: 0,
      num: 0,
      cateList: [],
      secondList: [],
      allList: [],
      goodsList: [],
    };
  },
  mounted() {
    //组件一加载 调取接口
    this.getCateTree();
    // this.getGoods()
  },
  methods: {
    // getGoods(){
    //     getgoods({fid:this.pidId}).then(res=>{
    //         console.log(res)
    //         if (res.code == 200){

    //         this.goodsList=res.list
    //             // console.log(this.goodsLis)
    //         }
    //     })
    // },
    getCateTree(num = 0) {
      getcatetree().then((res) => {
        if (res.code == 200) {
          this.cateList = res.list;
          this.secondList = this.cateList[num].children;
          if (this.secondList) {
              this.secondList.map(item=>{
                  getgoods({ fid: item.id }).then((res) => {
              console.log(res.list,'商品数据');

              if (res.code == 200) {
                this.goodsList = res.list 
              }
            });
              })
            console.log(this.secondList, "this.secondList");
          }
        }
      });
    },

    changeColor(idx) {
      this.num = idx;
      // this.secondList = this.cateList[this.num].children
      this.getCateTree(idx);
    },
    goList(id) {
      this.$router.push({
        path: "/goodsList",
        query: {
          id,
        },
      });
    },
    goDetail(id) {
      this.$router.push({
        path: "/goodsDetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/productClassify.css";
</style>