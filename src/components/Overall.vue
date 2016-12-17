<template>
	<div>
  <div>overall</div>
  <div><i class="demo"></i>你所在的分数段</div>
  <canvas id="myChart" width="400" ref="myChart" height="400"></canvas>
  <div class="scoreDes">
    <div class="averageScore">99分</div>
    <div class="highestScore">120分</div>
    <div class="description">本次考试非常简单，没上88的去幼儿园报名</div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>