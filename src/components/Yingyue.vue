<template>
  <div class="hello" ref="wrapper">
    <div  class="content">
    <ul>
      <li v-for="(v,i) in zhi2" :key="i" @click="qiehuan(v)">
        <h2>{{v.songname}}</h2>
        <p>
          <span v-for="(value,index) in v.singer" :key="index">{{value.name}}</span>
        </p>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Yingyue',
  data () {
    return {
      songurl:'',
      lyric:'',
      songname:'',
      songername:'',
      songcover:''
    }
  },
  props:['zhi2'],
  mounted() {
   setTimeout(() => {
     this.scroll = new BScroll(this.$refs.wrapper, {
       scrollY: true,
       click:true
     })
   }, 20)
  },
  computed:{
    ...mapState(['zhi','songlist'])
  },
  methods:{
    qiehuan(v){
      var than = this
      this.$axios.get('/pc/cgi-bin/musicu.fcg?-=getplaysongvkey9592700474141493&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22req%22%3A%7B%22module%22%3A%22CDN.SrfCdnDispatchServer%22%2C%22method%22%3A%22GetCdnDispatch%22%2C%22param%22%3A%7B%22guid%22%3A%227196536004%22%2C%22calltype%22%3A0%2C%22userip%22%3A%22%22%7D%7D%2C%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%227196536004%22%2C%22songmid%22%3A%5B%22' +
      v.songmid +
      '%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%220%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A0%2C%22format%22%3A%22json%22%2C%22ct%22%3A20%2C%22cv%22%3A0%7D%7D').then((res)=>{
        than.songurl = res.data.req.data.sip[0]+res.data.req_0.data.midurlinfo[0].purl
          than.$axios.get('/ed/lyric/fcgi-bin/fcg_query_lyric_new.fcg?-=MusicJsonCallback_lrc&pcachetime=1547778937953&songmid='+v.songmid+'&g_tk=1127320055&loginUin=2764590450&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0').then((src)=>{
              than.lyric = src.data.lyric
              than.songname = v.songname
              than.songername = v.singer[0].name
              than.songcover = 'http://p0.so.qhmsg.com/bdr/_240_/t01c5b15f4666ba2855.png'
              var duixing = {
                songname:than.songname,
                songername:than.songername,
                songcover:than.songcover,
                songurl:than.songurl,
                lyric:than.lyric
              }
              than.$store.commit('songlists',duixing)
              than.$store.commit('zhi2',than.songlist.length-1)
              than.$store.commit('kaiguans','true')
            })
      })
}
  }
}
</script>

<style scoped lang="less">
  .hello{
    background: #252525;
    position: fixed;
    left: 0;
    top:0rem;
    width: 100%;
        height: 100vh;
        overflow: hidden;
      .content{
        padding-top:5.4rem;
        padding-bottom: 1.25rem;
        background: #242424;
      }
  }
  ul{
    margin: 0.4rem 0.5rem 0;
    li{
      height: 1.32rem;
      h2{
        line-height: 0.48rem;
        font-size: 0.28rem;
        color:#fff;
      }
      p{
        font-size: 0.28rem;
        color:#606060;
        line-height: 0.48rem;
      }
    }
  }
</style>
