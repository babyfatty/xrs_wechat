<template>
	<div class="knowledgeReport reportSec">
      <div class="rtitle">个人知识点掌握情况</div>

    <div class="xcontainer">
      <div id="kpcontainer" style="min-width: 310px; max-width: 600px; height: 400px; margin: 0 auto"></div>
    </div>
    <div  class="xcontainer">个人能力分布
         <canvas id="kRadarChart" width="300" ref="kRadarChart" height="300"></canvas>
    </div>
    <div  class="xcontainer">
      <div class="tableTitle">知识点详情:</div>
      <xtable :xtable="dataall.knowledge_point_info"/>
    </div>
    <summarize :summarize="dataall.knowledge_point_info.conclusion"/>
  </div>
</template>
<script>
import summarize from './summarize'
import xtable from './xtable'
import Highcharts from 'highcharts'
// 在 Highcharts 加载之后加载功能模块
require('highcharts/highcharts-more');


export default {
  name: 'Knowledge',
  props:['dataall'],
  watch:{
    'dataall':function(val){
      let kpData = []
      let temArr = []
      let radarLable = []
      let radarValuemy = []
      let radarValueall = []
      let ctx = this.$refs.kRadarChart;

      val.knowledge_point_info.overall.forEach((ele,index)=>{
        temArr = []
        temArr.push(ele.kpid)
        temArr.push(ele.total_value)
        kpData.push(temArr)
        radarLable.push(ele.kpid)
        radarValueall.push(ele.mean_sr)
        radarValuemy.push(val.knowledge_point_info.personal[index].score_rate)
      })
      console.log(kpData)

      Highcharts.chart('kpcontainer',{
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false
          },
          credits:{
              enabled:false
          },
          title: {
              text: '知识点分数比重分布'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          series: [{
              type: 'pie',
              name: '知识点分数比重分布',
              data: kpData
          }]
      }) 
      var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: radarLable,
            datasets: [
                {
                    label: "平均正确率",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: radarValueall
                },
                {
                    label: "个人正确率",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: radarValuemy
                }
            ]
          }
      }) 
    }
  },
  mounted(){
    var ctx1 = this.$refs.KnowledgeChart;
    var ctx2 = this.$refs.skillsChart; 
   
  },
  components: {
    summarize,
    xtable
  }
}
</script>

<style scoped>
  .rtitle{
    background: #c9e5f5;
    color: #000;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
    margin: 10px 0;
    font-size: 17px;
  }
  .xcontainer{
    margin: 10px 0;
    color: #000;
  }
</style>