<template>
  <div class="hello">
    <Tobu></Tobu>
    <Gedans></Gedans>
  </div>
</template>

<script>
import Tobu from '@/components/Tobu'
import Gedans from '@/components/Gedans'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    Tobu,
    Gedans
  }
}
</script>

<style scoped lang="less">

</style>
