<template>
	<div class="overallReport reportSec">
  <div><i class="demo"></i>你所在的分数段</div>
  <canvas id="myChart" width="400" ref="myChart" height="400"></canvas>
  <div class="scoreDes">
    <div class="averageScore scoreDesDetail"><div class="scroeTitle">本次考试平均分</div><div class="scoreSub">99分</div></div>
    <div class="highestScore scoreDesDetail"><div class="scroeTitle">本次考试最高分</div><div class="scoreSub">120分</div></div>
    <div class="description"><div class="desTitle">试卷说明:</div><div class="desDetail">没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的没有什么好说的</div></div>
  </div>
  <t-comment />
  </div>
</template>

<script>
import Chart from 'chart.js'
import tComment from './tComment'

export default {
  name: 'Overall',
  mounted(){
    var ctx = this.$refs.myChart;

    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0-10", "10-40", "40-60", "60-80", "80-90", "90-100"],
            datasets: [{
              label: '#区域代表人数分布',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ]
            }]
        },
        options: {
          legend: {display:false,labels:{fontColor:"rgba(255, 99, 132, 1)", fontSize: 18}},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltip:{
              datasetIndex: 1,
            }
        }
    });
  },
  components: {
    tComment
  }
}
</script>

<style>
.demo{
  display: inline-block;
  height: 20px;
  width: 30px;
  background: rgba(255, 99, 132, 1);
}
.scoreDes{
  background: #f7fafc;
}
.scoreDesDetail{
  display: flex;
  height: 40px;
  line-height: 30px;
  padding: 3px 20px;
  box-sizing:border-box;
  border-bottom: 2px solid #fff;
}
.description{
  padding: 3px 20px;
  border-bottom: 2px solid #fff;
  background: #fff;
}
.scroeTitle{
  flex:1;
  text-align: left;
  border-right: 2px solid #fff;
}
.scoreSub{
  flex:1;
  text-align: left;
  box-sizing:border-box;
  padding: 0 5px;
}
.desTitle{
  border-bottom: 2px solid #fff;
  text-align: left;
  height: 30px;
  line-height: 30px;
}
.desDetail{
  line-height: 30px;
  text-align: left;
  background: #f7fafc;
  
}

</style>