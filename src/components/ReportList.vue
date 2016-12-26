<template>
	<div>
    <s-header></s-header>
    <div class="listContainer">
      <basic-info :uname='name'/> 
      <div id="reportList">
        <h3 class="reportTitle">报告列表</h3>
        <router-link :to="{name:'overall',params:{eid:report.eid}}" class="link"  v-bind:class="{ active: report.viewed }"  v-for="report in reports"> 
        <div class="reportSec">
          <h3 class="rName">
            {{report.exam_title}}
          </h3>
          <div class="rTime">{{report.exam_date.split(' ')[0]}}</div>
          <div class="reportBottom">
            <div class="rScore">得分 <span>{{report.total_score}}</span></div>
            <div class="rToDetail">点击查看详细报告</div>
          </div>
        </div>
        </router-link>
        <div class="shareInfo">
          <img src="../assets/Wechatshare.png">
        </div>
    </div>
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
      reports: [],
      name:''
    }
  },
  created(){
    this.$http.get('http://trsapi.xesfun.com/front/user/searchByStudentID',{params:{id:this.$route.params.uid}}).then((response) => {
          // success callback
          console.log(response)
          this.reports = response.body.content
        }, (response) => {
          // error callback
        });
  },
  watch:{
    'reports':function(res){
      this.name = res[0].user_name
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
    /*border: 1px solid #ddd;*/
    border-radius: 4px;
    box-shadow: 0 1px 0 #f2f4f5;
    /*background: #fff;*/
  }
  #reportList{
    /*background: #f7f7f7;*/

  }
  .link{
    display: block;
    text-decoration: none;
    padding: 6px;

  }
  .link.active .reportSec{
    background: rgba(255,255,255,0.6);
  }
  .link.active .rName{
     color: #999;
  }
    .link.active .rScore{
     color: #999;
  }
    .link.active .rScore span{
     color: #999;
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
    box-shadow:0px 2px 5px #999;
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
  .reportTitle{
    margin: 0;
    padding-top: 6px;
  }
  .shareInfo{
    background: #fff;
    color: #000;
    font-size: 12px;
    text-align: left;
    padding: 10px;
    font-weight: 900;
  }
</style>