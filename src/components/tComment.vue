<template>
	<div>
    <div>teacher comment</div>
    <div class="teacherAvatar"><img v-bind:src="avatar"></div>
    <div class="teacherName">{{name}}</div>
    <div class="comment">{{comment}}</div>
  </div>
</template>

<script>
export default {
  name: 'tComment',
  data(){
    return{
      name:'bbf',
      avatar:'http://www.chartjs.org/img/chartjs-logo.svg',
      comment:"good!"
    }
  },
  mounted(){
    
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>