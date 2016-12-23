<template>
	<div class="overallReport reportSec">
  <div class="rtitle">年级总体情况</div>  
  <div  class="xcontainer">
    <div><i class="demo"></i>你所在的分数段</div>
    <div style="height:400px;min-width:300px" id="container"></div> 
  <canvas id="myChart" width="400" ref="myChart" height="400"></canvas>
  </div>
  <div  class="rcontainer">
    <div class="scoreDes">
    <div class="averageScore scoreDesDetail"><div class="scroeTitle">本次考试平均分</div><div class="scoreSub">{{dataall.overall_info.mean_score}}</div></div>
    <div class="highestScore scoreDesDetail"><div class="scroeTitle">本次考试最高分</div><div class="scoreSub">{{dataall.overall_info.highest_score}}</div></div>
    <div class="description"><div class="desTitle">试卷说明:</div><div class="desDetail">{{dataall.overall_info.statement}}</div></div>
  </div>
  </div>
  <summarize  :summarize='dataall.overall_info.conclusion'/>
  </div>
</template>

<script>
import Chart from 'chart.js'
import summarize from './summarize'
var Highcharts = require('highcharts');

// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);

export default {
  name: 'overall',
  props:['dataall'],  
  created(){
    var overalldata = this.dataall;
    console.log(this)
    // console.log(overalldata)
  },
  mounted(){
    var xData=this.dataall
    console.log(xData)
    // xData.score_segments.forEach(function(score){
    //   xData.push(score.end_point)
    // })
    var ctx = this.$refs.myChart;
    Highcharts.chart('container',{
        title: {
            text: '混合图表'
        },
        xAxis: {
            categories: xData
        },
        labels: {
            items: [{
                html: '水果销量',
                style: {
                    left: '100px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4],
            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 50, // 10 pixels down from the top
              x:0,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
            }
        }, {
            type: 'spline',
            name: '平均值',
            data: [3, 2, 1, 3, 4],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }],
        
    });

  },
  components: {
    summarize
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
.scroeTitle,.desTitle{
  color: #000;
  font-weight: bold;
}

.rtitle{
    background: #c9e5f5;
    color: #000;
    height: 35px;
    line-height: 35px;
    margin: 10px 0;
    font-weight: bold;
  }
  .xcontainer{
    margin: 10px 0;
  }
</style>