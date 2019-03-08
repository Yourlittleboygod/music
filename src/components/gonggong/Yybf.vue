<template>
  <div class="hello2">
    <div class="img" @click.capture ="xq">
      <img  ref="abc" :src="this.$store.state.songlist[this.$store.state.zhi].songcover" alt="">
    </div>
    <div class="name" @click.capture ="xq">
      <h2>{{this.$store.state.songlist[this.$store.state.zhi].songname}}</h2>
      <p>{{this.$store.state.songlist[this.$store.state.zhi].songername}}</p>
    </div>
    <i class="iconfont icon-icon-test2" v-show="kaiguan" @click="kaiguan2"></i>
    <i class="iconfont icon-icon-test3" v-show="!kaiguan"  @click="kaiguan2"></i>
    <i class="iconfont icon-icon-test13"></i>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      zhi:0
    }
  },
  mounted:function(){
    this.xuanzhuan()
  },
  methods:{
    xq(){
      this.$store.commit('xians',true)
    },
    kaiguan2(){
        this.$store.commit('kaiguans',!this.kaiguan)
    },
    xuanzhuan(){
      if(this.kaiguan){
        this.$refs.abc.style.animationPlayState = 'running'
      }else{
        this.$refs.abc.style.animationPlayState = 'paused'
      }
    }
  },
  computed:{
    ...mapState(['kaiguan'])
  },
  watch:{
    kaiguan:function(v){
      this.xuanzhuan()
    },
  }
}
</script>

<style scoped lang="less">
  .hello2{
    height: 1.25rem;
    width: 100%;
    position:fixed;
    left: 0;
    bottom:0;
    background: #393939;
    display: flex;
    flex-direction: row;
    .img{
      margin:0.19rem 0.1rem 0 0.34rem;
    }
    img{
      width:0.85rem ;
      height: 0.85rem;
      border-radius: 50%;
      transform: rotate(0deg);
      animation: abc 4s;
      animation-iteration-count:infinite;
      animation-timing-function:linear;
    }
    @keyframes abc{
      100%{
        transform: rotate(360deg)
      }
    }
    div.name{
      width: 4.25rem;
      h2{
        line-height: 0.46rem;
        margin-top:0.15rem;
        font-size: 0.28rem;
        color:#fff;
      }
      p{
        line-height: 0.43rem;
        font-size: 0.26rem;
        color:#757574;
      }
    }
      i{
        font-size: 0.72rem;
        color:#e8cf7d;
        line-height: 1.25rem;
        padding:0 0.17rem;
      }
  }
</style>
