<template>
  <div class="hello">
    <div class="shijian">
      <span>{{shichang2 | shi}}</span>
      <div class="wai"   ref="ab"
            @touchstart="touchstartHander"
            @touchmove="touchmoveHander"
            @touchend="touchendHander"
      >
        <div  ref="abc">
          <p></p>
        </div>
      </div>
      <span>{{shichang | shi}}</span>
    </div>
    <div class="chaoz">
      <i :class="zhiqs" @click="qiehuan"></i>
      <i class="iconfont icon-icon-test4"  @click="shangqu"></i>
      <i class="iconfont icon-icon-test2" v-show="kaiguan" @click="kaiguan2"></i>
      <i class="iconfont icon-icon-test3" v-show="!kaiguan"  @click="kaiguan2"></i>
      <i class="iconfont icon-icon-test7" @click="xiaqu"></i>
      <i class="iconfont icon-icon-test"></i>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'Caozuo',
  data () {
    return {
      X:0,
      zhiqs:''
    }
  },
  filters:{
    shi:function(add){
      var zhi =  Math.floor(add)%60 < 10?'0'+Math.floor(add)%60:Math.floor(add)%60
      return Math.floor(Math.floor(add)/60) + ':' + zhi
    }
  },
  methods:{
    kaiguan2(){
        this.$store.commit('kaiguans',!this.kaiguan)
    },
    touchstartHander(e){
      this.X = e.targetTouches[0].pageX
      var x = this.X-this.$refs.ab.offsetLeft
      var zhi = this.shichang * (x/this.$refs.ab.clientWidth)
      this.$store.commit('chumo',zhi)
    },
    touchmoveHander(e){
      this.X = e.targetTouches[0].pageX
      var x = this.X-this.$refs.ab.offsetLeft
      var zhi = this.shichang * (x/this.$refs.ab.clientWidth)
      this.$store.commit('chumo',zhi)
    },
    touchendHander(e){

    },
    xiaqu(){
      if(this.bffs == 2){
        this.sui()
      }else{
        this.$store.commit('zhi1')
      }
    },
    sui(){
      var zhi = Math.floor(Math.random()*this.songlist.length)
      if(zhi == this.zhi){
        this.sui()
      }else{
        this.$store.commit('zhi2',zhi)
      }
    },
    shangqu(){
      if(this.bffs == 2){
        this.sui()
      }else{
        this.$store.commit('zhi0')
      }
    },
    qiehuan(){
      this.$store.commit('qie')
    },
    huo(){
      if(this.bffs == 0){
        this.zhiqs= 'iconfont icon-weibiaoti-'
      }else if(this.bffs == 1){
        this.zhiqs= 'iconfont icon-icon-test8'
      }else if(this.bffs == 2){
        this.zhiqs= 'iconfont icon-icon-test9'
      }
    }
  },
  computed:{
    ...mapState(['kaiguan','shichang','shichang2','bffs','songlist','zhi'])
  },
  created:function(){
    this.huo()
  },
  watch:{
    shichang2:function(v){
      this.$refs.abc.style.width = (v/this.shichang*100).toFixed(2) + '%'
    },
    bffs:function(v){
      this.huo()
    }
  }

}
</script>

<style scoped lang="less">
  .hello{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
        z-index: 10;
    .shijian{
      height: 0.9rem;
      display: flex;
      flex-direction: row;
      margin:0 0.7rem;
      line-height: 0.9rem;
      span{
        font-size: 0.22rem;
        color:#000;
        padding:0 0.14rem;
      }
      div.wai{
        width: 4.8rem;
        height: 0.1rem;
        position: relative;
        margin-top:0.4rem;
        background: #151515;
        div{
          position: absolute;
          left: 0;
          top:0;
          width: 0%;
          height: 100%;
          background: #ffe563;
          p{
            width:0.2rem ;
            height: 0.2rem;
            border:0.02rem solid #fff;
            background: #ffe563;
            border-radius: 50%;
            position: absolute;
            right: -0.08rem;
            top: -0.08rem;
          }
        }
      }
    }
  }
  .chaoz{
    display: flex;
    flex-direction: row;
    height: 1.66rem;
    margin:0 0.4rem;
    i{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.86rem;
      color:#e6cc81;
    }
  }
</style>
