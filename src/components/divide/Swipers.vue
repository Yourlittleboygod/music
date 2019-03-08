<template>
  <div class="hello">
    <swiper :options="swiperOption" v-if="this.zu.length>0" v-show="!pan">
      <swiper-slide v-for="(v,i) in zu" :key="i"><img :src="v.picUrl" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swipers',
  data () {
    return {
      swiperOption: {
        loop:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
  props:['zu','pan']
}
</script>

<style scoped lang="less">
  img{
    width: 100%;
    height: 3.12rem;
  }
</style>
