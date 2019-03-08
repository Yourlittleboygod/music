<template>
  <div class="hello">
    <div class="top">
      <div>
        <img src="../../static/images/ji.jpg" alt="">
        <span>Chicken Music</span>
      </div>
      <i class="iconfont icon-buoumaotubiao03" @click="qiehuan"></i>
    </div>
    <div class="xia">
      <ul>
        <router-link tag='li' to="/Index/Tuijian"><span>推荐</span></router-link>
        <router-link tag='li' to="/Index/Geshou"><span>歌手</span></router-link>
        <router-link tag='li' to="/Index/Paiheng"><span>排行</span></router-link>
        <router-link tag='li' to="/Index/Shousuo"><span>搜索</span></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  data () {
    return {
      data:['推荐','歌手','排行','搜索']
    }
  },
  methods:{
    qiehuan(){
      this.$router.push({path:'/Grzx'})
    }
  }
}
</script>

<style scoped lang="less">

  .hello{
    height: 1.78rem;
    background: #252525;
    position: fixed;
    left: 0;
    width: 100%;
    top:0;
    z-index: 10;
    .top{
      height: 0.88rem;
      line-height: 0.88rem;
      position: relative;
      i{
        position: absolute;
        right:0.23rem;
        top:0rem;
        font-size: 0.45rem;
        color:#7f7a53;
      }
      div{
        position: absolute;
        left: 50%;
        transform:translate(-50%);
        img{
          height:0.7rem ;
        }
        span{
          font-size: 0.34rem;
          color:#b19266;
        }
      }
    }
  }
  .xia{
    height: 0.9rem;
    ul{
      display: flex;
      flex-direction: row;
      li{
        height: 0.52rem;
        margin-top:0.19rem;
        line-height: 0.52rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:#7f7f7e;
      }
      li.zhong{
        color:#d2b583;
        span{
          border-bottom: 2px solid #d2b583;
        }
      }
    }
  }
</style>
