<template>
  <div class="ad">
    <!-- <a :href="dataall.ad">
      <img :src="dataall.ad.img">
    </a> -->
    {{dataall.ad.img}}
  </div>
</template>

<script>
export default {
  name: 'ad',
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