<template>
  <div class="hellos"  ref="wrapper">
    <div  class="content">
      <Shous :pan="pan" @shijian="zhix" ></Shous>
      <Remen :zu="zu" :pan="pan"  @shijian="zhix"></Remen>
      <Sswc :net="net" :duan="duan" @xuanran="zhixing"></Sswc>
      <Tu :pan="pan"></Tu>
      <Lis   :net2="net2"  @shijian="zhix"></Lis>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Shous from '@/components/divide/Shous'
import Remen from '@/components/divide/Remen'
import Tu from '@/components/divide/Tu'
import Sswc from '@/components/divide/Sswc'
import Lis from '@/components/divide/Lis'
export default {
  name: 'Shousuo',
  data () {
    return {
      zu:'',
      pan:false,
      net:'',
      duan:false,
      net2:''
    }
  },
  components:{
    Shous,
    Remen,
    Tu,
    Sswc,
    Lis
  },
  methods:{
    huoqu(){
      this.pan = true
      this.$axios.get("/ed/splcloud/fcgi-bin/gethotkey.fcg?g_tk=2015563006&loginUin=1969005722&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0").then((src)=>{

        this.zu = src.data.data.hotkey
      this.pan = false
      })
    },
    zhix(v){
      if(v != ""){
        this.duan = true
        this.net = v
      }else{
        this.duan = false
      }
    },
    zhixing(v){
      this.net2 = v
    }
  },
  created:function(){
    this.huoqu()
  },
  mounted() {
   setTimeout(() => {
     this.scroll = new BScroll(this.$refs.wrapper, {
       scrollY: true,
       click:true
     })
   }, 20)
  }
}
</script>

<style scoped lang="less">
  .hellos{
    background: #242424;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
      .content{
        padding-top:1.78rem;
        padding-bottom:1.25rem;
      }
  }
</style>
