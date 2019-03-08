<template>
  <div class="hello6">
    <Yytop></Yytop>
    <Names></Names>
    <Caozuo></Caozuo>
    <div class="beijing"  :style="'background-image:url(' +this.$store.state.songlist[this.$store.state.zhi].songcover +');background-size: 100% 100%;'">
    </div>
  </div>
</template>

<script>
import Yytop from '@/components/Bofang/Yytop'
import Names from '@/components/Bofang/Names'
import Caozuo from '@/components/Bofang/Caozuo'
export default {
  name: 'Yingyue',
  data () {
    return {
    }
  },
  components:{
    Yytop,
    Names,
    Caozuo
  }
}
</script>

<style scoped lang="less">
  .beijing{
    width: 100%;
    height:100vh;
    position: absolute;
    left: 0;
    top:0;
    filter:blur(15px);
    z-index: -1;
  }
</style>
