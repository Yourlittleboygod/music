<template>
  <div class="hello">
    <Headers></Headers>
    <router-view></router-view>
  </div>
</template>

<script>
import Headers from '@/components/Headers'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components:{
    Headers
  }
}
</script>

<style scoped lang="less">
</style>
