<template>
	<div>
    <s-header></s-header>
    <div class="listContainer">
      <basic-info /> 
      <div id="reportList">
        <div class="reportLink">
          <div class="reportInfo rName">考试名称</div>
          <div class="reportInfo rTime">考试时间</div>
          <div class="reportInfo rScore">分数</div>
         </div>
        <router-link :to="{name:'overall',params:{id:report.id}}" class="link" v-for="report in reports"> 
         <div class="reportLink">
          <div class="reportInfo rName">{{report.name}}</div>
          <div class="reportInfo rTime">{{report.time}}</div>
          <div class="reportInfo rScore">{{report.score}}</div>
         </div>
        </router-link>
      </ul>
    </div>
    <!-- <div v-on:click="clk">go book</div> -->
  </div>

</template>

<script>
import basicInfo from './basicInfo'
import VueRouter from 'vue-router'
import header from './header'
export default {
  name: 'List',
  components: {
    basicInfo,
    's-header':header
  },
  data(){
    return{
      reports:[
        {id:"1",name:"a",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
        {id:"2",name:"b",time:"2016/12/12",score:"100"},
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

<style scoped>
  .listContainer{
    margin: 10px 10px 0;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 0 #f2f4f5;
    background: #fff;
  }
  #reportList{
    background: #f7f7f7;

  }
  .link{
    display: block;
    text-decoration: none;
    color: #666;
  }
  .link:hover{
    background: #eee
  }
  .link:active{
    /*background: rgba(0,0,0,0.7)*/
  }
  .reportLink{
    display: flex;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #fff;
  }
  .reportInfo{
    flex: 1;
  }
  .rTime{
    
  }
  .rName{

  }
  .rScore{
    
  }
</style>