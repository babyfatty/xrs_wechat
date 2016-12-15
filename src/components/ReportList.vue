<template>
	<div>list
  <div v-on:click="clk">go book</div>
  </div>

</template>

<script>

export default {
  name: 'List',
  components: {
  },
  methods: {
    clk(){ this.$router.push({name:"basic", params:{"id":1}}); }
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