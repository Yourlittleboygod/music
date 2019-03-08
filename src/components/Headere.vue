<template>
  <div class="hello">
    <img :src="imgs" alt="">
    <div class="toug">
      <i class="iconfont icon-fanhui" @click="fanhui(fanh)"></i>
      <span :class="yings">{{names}}</span>
    </div>
    <div class="bofang">
      <i class="iconfont icon-icon-test3"></i>
      <span>随机播放全部</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headere',
  data () {
    return {
      yings:'',
      fanh:''
    }
  },
  props:['imgs','names',"zpa"],
  methods:{
    fanhui(v){
      this.$router.push({path:v})
    }
  },
  watch:{
    imgs:function(v){
      if(this.zpa == 0){
        this.yings = 'li'
        this.fanh = '/Index/Tuijian'
      }else if(this.zpa == 1){
        this.yings = 'one'
        this.fanh = '/Index/Geshou'
      }else if(this.zpa == 2){
        this.yings = 'one'
        this.fanh = '/Index/Paiheng'
      }
    }

  }
}
</script>

<style scoped lang="less">
  .hello{
    position: fixed;
    left: 0;
    top:0;
    width: 100%;
    z-index: 10;
    img{
      width: 100%;
      height:5.4rem ;
    }
    div{
      position: absolute;
    }
  }
  .toug{
    left: 0;
    top:0;
    line-height: 0.9rem;
    display: flex;
    flex-direction: row;
    i{
      font-size: 0.46rem;
      color:#aa844f;
      padding-left:0.30rem;
    }
    span.one{
      width: 6rem;
      font-size: 0.38rem;
      color:#f4f6ff;
      display: inline-block;
      text-align: center;
    }
    span.li{
      display: inline-block;
      width: 6rem;
      font-size: 0.46rem;
      color:#c1d7dd;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }
  }
  .bofang{
    left: 50%;
    bottom: 0.38rem;
    transform: translateX(-50%);
    width:2.64rem;
    height: 0.6rem;
    border:0.06rem solid #b6925d;
    border-radius: 0.6rem;
    line-height: 0.6rem;
    i{
      font-size: 0.36rem;
      color:#b6925d;
      padding-left:0.36rem;
    }
    span{
      font-size: 0.26rem;
      color:#b6925d;
      font-weight: bold;
    }
  }
</style>
