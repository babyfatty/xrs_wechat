<template>
  <div class="s-header">
      <div class="ex-header-logo"><span class="ex-header-logo-text">学而思TRS</span></div>
      <!-- <router-link :to="{ name: 'list' }">考情列表</router-link> -->
  </div>
</template>

<script>
let vaildate = (input)=>{
   let reg = new RegExp("^[0-9]*$")
   if(!reg.test(input)) return true
}
export default {
  name: 'header',
  data () {
    return {
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

@media screen and (max-width: 1000px)
  .s-header {
      padding: 0 1rem;
      position: fixed;
  }

.s-header {
  display: flex;
  height: 3rem;
  width: 100%;
  z-index: 999;
  background: #2db7f5;
  box-sizing: border-box;
}
.ex-header-logo {
    width: 100%;
}
.ex-header-logo-text {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 3rem;
}
</style>
