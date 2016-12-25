<template>
	<div class="overallReport reportSec">
  <div class="rtitle">年级总体情况</div>  
  <div  class="xcontainer">
    <div><i class="demo"></i>你所在的分数段</div>
    <div style="height:400px;min-width:200px" id="container"></div> 
  </div>
  <div  class="rcontainer">
    <div class="scoreDes">
    <div class="averageScore scoreDesDetail"><div class="scroeTitle">本次考试平均分</div><div class="scoreSub">{{dataall.overall_info.mean_score}}</div></div>
    <div class="highestScore scoreDesDetail"><div class="scroeTitle">本次考试最高分</div><div class="scoreSub">{{dataall.overall_info.highest_score}}</div></div>
    <rankchart :dataall="dataall"/>
    <trankchart :dataall="dataall"/>
    <div class="description"><div class="desTitle">试卷说明:</div><div class="desDetail">{{dataall.overall_info.statement}}</div></div>
  </div>
  </div>
  <summarize  :summarize='dataall.overall_info.conclusion'/>
  </div>
</template>

<script>
import summarize from './summarize'
import rankchart from './rankchart'
import trankchart from './trankchart'

var Highcharts = require('highcharts');

// 在 Highcharts 加载之后加载功能模块

export default {
  name: 'overall',
  props:['dataall'],  
  watch: {
    'dataall':function(){
      var xData=this.dataall.overall_info
      var xArr = []
      var yArr = []
      var myscore = this.dataall.basic_info.user_total_score
      xData.score_segments.forEach(function(score){
        xArr.push(score.start_point+'-'+score.end_point)
        if((myscore*1<=score.end_point*1)&&(myscore*1>score.start_point*1)){
          yArr.push({y:score.count,color:'#FF6384'})
        }else{
          yArr.push(score.count)
        }
      })
      console.log(yArr)
      var ctx = this.$refs.myChart;
      Highcharts.chart('container',{
          title: {
              text: ''
          },
          xAxis: {
              categories: xArr,
              title: {
                text: '分数段'
              }
          },
          yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: '人数',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Primary yAxis
            labels: {
                format: '{value}人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            } 
        }],
          labels: {
              items: [{
                  html: '',
                  style: {
                      left: '100px',
                      top: '18px',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                  }
              }]
          },
          series: [{
              type: 'column',
              name: '各分数段人数',
              data: yArr
              
          }, {
              type: 'spline',
              name: '各分数段人数',
              data: yArr,
              marker: {
                  lineWidth: 2,
                  lineColor: Highcharts.getOptions().colors[3],
                  fillColor: 'white'
              },
              dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: '{point.y:.0f}', // one decimal
                y: 0, // 10 pixels down from the top
                x:0,
                style: {
                    fontSize: '12px',
                    fontFamily: 'proxima-nova, sans-serif'
                }
              }
          }],
          
      });
    }
  },
  components: {
    summarize,
    rankchart,
    trankchart
  }
}
</script>

<style>
.demo{
  display: inline-block;
  height: 15px;
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
  padding: 5px;
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