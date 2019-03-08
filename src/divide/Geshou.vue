<template>
  <div class="wrapper">
    <Teas :shuju="shuju"  :shuju2="shuju2" :zhi="zhi" :pan="pan"></Teas>
    <Tu :pan="pan"></Tu>
    <Zimu :shuju2="shuju2" :pan="pan" @shijian="zhixing"></Zimu>
  </div>
</template>

<script>
import Teas from '@/components/divide/Teas'
import Zimu from '@/components/divide/Zimu'
import Tu from '@/components/divide/Tu'
export default {
  name: 'Goushou',
  data () {
    return {
      shuju:'',
      shuju2:'',
      pan:false,
      zhi:'0'
    }
  },
  components:{
    Teas,
    Zimu,
    Tu
  },
  methods:{
    huoqu(i){
      // if(i == 6){
      //   return
      // }else{

      if(localStorage.getItem(i)!=null){
        var zhi = JSON.parse(localStorage.getItem(i))
        this.shuju2 = zhi.shuju2
        this.shuju = zhi.shuju
      }else{

      var zhi = "/pc/cgi-bin/musicu.fcg?-=getUCGI13565104007618656&g_tk=899966952&loginUin=2764590450&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A10000%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A"+i+"%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D"
        this.pan = true;
        this.$axios.get(zhi).then((src)=>{
          this.shuju2 = src.data.singerList.data.tags.index
          this.shuju = src.data.singerList.data.singerlist
          this.pan = false;
          localStorage.setItem(i,JSON.stringify({
              shuju2:this.shuju2,
              shuju:this.shuju
          }))
        })
      }
      // }
    },
    zhixing(i){
      this.huoqu(i)
      if(i==-100){
        i = 0
      }
      this.zhi = i
    }
  },
  created:function(){
    this.huoqu(-100)
  }
}
</script>

<style scoped lang="less">
  .wrapper{
  }
</style>
