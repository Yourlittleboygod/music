<template>
  <div class="hello">
    <div class="liebiao">
      <h2>添加歌曲到列表</h2>
      <i class="iconfont icon-shanchu"></i>
    </div>
    <div class="sous">
      <input type="text" placeholder="搜索歌曲">
      <i class="iconfont icon-sousuo"></i>
      <ul>
        <li class="zhong">最近播放</li>
        <li>搜索历史</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tobu',
  data () {
    return {
      zo:0
    }
  }
}
</script>

<style scoped lang="less">
  .liebiao{
    height: 0.88rem;
    line-height: 0.88rem;
    display: flex;
    flex-direction: row;
    position: relative;
    background: #252525;
    h2{
      font-size: 0.4rem;
      color:#e1e1e1;
      margin:auto;
    }
    i{
      position: absolute;
      right:0.3rem;
      font-size:0.46rem;
      color:#998250;
    }
  }
  .sous{
    background: #252525;
    position: relative;
    input{
      width: 6.1rem;
      height: 0.84rem;
      background: #383737;
      padding-left: 0.7rem;
      margin:0.38rem 0.37rem;
    }
    i{
      position: absolute;
      left:0.6rem ;
      top:0.7rem;
      font-size: 0.23rem;
      color:#252525;
    }
    ul{
      margin-left: 1.34rem;
      display: flex;
      flex-direction: row;
      padding-bottom: 0.2rem;
      li{
        width: 2.4rem;
        height: 0.62rem;
        border:0.04rem solid #383737;
        text-align: center;
        line-height: 0.62rem;
        background: #252525;
        font-size: 0.3rem;
        color:#5c5c5c;
      }
      li.zhong{
        background: #383737;
        color:#fff;
      }
    }
  }
</style>
