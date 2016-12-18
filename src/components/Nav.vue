<template>
	<div class="navBar">
      <router-link :to="{ name: 'overall' }" class="navTab"  activeClass= 'active' ><div v-on:click="scroll">overall</div></router-link>
      <router-link :to="{ name: 'score' }" class="navTab" activeClass='active' v-on:click="scroll"><div v-on:click="scroll">score</div></router-link>
      <router-link :to="{ name: 'knowledge' }" class="navTab" activeClass ='active' v-on:click="scroll"><div v-on:click="scroll">knowledge</div></router-link>
	</div>
</template>
<script>
import Router from 'vue-router'

export default {
  name: 'nav-bar',
  data(){
    return{
      isO:true,
      isS:false,
      isK:false,
      abc: this.$route.name
    }
  },
  computed: {
    // 如果路由有变化，会再次执行该方法
    isO(){
      if(this.abc==="overall"){
        return false        
      }
    }
  },
  mounted(){
    console.log( this.abc)
  },
  methods: {
    fetchData(e){
      alert(e)
    },
    scroll(){
      document.querySelector('body').scrollTop=240
    }
  }
}

</script>

<style scoped>
  .navBar{
    display: flex;
  }
  .navTab{
    display: block;
    flex:1;
    box-sizing:border-box;
    height: 35px;
    line-height: 35px;
    text-decoration: none;
    color: #666;
    background: #eff2f7;
    border-right: 1px solid #fff;
  }
  .navTab:hover{
    background:#eff2f7;
  }
  .navTab:last-child{
    border-right: none;
  }
  .active{
    border-bottom: 2px solid #20a0ff;
    color: #20a0ff;
  }
</style>