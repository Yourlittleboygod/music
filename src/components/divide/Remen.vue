<template>
  <div class="hello clearfix" v-show="!pan">
    <h2>热门搜索</h2>
    <ul>
      <li v-for="(v,i) in zu" :key="i" @click="dianji(v.k)">{{v.k}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Remen',
  data () {
    return {
    }
  },
  props:['zu','pan'],
  methods:{
    dianji(v){
      this.$emit('shijian',v)
    }
  }
}
</script>

<style scoped lang="less">
  .hello{
    padding:0.2rem 0.4rem;
    h2{
      line-height: 0.6rem;
      font-size: 0.3rem;
      color:#787878;
      padding-bottom: 0.3rem;
    }
    ul{
          height: 1.9rem;
      overflow: hidden;
      li{
        float: left;
        padding:0.1rem 0.2rem;
        background: #363635;
        font-size: 0.3rem;
        color:#686867;
        margin-right: 0.38rem;
        border-radius: 0.04rem;
        margin-bottom: 0.2rem;
      }
    }
  }
</style>
