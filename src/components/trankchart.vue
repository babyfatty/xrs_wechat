<template v-if="show">
	<div class="rankContainer">
		<h3>同门排名分布</h3>
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
			在老师名下排名第{{rank}}
		</div>
		<div class="subranktitle">
			战胜了{{myrank}}的同学！
		</div>
	</div>
</template>

<script>
	export default {
		props:['dataall'],
		name:"trankchart",
		computed:{
			myrank:function(){
				let pct = this.dataall.teacher_oriented_info.user_percent*1
				return pct.toFixed(3)*100+'%'
			},
			goodrank:function(){
				let pct = 1-this.dataall.teacher_oriented_info.high_percent*1
				return pct.toFixed(3)*100+'%'
			},
			fairrank:function(){
				let pct = this.dataall.teacher_oriented_info.mean_percent*1
				return pct.toFixed(3)*100+'%'
			},
			rank:function(){
				return this.dataall.teacher_oriented_info.user_rank*1
			},
			show : function(){
				return this.dataall.teacher_oriented_info.flag*1
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
	}
	.rc{
		height: 54px;
		position: absolute;
		bottom: -7px;
	}
	.goodMore{
		width: 30%;
	}
	.fair{
		border-right: 4px solid #333;
	}
	.good{
		right: 0;
		border-left: 4px solid #333;
	}
	.your{
		border-right: 4px solid #333;
	}
	.subrc{
	    height: 40px;
	    margin: 7px 0;
	}
	.fair .subrc{
	    background: rgba(255, 99, 132, 1);
	}
	.good .subrc{
	    background: rgb(144, 237, 125);

	}
	.av{
		position: absolute;
	    top: -20px;
	    right: -24px;
	    color: #000;
	}
	.gd{
		position: absolute;
	    top: -20px;
	    left: -24px;
	    color: #000;
	}
	.yr{
		position: absolute;
	    top: -20px;
	    right: -24px;
	    color: #000;
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