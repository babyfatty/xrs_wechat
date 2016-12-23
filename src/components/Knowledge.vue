<template>
	<div class="knowledgeReport reportSec">
      <div class="rtitle">个人知识点掌握情况</div>

    <div class="xcontainer">知识点分数比重分布
      <canvas id="KnowledgeChart" width="400" ref="KnowledgeChart" height="295"></canvas></div>
    <div  class="xcontainer">个人能力分布
      <canvas id="skillsChart" width="400" ref="skillsChart" height="295"></canvas></div>
    <div  class="xcontainer"><div class="tableTitle">知识点详情:</div>
       <xtable :xtable="dataall.knowledge_point_info"/>
       </div>
       <summarize :summarize="dataall.knowledge_point_info.conclusion.join(" ")"/>
  </div>

</template>

<script>
import summarize from './summarize'
import xtable from './xtable'

export default {
  name: 'Knowledge',
  props:['dataall'],
  mounted(){
    var ctx1 = this.$refs.KnowledgeChart;
    var ctx2 = this.$refs.skillsChart;

    var KnowledgeChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        }
    });
    var myRadarChart = new Chart(ctx2, {
        type: 'radar',
        data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
          datasets: [
              {
                  label: "My First dataset",
                  backgroundColor: "rgba(179,181,198,0.2)",
                  borderColor: "rgba(179,181,198,1)",
                  pointBackgroundColor: "rgba(179,181,198,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(179,181,198,1)",
                  data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                  label: "My Second dataset",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  pointBackgroundColor: "rgba(255,99,132,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255,99,132,1)",
                  data: [28, 48, 40, 19, 96, 27, 100]
              }
          ]
    }
    });  
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