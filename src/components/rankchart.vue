<template>
	<div class="rankContainer">
		<h3>总体排名分布</h3>
		<div class="rankchart">
			<div class="rc fair" v-bind:style="{width:fairrank}">
				<div class="subrc"></div>
				<span class="av">平均线</span>
			</div>
			<div class="rc good" v-bind:style="{width:goodrank}">
				<div class="subrc"></div>
				<span class="gd">优秀线</span>
			</div>
			<div class="rc your" v-bind:style="{width:myrank}">
				<span class="yr">你在这</span>
			</div>
		</div>
		<div class="subranktitle">
			你战胜了{{myrank}}的同学！
		</div>
	</div>
</template>

<script>
	export default {

		props:['dataall'],
		name:"rankchart",
		computed:{
			myrank:function(){
				let pct = this.dataall.overall_info.user_percent*1
				return (pct*100).toFixed(2)+'%'
			},
			goodrank:function(){
				let pct = 1-this.dataall.overall_info.high_percent*1
				return (pct*100).toFixed(2)+'%'
			},
			fairrank:function(){
				let pct = this.dataall.overall_info.mean_percent*1
				return (pct*100).toFixed(2)+'%'
			}
		}
	}
</script>

<style scoped>
	h3 {
		margin: 0;
		margin-bottom: 40px;
		color: #000;
		font-size: 17px;
	}
	.rankchart{
	    height: 40px;
	    background: #eee;
	    margin: 0 auto;
	    position: relative;
	    width: 80%;
	    margin-bottom: 18px;
	}
	.rc{
	    height: 58px;
	    position: absolute;
	    bottom: -9px;
	}
	.goodMore{
		width: 30%;
	}
	.fair{
		border-right: 2px solid #333;
	}
	.good{
		right: 0;
		border-left: 2px solid #333;
	}
	.your{
		border-right: 2px solid #2db7f5;
	}
	.subrc{
	    height: 40px;
	    margin: 9px 0;
	}
	.fair .subrc{
	    background: rgba(255, 99, 132, 1);
	}
	.good .subrc{
	    background: rgb(144, 237, 125);

	}
	.av{
		position: absolute;
	    bottom: -20px;
	    right: -4px;
	    color: #000;
	    font-size: 13px;
	}
	.gd{
		position: absolute;
	    bottom: -20px;
	    left: -4px;
	    color: #000;
	    font-size: 13px;
	}
	.yr{
		position: absolute;
	    top: -20px;
	    right: -24px;
	    color: #2db7f5;
	    font-weight: bold;
	}
	.rankContainer{
		padding: 20px 0;
	}
	.subranktitle{
		color: #000;
		width: 80%;
	    text-align: center;
	    margin: 0 auto;
	    position: relative;
		top: 18px;
	}
</style>