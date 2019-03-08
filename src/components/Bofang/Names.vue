<template>
  <div class="hello">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img ref="abc" :src="this.$store.state.songlist[this.$store.state.zhi].songcover" alt="">
      </swiper-slide>
      <swiper-slide>
        <div class="ding">
          <ul  ref="absc">
            <li v-for="(v,i) in geci.lines" :key="i" :class="i == zhis?'zhongs':''">{{v.txt}}</li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Names',
  data () {
    return {
      swiperOption:{
      },
      zhi:0,
      zhis:0
    }
  },
  computed:{
    ...mapState(['kaiguan','songlist','geci','shichang2'])
  },
  methods:{
    xuanzhuan(){
      if(this.kaiguan){
        this.$refs.abc.style.animationPlayState = 'running'
      }else{
        this.$refs.abc.style.animationPlayState = 'paused'
      }
    }
  },
  watch:{
    kaiguan:function(v){
      this.xuanzhuan()
    },
    shichang2:function(v){
      for(var i=0;i<this.geci.lines.length;i++){
        if(Math.floor(this.geci.lines[i].time/1000)== Math.floor(v)){
          this.zhis = i
        }
      }
    },
    zhis:function(i){
      this.$refs.absc.style.transform='translateY(-'+(i+1)*0.66+'rem)'
    }
  },
  mounted:function(){
    this.xuanzhuan()
  }
}
</script>

<style scoped lang="less">
  .hello{
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top:0;
    z-index: 1;
  }
  .ding{
    height: 60vh;
    margin-top: 1.3rem;
    overflow: hidden;
  }
  ul{
    margin: auto;
    text-align: center;
    height: 100%;
    margin-top: 0.8rem;
    transition: all 1s ease;
    li{
      line-height: 0.66rem;
      font-size: 0.3rem;
      color:#b8aca7;
    }
    li.zhongs{
      color:red;
    }
  }
  img{
    width:5.64rem ;
    height: 5.64rem;
    border-radius: 50%;
    margin-top: 1.3rem;
    position: absolute;
    left: 50%;
    top:0.54rem;
    z-index: 1;
    transform:translate(-50%) rotate(0deg);
    animation: abc 4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
  }
  @keyframes abc{
    100%{
      transform:translate(-50%) rotate(360deg)
    }
  }
</style>
