<template>
	<div class="usrInfo">你好，{{uname}}！欢迎来到TRS！</div>
</template>

<script>
	export default {
		data(){
			return{
				name:""
			}
		},
		props:['uname'],
		name:"basicInfo",
		methods:{
			
		}
	}
</script>

<style scoped>
	.usrInfo{
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #eee;
	}
</style>