<template>
   <table class="rd-table">
    <thead class='rd-table-thead'>
      <tr class='rd-table-th'>
        <td class='rd-table-td'>{{title}}</td>
        <td class='rd-table-td'>得分</td>
        <td class='rd-table-td'>平均得分</td>
      </tr>
    </thead>
    <tbody>
      <tr class='rd-table-th' v-for="item in xData">
        <td class='rd-table-td'>{{item.tyid}}</td>
        <td class='rd-table-td'>{{item.score_rate}}</td>
        <td class='rd-table-td'>{{item.mean_sr}}</td>
      </tr>
    </tbody>
   </table>
</template>

<script>
export default {
  name: 'xtable',
  props:['xtable'],
  data(){
    return{
      xData:{},
      title:{},
      dTable:this.xtable
    }
  },
  watch:{
    'xtable':function(val){
      let p = val.personal
      let o = val.overall
      let temArr = []
      p.forEach((ele,index)=>{
          let value = o[index].total_value
          if(!!ele.tyid){
            temArr.push({
              tyid:ele.tyid,
              score_rate:(ele.score_rate*value).toFixed(2),
              mean_sr:(o[index].mean_sr*value).toFixed(2)
            })
            this.title="题型"
          }else{
            temArr.push({
              tyid:ele.kpid,
              score_rate:(ele.score_rate*value).toFixed(2),
              mean_sr:(o[index].mean_sr*value).toFixed(2)
            })
            this.title="知识点"
          }
      })
      this.xData = temArr
    }
  },
  computed:{
    data:function(){
      let p = this.xtable.personal
      let o = this.xtable.overall
      let temArr = []
      p.forEach(function(ele,index){
          let value = o[index].total_value
          temArr.push({
            tyid:ele.tyid,
            score_rate:(ele.score_rate*value).toFixed(2),
            mean_sr:(o[index].mean_sr*value).toFixed(2)
          })
      })
      return temArr
    }
  }
}
</script>

<style scoped>
  .rd-table {
    width: 100%;
    max-width: 100%;
    text-align: left;
    border-radius: 6px;
  }
  .tableTitle{
    text-align: left;
    padding: 0 20px;
  }
  .rd-table-thead{
    background: #eff2f7;
  }
  .rd-table-th {
    color: rgba(0,0,0,.870588);
    height: 3rem;
    border-bottom: 1px solid #e9e9e9;
  }
  tbody .rd-table-td{
      background: #f7fafc;
  }
  .rd-table-td {
      position: relative;
      text-align: left;
      text-align: center;
      padding: 0 .5rem;
      font-size: .8rem;
  }
</style>