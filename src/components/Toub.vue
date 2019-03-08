<template>
  <div class="hello">
    <div class="t">
      <i class="iconfont icon-fanhui" @click="fanhui"></i>
      <ul>
        <li class="zhong">我喜欢的</li>
        <li>最近听的</li>
      </ul>
    </div>
    <div class="bof">
      <p>
        <i class="iconfont icon-icon-test3"></i>
        <span>随机播放全部</span>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Toub',
  data () {
    return {
    }
  },
  methods:{
    fanhui(){
      this.$router.push({path:'/Index/Tuijian'})
    }
  }
}
</script>

<style scoped lang="less">
  .hello{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #252525;
    z-index: 12;
    div.t{
      height: 1.12rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      line-height: 1.12rem;
      i{
        font-size: 0.48rem;
        padding:0 0.61rem 0 0.36rem;
      }
      ul{
        width: 4.82rem;
        display: flex;
        flex-direction: row;
        padding-top: 0.22rem;
        li{
          width: 2.35rem;
          border:0.03rem solid #383737;
          height: 0.68rem;
          line-height: 0.68rem;
          font-size: 0.3rem;
          text-align: center;
          background: #252525;
          color:#606060;
        }
        li.zhong{
          background: #383737;
          color:#dddddd;
        }
      }
    }
  }
  .bof{
    height: 1.06rem;
    p{
      margin:auto;
      margin-top:0.36rem;
      height: 0.6rem;
      width: 2.62rem;
      border:0.05rem solid #646464;
      border-radius: 0.6rem;
      line-height: 0.6rem;
      i{
        padding:0 0.06rem 0 0.34rem;
      }
      i,span{

        font-size: 0.26rem;
        color:#666666;
      }
    }
  }

</style>
