<template>
  <div class="hello" ref="wrapper" v-show="duan">
    <div  class="content">
    <ul>
      <li  @click="tianjia(zhi0)">
        <i class="iconfont icon-yinle"></i>
        <span>{{zhi1}}</span>
        <span>{{zhi2}}</span>
      </li>
      <li v-for="(v,i) in zhi3" :key="i" @click="tianjia(v)">
        <i class="iconfont icon-yinle"></i>
        <span>{{v.albumname}}</span>-
        <span v-for="(value,index) in v.singer" :key="index">{{value.name}},</span>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'HelloWorld',
  data () {
    return {
      zhi1:'',
      zhi2:'',
      zhi3:'',
      zhi0:''
    }
  },
  props:['net','duan'],
  methods:{
    tianjia(v){
      console.log(v)
    }
  },
  watch:{
    net:function(v){
      this.$axios.get('/ed/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w='+v+'&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1547000268336').then((src)=>{
          this.zhi0 = src.data.data.zhida
          this.zhi1 = src.data.data.zhida.albumname
          this.zhi2 = src.data.data.zhida.singername
          this.zhi3 = src.data.data.song.list
          var zhi = JSON.parse(localStorage.getItem('zu'));
          if(zhi == null){
            var zhi = [];
            zhi.push(v)
          }else{
            var ers = 0;
            for(var i=0;i<zhi.length;i++){
              if(v == zhi[i]){
                ers++
              }
            }

            if(ers == 0){
              zhi.push(v)
            }
          }
          localStorage.setItem('zu',JSON.stringify(
            zhi
          ))
          this.$emit('xuanran',v)
        })
    }
  },
  mounted() {
   setTimeout(() => {
     this.scroll = new BScroll(this.$refs.wrapper, {
       scrollY: true
     })
   }, 20)
  }
}
</script>

<style scoped lang="less">
  .hello{
    position: fixed;
    left: 0;
    top:0rem;
    width: 100%;
        height: 100vh;
        overflow: hidden;
      .content{
        padding-top:3.4rem;
        background: #242424;
        padding-bottom:1.25rem;
      }
    ul{
      margin:0 0.6rem;
      li{
        width: 100%;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        line-height: 0.72rem;
        font-size: 0.29rem;
        color:#555555;
      }
    }
  }
</style>
