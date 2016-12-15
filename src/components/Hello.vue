<template>
  <div class="login">
      <form v-on:submit.prevent="goLogin">
        <input type="text"  placeholder="请输入序号" name="userId">
        <button>登入</button>
      </form>
  </div>
</template>

<script>
// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goLogin () {//方法，定义路由跳转，注意这里必须使用this，不然报错
        this.$router.push({name:"list"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
