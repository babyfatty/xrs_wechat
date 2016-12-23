<template>
   <table class="rd-table">
    <thead class='rd-table-thead'>
      <tr class='rd-table-th'>
        <td class='rd-table-td'>题型</td>
        <td class='rd-table-td'>我的正确率</td>
        <td class='rd-table-td'>平均正确率</td>
      </tr>
    </thead>
    <tbody>
      <tr class='rd-table-th'>
        <td class='rd-table-td'>数据1</td>
        <td class='rd-table-td'>数据2</td>
        <td class='rd-table-td'>数据3</td>
      </tr>
      <tr class='rd-table-th'>
        <td class='rd-table-td'>数据4</td>
        <td class='rd-table-td'>数据5</td>
        <td class='rd-table-td'>数据6</td>
      </tr>
    </tbody>
   </table>
</template>

<script>
export default {
  name: 'xtable',
  props:['dataall'],
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