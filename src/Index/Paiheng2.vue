<template>
  <div class="hello">
    <Headere :imgs="imgs" :names="names" :zpa="zpa"></Headere>
    <Yingyue2 :yinyue="yinyue"></Yingyue2>
  </div>
</template>

<script>
import Headere from '@/components/Headere'
import Yingyue2 from '@/components/Yingyue2'
export default {
  name: 'Paiheng',
  data () {
    return {
      names:'',
      imgs:'',
      yinyue:'',
      zpa:2
    }
  },
  components:{
    Headere,
    Yingyue2
  },
  methods:{
    huoqu(){
      this.zpa = this.$route.query.ying
      this.$axios.get('/ed/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid='+this.$route.query.ids+'&_=1547107577653').then((src)=>{
        this.names = src.data.topinfo.ListName
        this.imgs = this.$route.query.imgs
        this.yinyue = src.data.songlist
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
