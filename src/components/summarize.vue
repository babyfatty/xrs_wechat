<template>
	<div class="summarize">
    <div class="desTitle">总结：</div>
    <div class="summarizeWrapper">
         <div class="smItem" v-for="item in items">
            <span class="smTitle">{{item.key}}:</span>{{item.content}}
         </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'summarize',
  
  props:['summarize'],
  computed:{
    items:function(){
      if(Array.isArray(this.summarize)){
        return this.summarize
      }else{
        return [this.summarize]
      }
    }
  }
}
</script>

<style scoped>
.summarize{
    background: #fff;
    padding: 3px 20px;
    text-align: left;
}

.tTitle{
  text-align: left;
  border-bottom: 2px solid #fff;
  padding: 0 20px;
  background: #fff;
  color: #000;
  font-weight: bold;
}
  .summarizeWrapper{
  padding: 5px;
  background: #f7fafc;
  text-align: left;
  }
  .teacher{
    flex:1;
    /*display: inline-block;*/
    /*width: 30%;*/
    box-sizing:border-box;
    padding-left: 15px;
    border-right: 2px solid #fff;
    background: #fff;
  }
  .comment{
    flex:3;
    box-sizing:border-box;
    min-height: 100px;
    text-align: left;
    margin:6px 20px 3px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7fafc;
    position: relative;
  }
  .smTitle{
    font-weight: bold;
    color: #2db7f5;
  }
  .smItem{
    padding: 3px 0;
  }
</style>