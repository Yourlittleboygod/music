<template>
  <div class="hello" v-show="!pan">
    <input type="text" placeholder="搜索歌曲、歌手" @keypress="searchGoods">
    <i class="iconfont icon-sousuo"></i>
  </div>
</template>

<script>
export default {
  name: 'Shous',
  data () {
    return {
    }
  },
  props:['pan'],
  methods:{
    searchGoods(e){
      if(e.keyCode == 13){
        e.preventDefault();
        var zhi = e.target.value;
        this.$emit('shijian',zhi)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .hello{
    padding:0.4rem;
    position: relative;
    z-index: 100;
    background: #242424;
    input{
      width: 6rem;
      height:0.82rem ;
      padding-left: 0.9rem;
      border-radius: 0.08rem;
      background: #363636;
    }
    i{
      position: absolute;
      left: 0.65rem;
      top: 0.65rem;
      font-size: 0.33rem;
      color:#ccc;
    }
  }
</style>

