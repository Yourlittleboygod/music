<template>
  <div class="hello" ref="wrapper">
      <div  class="content">
    <ul>
      <li v-for="(v,i) in shuju" :key="i">
        <h2>{{v.songname}}</h2>
        <p>
          <span v-for="(value,index) in v.singer" :key="index">{{value.name}}</span>
        </p>
      </li>
    </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'yingyues',
  data () {
    return {
      shuju:''
    }
  },
  methods:{
    huoqu(){
      this.$axios.get('/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=1&nosign=1&song_begin=0&song_num=30&ctx=1&disstid=667175906&_=1547175150099&g_tk=573297084&loginUin=2764590450&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0').then((src)=>{
        console.log(src.data.songlist)
        this.shuju = src.data.songlist
      })
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
  background: #272727;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
      .content{
        padding-top:2.18rem;
        padding-bottom:1.25rem;
      }
}

  ul{
    margin:0.5rem 0.5rem 0;
    li{
      height: 1.3rem;
      h2,p{
        line-height: 0.5rem;
        font-size: 0.32rem;
        color:#585858;
      }
      h2{
        color:#dadada;
      }
    }
  }
</style>
