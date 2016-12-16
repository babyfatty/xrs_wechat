<template>
	<div>
    <basic-info /> 
    <ul id="reportList">
      <li v-for="report in reports">
        <router-link :to="{name:'report',params:{id:report.id}}">
          <div>{{report.name}}</div>
          <div>{{report.time}}</div>
          <div>{{report.score}}</div>
        </router-link>
      </li>
    </ul>
    <!-- <div v-on:click="clk">go book</div> -->
  </div>

</template>

<script>
import basicInfo from './basicInfo'
import VueRouter from 'vue-router'

export default {
  name: 'List',
  components: {
    basicInfo
  },
  data(){
    return{
      reports:[
        {id:"1",name:"a",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
        {id:"3",name:"c",time:"2016/12/12",score:"100"}
      ]
    }
  },
  methods: {
    clk(){ this.$router.push({name:"basic", params:{"id":1}}); }
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
  margin-top: 60px;
}
</style>