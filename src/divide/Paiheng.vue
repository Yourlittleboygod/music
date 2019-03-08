<template>
  <div class="hello">
    <div  class="shop_box" ref="wrapper">
      <div  class="content">
        <ul  v-show="!panduan">
          <li v-for="(v,i) in shuju" :key="i" @click="qiehua(v.id,v.picUrl)">
            <img :src="v.picUrl" alt="">
            <div>
              <p v-for="(value,index) in v.songList" :key="index">{{index}}{{value.singername}}-{{value.songname}}</p>
            </div>
          </li>
      </ul>
      </div>
    </div>
    <img src="../../static/images/cd59c28a4c6d49bc8b4ecfcdffbc04f1_th.png" alt="" v-show="panduan">

  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'Paiheng',
  data () {
    return {
      shuju:'',
      panduan:''
    }
  },
  methods:{
    huoqu(){
      this.panduan = true;
      this.$axios.get('/ed/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=35293734&uin=1969005722&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1546918835957').then((src)=>{

        this.shuju = src.data.data.topList
      this.panduan = false;
      })
    },
    qiehua(v,r){
      this.$router.push({path:'/Paiheng2',query:{ids:v,ying:2,imgs:r}})
    }
  },
  created:function(){
    this.huoqu()
  },
  mounted() {
   setTimeout(() => {
     this.scroll = new BScroll(this.$refs.wrapper, {
       scrollY: true,
       click:true
     })
   }, 20)
  }
}
</script>

<style scoped lang="less">
  .hello{
    background: #242424;
    img{
      width: 100%;

    }
    .shop_box{
        background: #272727;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
      .content{
        padding-top:1.78rem;
        padding-bottom:1.25rem;
      }
    }
    ul{
      padding-top: 0.2rem;
      padding-bottom: 0.4rem;
      li{
        background: #363735;
        width: 6.8rem;
        height: 2.1rem;
        margin:0.4rem 0.4rem 0;
        display: flex;
        flex-direction: row;
        img{
          height: 2.1rem;
          width: 2.1rem;
        }
        div{
          margin:0.2rem 0 0 0.4rem;
          p{
            line-height: 0.52rem;
            font-size: 0.26rem;
            color:#6f6f6f;
          }
        }
      }
    }
  }
</style>
