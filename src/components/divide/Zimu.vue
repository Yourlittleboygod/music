<template>
  <div class="hello">
    <ul v-show="!pan">
      <li
       v-for="(v,i) in shuj"
        :key="i"
        :data-zidingyi='v.id'
        @touchstart="touchstartHander"
          @touchmove="touchmoveHander"
          @touchend="touchendHander"
        >{{v.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Zimu',
  data () {
    return {
      zu:''
    }
  },
  props:['shuju2','pan'],
  computed:{
    shuj:function(){
      if(this.shuju2 == ''){
        return
      }else{

      this.zu = this.shuju2
      // for(var i=0;i<this.shuju2.length;i++){
      //   if(this.shuju2[i].name.length!=1){
          this.zu[0].name = this.zu[0].name[0]
      //   }
      // }
      return this.zu
      }
    }
  },
  methods:{
    // dianji(i,r){
    //   this.$emit('shijian',i,r)
    // },
    touchstartHander:function(evt){
				this.startindex=evt.target.dataset.zidingyi;
        this.startY=evt.touches[0].clientY;
        this.$emit('shijian',this.startindex);
			},
			touchmoveHander:function(evt){
				var cha=evt.touches[0].clientY-this.startY;
				if(cha>0){
					var chaindex=Math.ceil(cha/15);
				}else{
					var chaindex=Math.floor(cha/15);
				}
				this.curindex=parseInt(this.startindex)+parseInt(chaindex);

				this.$emit('shijian',this.curindex);
			},
			touchendHander:function(){

			}
  }
}
</script>

<style scoped lang="less">
div{
  width: 100%;
}
  ul{
    position: fixed;
    bottom:0.66rem;
    right:0;
    li{
      padding:0.04rem;
      background: #191919;
    }
  }
</style>
