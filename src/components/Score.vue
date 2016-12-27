<template>
	<div class="scoreReport reportSec">
      <div class="rtitle">个人题型得分情况</div>
      <div class="xcontainer">
      
      <div id="spcontainer" style="min-width: 300px; max-width: 600px; height: 400px; margin: 0 auto"></div>
      </div>
      
      <div class="xcontainer">
         题型得分分布
         <canvas id="SocreRadarChart" width="300" ref="SocreRadarChart" height="300"></canvas>
      </div>
      
      <div class="xcontainer">
        <div class="tableTitle">题型详情:</div>
       <xtable :xtable="dataall.question_type_info"/>
      </div>
       <summarize :summarize="dataall.question_type_info.conclusion"/>
  </div>
</template>

<script>

import xtable from './xtable'
import summarize from './summarize'
import Highcharts from 'highcharts'
// 在 Highcharts 加载之后加载功能模块
import chart from 'chart.js'


export default {
  name: 'Score',
  props:['dataall'],
  mounted(){
  },
  watch:{
    'dataall':function(val){
      let kpData = []
      let temArr = []
      let ctx = this.$refs.SocreRadarChart;
      let radarLable = []
      let radarValuemy = []
      let radarValueall = []

      val.question_type_info.overall.forEach((ele,index)=>{
        temArr = []
        temArr.push(ele.tyid)
        temArr.push(ele.total_value)
        kpData.push(temArr)
        radarLable.push(ele.tyid)
        radarValueall.push(ele.mean_sr)
        radarValuemy.push(val.question_type_info.personal[index].score_rate)
      })
      Highcharts.chart('spcontainer',{
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false
          },
          credits:{
              enabled:false
          },
          title: {
              text: '题型分数比重分布'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          series: [{
              type: 'pie',
              name: '题型分数比重分布',
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
  components: {
    summarize,
    xtable
  }
}
</script>

<style>
.tableTitle{
  text-align: left;
  padding: 0 20px;
  color: #000;
  font-weight: bold;
}
.rtitle{
    background: #c9e5f5;
    color: #000;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
    margin: 10px 0;
  }
  .xcontainer{
    margin: 10px 0;
    color: #000;
  }
</style>
