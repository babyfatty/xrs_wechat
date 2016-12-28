<template>
<div>
  <div class="loginpage">
  </div>

        <div class="login">
      <form v-on:submit.prevent="goLogin">
            <div v-if="acvaild" class="errmsg">
              *账户不存在
            </div>
          <input type="text"  v-model="uid" class="loginField" placeholder="输入学员编号" v-on:click="acvaild = false" v-bind:class="{ err: acvaild }"/>
          <button class="loginBtn">查询</button>
      </form>
</div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      uid:"",
      invaild:false,
      acvaild:false
    }
  },
  components : {
  },
  methods: {
    goLogin () {//方法，定义路由跳转，注意这里必须使用this，不然报错
        this.$http.get('http://trsapi.xesfun.com/front/user/searchByStudentID',{params:{id:this.uid}}).then((response) => {
          if(response.body.result_code===0){
            this.$router.push({name:"list","params":{uid:this.uid}});
          }else{
            this.acvaild = true
          }
        }, (response) => {
          
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loginpage{
    background: #f7fafc;
  margin: 0;
  padding: 0;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
   position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
z-index: -1;
}


a {
  color: #42b983;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.reportContainer{
      margin: 10px 10px 0;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 1px 0 #f2f4f5;
    background: #fff;
}
.err {
  border: 1px solid #FF6384 !important;
}
.errmsg{
  font-size: 14px;
    color: #FF6384;
}
.loginField{
    font-size: 1rem;
    line-height: 2.5rem;
    color: #666;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: .1rem .5rem;
    width: 70%;
    margin: 0 auto;
    outline: none;
    box-sizing: border-box;
    height: 2.5rem;
}
.loginBtn{
    display: block;
    width: 70%;
    margin: 1rem auto;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: .3rem;
    font-size: 1rem;
    line-height: 1.5rem;
    min-width: 5rem;
    border-radius: 4px;
    transition: background .2s;
    outline: none;
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
    height: 2.5rem;
}
.loginBtn:hover {
    color: #57c5f7;
    background-color: #fff;
    border-color: #57c5f7;
}
</style>
