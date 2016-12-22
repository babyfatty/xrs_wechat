<template>
  <div class="login">
      <form v-on:submit.prevent="goLogin">
          <input type="number"  v-model="uid" class="loginField" placeholder="输入学员编号" />
          <button class="loginBtn">查询</button>
      </form>
      <div v-if="invaild">
        输入不合法
      </div>
  </div>
</template>

<script>
let vaildate = (input)=>{
   let reg = new RegExp("^[0-9]*$")
   if(!reg.test(input)) return true
}
export default {
  name: 'login',
  data () {
    return {
      uid:"",
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
.loginField{
    font-size: .9rem;
    line-height: 1.7rem;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: .1rem .5rem;
    width: 60%;
    margin: 0 auto;
    outline: none;
    box-sizing: border-box;
}
.loginBtn{
    display: block;
    width: 60%;
    margin: 1rem auto;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: .3rem;
    font-size: .8rem;
    line-height: 1.5;
    min-width: 5rem;
    border-radius: 4px;
    transition: background .2s;
    outline: none;
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
.loginBtn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
</style>
