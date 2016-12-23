<template>
	<div id="appReport" ref="report">
  <s-header></s-header>
  <div class="reportContainer">
    <basic :dataall="dataAll"/>
    <overall :dataall="dataAll"/> 
    <knowledge :dataall="dataAll"/> 
    <score :dataall="dataAll"/> 
    <detailScore :dataall="dataAll"/>
    <tComment :dataall="dataAll"/>
    <ad :dataall="dataAll"/>
    <!-- <nav-bar></nav-bar> -->
    <!-- <router-view></router-view> -->
  </div>
	</div>
</template>

<script>
import Navbar from '../components/nav'
import header from '../components/header'
import basic from '../components/basic'
import knowledge from '../components/knowledge'
import score from '../components/score'
import overall from '../components/overall'
import tComment from '../components/tComment'
import detailScore from '../components/detailScore'
import ad from '../components/ad'

export default {
  name: 'Report',
  components: {
  	'nav-bar':Navbar,
    's-header':header,
    basic,
    score,
    knowledge,
    overall,
    tComment,
    detailScore,
    ad
  },
  data(){
    return{
      dataAll : {}
    }
  },
  created(){
    this.$http.get('http://trsapi.xesfun.com/front/report/data',{params:{id:this.$route.params.id}}).then((response) => {
          // success callback
          console.log(response)
          this.dataAll = response.body.content
        }, (response) => {
          // error callback
        });
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.reportContainer{
      margin: 10px 10px 0;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 0 #f2f4f5;
    background: #fff;
}
</style>