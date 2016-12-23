<template>
	 <div class="basicInfoSec">
	 	<basic-info/>
		<div class="infoSec"><div class="title">考试名称：</div><div class="detail">{{examName}}</div></div>
		<div class="infoSec"><div class="title">考试时间：</div><div class="detail" >{{examTime}}</div></div>
		<div class="infoSec"><div class="title">个人分数：</div><div class="detail">{{examsocre}}/{{totalScore}}</div></div>
		<div class="infoSec"><div class="title">个人排名：</div><div class="detail">{{examRank}}/{{totalNum}}</div></div>
    <div class="infoSec"><div class="title">个人奖项：</div><div class="detail">{{prize}}</div></div>
	 </div>
</template>

<script>
import basicInfo from './basicInfo'

export default {
  data(){
  	return{
  		examName : "exam1",
  		examsocre :"120",
  		examTime : "2016/12/12",
  		examRank : "1",
  		totalNum : "200"
  	}
  },
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
  }
</style>