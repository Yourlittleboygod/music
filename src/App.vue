<template>
  <div id="app">
    <router-view/>
    <Yybf></Yybf>
    <transition name="donghua">
      <Yinyue class="yy" v-show="this.$store.state.yinxian"></Yinyue>
    </transition>
    <audio  :src="this.$store.state.songlist[this.$store.state.zhi].songurl" @canplaythrough='canplay' @ended="end" @timeupdate="updateTime"  ref="abc"></audio>
  </div>
</template>

<script>
import Yybf from '@/components/gonggong/Yybf'
import Yinyue from '@/Index/Yinyue'
import {mapState} from 'vuex'
import Lyric from 'lyric-parser'
export default {
  name: 'App',
  components:{
    Yybf,
    Yinyue,
    zhi6:''
  },
  methods:{
    canplay(){
      var jiexi = Base64.decode(this.songlist[this.zhi].lyric)
      this.zhi6 = new Lyric(jiexi)
      this.$store.commit('geci',this.zhi6)
      console.log(this.zhi6)
      if(this.kaiguan){
        this.$refs.abc.play()
        this.$store.commit('shichang',this.$refs.abc.duration)
        this.$store.commit('kefou')
      }else{
        this.$refs.abc.pause()
        this.$store.commit('shichang',this.$refs.abc.duration)
      }
    },
    updateTime(){
      this.$store.commit('shichang2',this.$refs.abc.currentTime)
    },
    end(){
      if(this.bffs == 0){
        this.$refs.abc.currentTime = 0
        this.$refs.abc.play()
      }else if(this.bffs == 1){
        this.$store.commit('zhi1')
      }else if(this.bffs == 2){
        var zhi = Math.floor(Math.random()*this.songlist.length)
        if(zhi == this.zhi){
          this.sui()
        }else{
          this.$store.commit('zhi2',zhi)
        }
      }
    }
  },
  computed:{
    ...mapState(['kaiguan','chumo','bffs','zhi','songlist'])
  },
  watch:{
    kaiguan:function(v){
      this.canplay()
    },
    chumo:function(v){
      this.$refs.abc.currentTime = v
    }
  }
}
</script>

<style>
.yy{
  position: fixed;
  left: 0;
  top:0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: #fff;
}
.donghua-enter-active{
			transition: 1s all;
		}
		.donghua-enter{
			top:100vh;
		}
		.donghua-enter-to{
			top:0;
		}

		.donghua-leave-active{
			transition: 1s all;
		}
		.donghua-leave{
			top:0;
		}
		.donghua-leave-to{
			top:100vh;
		}
</style>
