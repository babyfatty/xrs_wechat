<template>
	<div>
  <div>overall</div>
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

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0-10", "10-40", "40-60", "60-80", "80-90", "90-100"],
            datasets: [{
                label: '# 当前分数段人数',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>