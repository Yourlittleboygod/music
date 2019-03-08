<template>
  <div class="hello" v-show="yin">
    <div class="nei">
      <p>搜索历史</p>
      <i class="iconfont icon-laji" @touchstart="qshanchu"></i>
    </div>
    <ul>
      <li v-for="(v,i) in zhi " :key="i">
        <p @click="zhixings(v)" >{{v}}</p>
        <i class="iconfont icon-shanchu" @touchstart="shanchu(i)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Lis',
  data () {
    return {
      yin:false,
      zhi:''
    }
  },
  props:['net2'],
  watch:{
    net2:function(v){
      this.shuju()
    }
  },
  methods:{
    shuju(){
      if(JSON.parse(localStorage.getItem('zu')).length <= 0){
        this.yin = false
      }else{
        this.yin = true;
        this.zhi = JSON.parse(localStorage.getItem('zu'))
        // console.log(this.zhi)
      }
    },
    shanchu(i){
      var zu = JSON.parse(localStorage.getItem('zu'))
      zu.splice(i,1)
      localStorage.setItem('zu',JSON.stringify(zu))
      this.shuju()
    },
    qshanchu(){
      localStorage.setItem('zu',JSON.stringify([]))
      this.shuju()
    },
    zhixings(v){
      this.$emit('shijian',v)
    }
  },
  created:function(){
    this.shuju()
  }
}
</script>

<style scoped lang="less">
  .hello{
    padding:0.4rem;
    div.nei,ul li{
      line-height: 0.8rem;
      font-size: 0.32rem;
      color:#7f7f7e;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

  }
</style>
