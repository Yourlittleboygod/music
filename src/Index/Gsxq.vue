<template>
  <div class="hello">
    <Headere :imgs="imgs" :names="names" :zpa="zpa"></Headere>
    <Yinyue :zhi="zhi"></Yinyue>
  </div>
</template>

<script>
import Headere from '@/components/Headere'
import Yinyue from '@/components/Yinyue'
export default {
  name: 'Gsxq',
  data () {
    return {
      zhi:'',
      zpa:1,
      imgs:'',
      names:''
    }
  },
  components:{
    Headere,
    Yinyue
  },
  methods:{
    huoqu(){
      this.zpa = this.$route.query.ying
      this.$axios.get('/ed/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=2015563006&loginUin=1969005722&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&singermid='+this.$route.query.ids+'&order=listen&begin=0&num=30&songstatus=1').then((src)=>{
        this.zhi = src.data.data.list
        this.imgs = this.$route.query.imgs
        this.names = src.data.data.singer_name
        console.log(src.data.data.list)
      })
    }
  },
  created:function(){
    this.huoqu()
  }
}
</script>

<style scoped lang="less">

</style>
