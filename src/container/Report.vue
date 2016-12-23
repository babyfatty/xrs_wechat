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
      dataAll : 
      {"teacher_review":{"review_question_type":"","teacher_name":"学而思 ","teacher_head_icon":"http:\/\/xesfun.oss-cn-qingdao.aliyuncs.com\/xesfun\/bean\/figure\/16.jpg","review_overall":"总分评语总分评语总分评语总分评","review_knowledge":"知识点评语知识点评语知识点评语"},"overall_info":{"statement":"本次考试难度适中，吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦","mean_score":71.0,"mean_percent":0.217228,"high_percent":0.7,"conclusion":"你太棒了！","user_percent":1.0,"score_segments":[{"count":210,"end_point":10,"start_point":0,"ssid":64,"eid":1},{"count":1,"end_point":50,"start_point":10,"ssid":65,"eid":1},{"count":5,"end_point":60,"start_point":50,"ssid":66,"eid":1},{"count":12,"end_point":70,"start_point":60,"ssid":67,"eid":1},{"count":94,"end_point":80,"start_point":70,"ssid":68,"eid":1},{"count":294,"end_point":90,"start_point":80,"ssid":69,"eid":1},{"count":448,"end_point":100,"start_point":90,"ssid":70,"eid":1}],"highest_score":100},"question_detail_info":[{"user_score":2,"mean_score":1.5412,"index":1,"value":2},{"user_score":2,"mean_score":1.47566,"index":2,"value":2},{"user_score":2,"mean_score":1.59363,"index":3,"value":2},{"user_score":2,"mean_score":1.23783,"index":4,"value":2},{"user_score":2,"mean_score":1.41386,"index":5,"value":2},{"user_score":2,"mean_score":1.57678,"index":6,"value":2},{"user_score":2,"mean_score":1.25655,"index":7,"value":2},{"user_score":2,"mean_score":1.59363,"index":8,"value":2},{"user_score":2,"mean_score":1.58427,"index":9,"value":2},{"user_score":2,"mean_score":1.55618,"index":10,"value":2},{"user_score":2,"mean_score":1.50562,"index":11,"value":2},{"user_score":2,"mean_score":1.51685,"index":12,"value":2},{"user_score":3,"mean_score":2.24719,"index":13,"value":3},{"user_score":2,"mean_score":1.32491,"index":14,"value":2},{"user_score":2,"mean_score":1.17697,"index":15,"value":2},{"user_score":2,"mean_score":1.27341,"index":16,"value":2},{"user_score":2,"mean_score":1.3015,"index":17,"value":2},{"user_score":2,"mean_score":0.820225,"index":18,"value":2},{"user_score":2,"mean_score":1.39888,"index":19,"value":2},{"user_score":2,"mean_score":1.11236,"index":20,"value":2},{"user_score":2,"mean_score":1.40918,"index":21,"value":2},{"user_score":2,"mean_score":1.58333,"index":22,"value":2},{"user_score":2,"mean_score":1.26311,"index":23,"value":2},{"user_score":2,"mean_score":1.37266,"index":24,"value":2},{"user_score":2,"mean_score":1.35206,"index":25,"value":2},{"user_score":2,"mean_score":1.54963,"index":26,"value":2},{"user_score":2,"mean_score":1.58333,"index":27,"value":2},{"user_score":8,"mean_score":5.98876,"index":28,"value":8},{"user_score":8,"mean_score":5.98876,"index":29,"value":8},{"user_score":5,"mean_score":3.84363,"index":30,"value":5},{"user_score":6,"mean_score":3.50936,"index":31,"value":6},{"user_score":5,"mean_score":3.67509,"index":32,"value":5},{"user_score":6,"mean_score":3.99157,"index":33,"value":6},{"user_score":7,"mean_score":5.17509,"index":34,"value":7}],"knowledge_point_info":{"personal":[{"score_rate":1.0,"prid":16024,"kpid":"力和运动","eid":1},{"score_rate":1.0,"prid":16024,"kpid":"力学基本实验","eid":1},{"score_rate":1.0,"prid":16024,"kpid":"力学基础","eid":1},{"score_rate":1.0,"prid":16024,"kpid":"压力压强","eid":1},{"score_rate":1.0,"prid":16024,"kpid":"浮力","eid":1},{"score_rate":1.0,"prid":16024,"kpid":"质量密度","eid":1}],"conclusion":["","棒哭了","你太棒了！","棒哭了","棒哭了"],"overall":[{"mean_sr":0.725522,"kpid":"力和运动","eid":1,"total_value":7},{"mean_sr":0.748595,"kpid":"力学基本实验","eid":1,"total_value":16},{"mean_sr":0.731006,"kpid":"力学基础","eid":1,"total_value":14},{"mean_sr":0.686684,"kpid":"压力压强","eid":1,"total_value":37},{"mean_sr":0.695981,"kpid":"浮力","eid":1,"total_value":26},{"mean_sr":0.584894,"kpid":"质量密度","eid":1,"total_value":6}]},"ad":{"redirect_url":"http:\/\/baidu.com","img":"http:\/\/xesfun.oss-cn-qingdao.aliyuncs.com\/xesfun\/storage\/1479371481529.jpg"},"question_type_info":{"personal":[{"tyid":"作图题","score_rate":1.0,"prid":16024,"eid":1},{"tyid":"填空题","score_rate":1.0,"prid":16024,"eid":1},{"tyid":"实验题","score_rate":1.0,"prid":16024,"eid":1},{"tyid":"计算题","score_rate":1.0,"prid":16024,"eid":1},{"tyid":"选择题","score_rate":1.0,"prid":16024,"eid":1}],"conclusion":["你太棒了！","你太棒了！","你太棒了！","棒哭了"],"overall":[{"tyid":"作图题","mean_sr":0.747503,"eid":1,"total_value":6},{"tyid":"填空题","mean_sr":0.651348,"eid":1,"total_value":25},{"tyid":"实验题","mean_sr":0.718926,"eid":1,"total_value":32},{"tyid":"计算题","mean_sr":0.705128,"eid":1,"total_value":13},{"tyid":"选择题","mean_sr":0.743836,"eid":1,"total_value":24}]},"basic_info":{"user_total_score":100,"user_name":"周轶伦","exam_date":"2016-12-23 10:55:34","user_rank":1,"exam_title":"哈哈哈","exam_total_people":1068,"exam_total_score":100}}
    }
  },
  created(){
    // this.$http.get('http://trsapi.xesfun.com/front/report/data',{params:{id:this.$route.params.id}}).then((response) => {
    //       // success callback
    //       console.log(response)
    //       this.dataAll = response.body.content
    //     }, (response) => {
    //       // error callback
    //     });
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