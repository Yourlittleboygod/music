<template>
  <div class="hello">
    <img src="../../../static/images/cd59c28a4c6d49bc8b4ecfcdffbc04f1_th.png" alt="" v-show="pan">
  </div>
</template>

<script>
export default {
  name: 'Tu',
  data () {
    return {
    }
  },
  props:['pan']
}
</script>

<style scoped lang="less">
  img{
    width: 100%;
    z-index: 15;
  }
</style>
