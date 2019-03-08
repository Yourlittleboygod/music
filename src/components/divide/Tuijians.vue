<template>
  <div class="hello" v-show="!pan">
    <h2>热门歌单推荐</h2>
    <ul>
      <li v-for="(v,i) in shuju" :key="i" @click="chumo(v.content_id)">
        <img :src="v.cover" alt="">
        <div>
          <h3>{{v.title}}</h3>
          <p>{{v.username}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tuijians',
  data () {
    return {
    }
  },
  props:['shuju',"pan"],
  methods:{
    chumo(v){
      this.$router.push({path:'/Xingqing',query:{ids:v,ying:0}})
    }
  }
}
</script>

<style scoped lang="less">
  .hello{
    background: #252525;
    h2{
      height: 0.94rem;
      line-height: 0.94rem;
      width: 100%;
      text-align: center;
      font-size: 0.34rem;
      color:#c8ac23;
    }
    ul{
      li{
        padding:0.19rem 0;
        display: flex;
        flex-direction: row;
        img{
          width: 1.26rem;
          height: 1.26rem;
          margin:0 0.4rem;
        }
        div{
          width: 5rem;
          h3{
            line-height: 0.70rem;
            color:#fff;
            font-size: 0.4rem;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
          p{
            font-size: 0.4rem;
            color:#626260;
            line-height: 0.5rem;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
          }
        }
      }
    }
  }
</style>
