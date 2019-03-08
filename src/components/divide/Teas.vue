<template>
  <div class="shop_box" ref="wrapper" v-show="!pan">

    <div class="content">

      <span v-html="zhi==0?'热门':shuju2[zhi].name"></span>
      <ul>
        <li v-for="(v,i) in shuju" :key="i" @click="tiao(v.singer_mid,v.singer_pic)">
          <img :src="v.singer_pic" @error="zxsj(v.singer_pic,$event)" alt="">
          <p>{{v.singer_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Teas',
  data () {
    return {
    }
  },
  props:['shuju','pan','shuju2','zhi'],
  mounted() {
   setTimeout(() => {
     this.scroll = new BScroll(this.$refs.wrapper, {
       scrollY: true,
       click:true
     })
   }, 20)
},
methods:{
  zxsj(r,e){
    e.target.src = "https://i01piccdn.sogoucdn.com/22e1935aee364fde"
  }
},
methods:{
  tiao(v,r){
      this.$router.push({path:'/Gsxq',query:{ids:v,ying:1,imgs:r}})
  }
}
}
</script>

<style scoped lang="less">
  .shop_box{
    background: #272727;
    width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
    span{
      display: inline-block;
      width: 95%;
      height: 0.65rem;
      padding-left: 5%;
      background: #3a3a3a;
      font-size: 0.25rem;
      color:#8b8b8b;
      line-height: 0.65rem;
    }
    .content{
      padding-top:1.78rem;
        padding-bottom:1.25rem;
    }
    ul{
      li{
        line-height:1.44rem;
        display: flex;
        flex-direction: row;
        img{
          width: 1.05rem;
          height: 1.05rem;
          border-radius: 50%;
          margin:0.19rem 0.35rem 0 0.6rem;
        }
        p{
          font-size: 0.26rem;
          color:#808080;
        }
      }
    }
  }
</style>
