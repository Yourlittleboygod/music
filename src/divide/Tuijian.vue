<template>
  <div class="hellos"  ref="wrapper">
    <div  class="content">
      <Swipers :zu="zu" :pan="pan"></Swipers>
      <Tuijians :shuju="shuju" :pan="pan"></Tuijians>
      <Tu :pan="pan"></Tu>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Swipers from '@/components/divide/Swipers'
import Tuijians from '@/components/divide/Tuijians'
import Tu from '@/components/divide/Tu'
export default {
  name: 'Tuijian',
  data () {
    return {
      pan:false,
      shuju:'',
      zu:""
    }
  },
  components:{
    Swipers,
    Tuijians,
    Tu
  },
  methods:{
    huoqu(){
      this.pan = true;
      this.$axios.get('/pc/cgi-bin/musicu.fcg?-=recom04492798951420607&g_tk=899966952&loginUin=2764590450&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22recomPlaylist%22%3A%7B%22method%22%3A%22get_hot_recommend%22%2C%22param%22%3A%7B%22async%22%3A1%2C%22cmd%22%3A2%7D%2C%22module%22%3A%22playlist.HotRecommendServer%22%7D%7D').then((src)=>{

      this.pan = false;
        this.shuju = src.data.recomPlaylist.data.v_hot
      })

      this.$axios.get('/ed/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1546852801213').then((src)=>{
        this.pan = false;
        this.zu = src.data.data.slider
      })
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
  div.hellos{
    background: #272727;
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
