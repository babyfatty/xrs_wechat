<template>
	 <div class="basicInfoSec">
	 	<basic-info :uname='dataall.basic_info.user_name'/>
		<div class="infoSec"><div class="title">考试名称：</div><div class="detail">{{dataall.basic_info.exam_title}}</div></div>
		<div class="infoSec"><div class="title">考试时间：</div><div class="detail" >{{dataall.basic_info.exam_date.split(' ')[0]}}</div></div>
		<div class="infoSec"><div class="title">个人分数：</div><div class="detail">{{dataall.basic_info.user_total_score}}/{{dataall.basic_info.exam_total_score}}</div></div>
		<div class="infoSec"><div class="title">个人排名：</div><div class="detail">{{dataall.basic_info.user_rank}}/{{dataall.basic_info.exam_total_people}}</div></div>
    <div class="infoSec"><div class="title">个人奖项：</div><div class="detail">{{dataall.basic_info.user_prize}}</div></div>
	 </div>
</template>

<script>
import basicInfo from './basicInfo'

export default {
  props:['dataall'],
  
  name: 'Basic',
  components: {
  	basicInfo
  }
}
</script>

<style scoped>
  .basicInfoSec{
    background: #fff;
  }
  .infoSec{
    display: flex;
    height: 35px;
    line-height: 35px;
    box-sizing:border-box;
    background: #f7fafc;
    border-bottom: 2px solid #fff;
  }
  .infoSec:last-child{
    border-bottom: none;
  }
  .title{
    flex:1;
    text-align: right;
  }
  .detail{
    flex:2;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>