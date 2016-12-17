<template>
  <div class="login">
      <form v-on:submit.prevent="goLogin">
          <input type="number"  v-model="uid" placeholder="请输入序号" />
          <button>登入</button>
      </form>
      <div v-if="invaild">
        输入不合法
      </div>
      <p>Message is: {{ uid }}</p>
  </div>
</template>

<script>
let vaildate = (input)=>{
   let reg = new RegExp("^[0-9]*$")
   if(!reg.test(input)) return true
}
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      uid:12,
      invaild:false
    }
  },
  components : {
  },
  methods: {
    goLogin () {//方法，定义路由跳转，注意这里必须使用this，不然报错
        if(vaildate(this.uid)){
          this.invaild = true
          return
        } 
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
