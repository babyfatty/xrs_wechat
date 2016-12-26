<template>
  <div>
   <div class="rtitle">个人小分分析</div>
   <table class="rd-table">
    <thead class='rd-table-thead'>
      <tr class='rd-table-th'>
        <td class='rd-table-td'>题号</td>
        <td class='rd-table-td'>分值</td>
        <td class='rd-table-td'>你的得分</td>
        <td class='rd-table-td'>平均得分</td>
      </tr>
    </thead>
    <tbody>
      <tr class='rd-table-th' v-for="data in dataall.question_detail_info">
        <td class='rd-table-td'>{{data.index}}</td>
        <td class='rd-table-td'>{{data.value}}</td>

        <td class='rd-table-td' v-if="data.user_score*1<=data.mean_score*1">{{data.user_score}}</td>
        
        <td class='rd-table-td' v-else v-bind:style="{fontWeight:900,color:'#228B22'}">{{data.user_score}}</td>
        
        <td class='rd-table-td'>{{data.mean_score.toFixed(2)}}</td>
      </tr>
    </tbody>
   </table>
  </div>
</template>

<script>
export default {
  name: 'detailScore',
  props:['dataall']
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
    height: 1.5rem;
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