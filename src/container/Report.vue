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

  </div>
	</div>
</template>

<script>
import Navbar from '../components/nav'
import header from '../components/header'
import basic from '../components/basic'
import rankchart from '../components/rankChart'
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
    ad,
    rankchart
  },
  data(){
    return{
      dataAll : {
        ad: {
          img:'',
          redirect_url:''
        },
        basic_info:{
          user_total_score:'',
          exam_date:'',
          exam_title:"",
          exam_total_people:"",
          exam_total_score:"",
          user_name:"",
          user_prize:"",
          user_rank:"",
          user_total_score:"" 
        },
        knowledge_point_info:{
          "conclusion":"",
          "overall":"",
          "personal":""
        },
        overall_info:{
          conclusion:"",
          high_percent:"",
          highest_score:"",
          mean_percent:"",
          mean_score:"",
          score_segments:[],
          statement:"",
          user_percent:""
        },
        question_detail_info:[],
        question_type_info:{
          "conclusion":"",
          "overall":"",
          "personal":""
        },
        teacher_review:{
          review_knowledge:"",review_overall:"",review_question_type:"",teacher_head_icon:"",teacher_name:""
        },
        teacher_oriented_info:{
          flag:"",
          high_percent:"",
          mean_percent:"",
          total_people:"",
          user_percent:"",
          user_rank:"",
          teacher_name:""
        }
      },
      bodyTitle:""
    }
  },
  created(){
    this.$http.get('http://trsapi.xesfun.com/front/report/data',{params:{sid:this.$route.params.sid,eid:this.$route.params.eid}}).then((response) => {
          // success callback
          if(response.body.result_code===0){
            this.dataAll = response.body.content 
          }
        }, (response) => {
          // error callback
        });
  },
  watch:{
    'dataAll':function() {
      document.title = this.dataAll.basic_info.user_name+'在'+this.dataAll.basic_info.exam_title+'中战胜了'+this.dataAll.overall_info.user_percent.toFixed(3)*100+'%的同学！';
      var i = document.createElement('iframe');
      i.src = '//m.baidu.com/favicon.ico';
      i.style.display = 'none';
      i.onload = function() {
        setTimeout(function(){
          i.remove();
        }, 9)
      }
      document.body.appendChild(i);
    }
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