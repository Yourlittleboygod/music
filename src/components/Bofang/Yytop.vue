<template>
  <div class="wai">
    <i class="iconfont icon-xiala" @click="gb"></i>
    <div>
      <h2>{{this.$store.state.songlist[this.$store.state.zhi].songname}}</h2>
      <p>{{this.$store.state.songlist[this.$store.state.zhi].songername}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Yytop',
  data () {
    return {
    }
  },
  methods:{
    gb(){
      this.$store.commit('xians',false)
    }
  }
}
</script>

<style scoped lang="less">
    .wai{
      position: absolute;
      left: 0;
      top:0;
      width: 100%;
      display: flex;
      flex-direction: row;
      z-index: 10;
      i{
        position: absolute;
        left: 0.25rem;
        top:0.28rem;
        font-size: 0.5rem;
        color:#c4b26a;
      }
      div{
        margin:auto;
        text-align: center;
        h2{
          font-size: 0.4rem;
          color:#fff;
          line-height: 0.88rem;
        }
        p{
          line-height: 0.42rem;
          font-size: 0.3rem;
          color:#fff;
        }
      }
    }
</style>
