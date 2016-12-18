<template>
	<div class="usrInfo">你好，{{name}}！</div>
</template>

<script>
	export default {
		data(){
			return{
				name:"babyfat"
			}
		},
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