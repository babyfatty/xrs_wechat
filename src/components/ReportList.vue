<template>
	<div>
    <s-header></s-header>
    <div class="listContainer">
      <basic-info /> 
      <div id="reportList">
        <router-link :to="{name:'overall',params:{id:report.id}}" class="link" v-for="report in reports"> 
        <div class="reportSec">
          <h3 class="rName">
            {{report.name}}
          </h3>
          <div class="rTime">{{report.time}}</div>
          <div class="reportBottom">
            <div class="rScore">得分 <span>{{report.score}}</span></div>
            <div class="rToDetail">点击查看详细报告</div>
          </div>
        </div>
         <!-- <div class="reportLink">
          <div class="reportInfo rName">{{report.name}}</div>
          <div class="reportInfo rTime">{{report.time}}</div>
          <div class="reportInfo rScore">{{report.score}}</div>
         </div> -->
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
        {id:"1",name:"南京学而思四年级考试英语部分",time:"2016/12/12",score:"100"},
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
    padding: 6px;

  }
  .link:hover{
    /* background: #eee */
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
  .reportSec{
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    color: #000;
    text-align: left;
  }
  .reportInfo{
    flex: 1;
  }
  .rTime{
    color: #999;
    padding: 5px 0;
  }
  .rName{
    margin: 0
  }
  .reportBottom{
    display: flex;
    margin-top: 15px;
    font-weight: bold;
  }
  .rScore{
    width: 30%;
    text-align: left;
  }
  .rScore span{
    font-weight: normal;
    color: #ff2741;
  }

  .rToDetail{
    width: 70%;
    text-align: right;
    color: #999;
  }
</style>