<template>
  <div class="hellos">
    <Headere :imgs="imgs" :names="names" :zpa="zpa"></Headere>
    <Yingyue :zhi2="zhi2"></Yingyue>
    <Tu :pan="pan"></Tu>
  </div>
</template>

<script>
import Headere from '@/components/Headere'
import Yingyue from '@/components/Yingyue'
import Tu from '@/components/divide/Tu'
export default {
  name: 'Xingqing',
  data () {
    return {
      zhi2:'',
      pan:false,
      zpa:0,
      imgs:'',
      names:''
    }
  },
  components:{
    Headere,
    Yingyue,
    Tu
  },
  methods:{
    huoqu(){
      this.zpa = this.$route.query.ying;
      this.pan=true;
      this.$axios.get('/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid='+this.$route.query.ids+'&g_tk=1372877263&loginUin=2764590450&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&ct=24&needNewCode=0').then((src)=>{

        this.zhi2 = src.data.cdlist[0].songlist
        console.log(this.zhi2)
        this.imgs = src.data.cdlist[0].logo
        this.names = src.data.cdlist[0].dissname
      this.pan=false;
      })
    }
  },
  created:function(){
    this.huoqu()
  }
}
</script>

<style scoped lang="less">
  .hellos{
    background: #252525;
  }
</style>
