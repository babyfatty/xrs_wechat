<template>
	<div class="tComment">
    <div class="tTitle">名师点评:</div>
    <div class="commentWrapper">
          <div class="teacher">
            <div class="teacherAvatar"><img v-bind:src="avatar"></div>
            <div class="teacherName">{{name}}</div>
          </div>
          <div class="comment">
          <i class="quot">
           <img src="../assets/quot.png">
          </i>
          <i class="quot2">
           <img src="../assets/quot2.png">
          </i>
          <div>没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么没有什么</div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tComment',
  data(){
    return{
      name:'bbf',
      avatar:'http://www.chartjs.org/img/chartjs-logo.svg',
      comment:"good!goodgoodgoodgoodgoodgoodgoodgoodgoodgood!goodgoodgoodgoodgoodgoodgoodgoodgoodgood!goodgoodgoodgoodgoodgoodgoodgoodgoodgood!goodgoodgoodgoodgoodgoodgoodgoodgoodgood!goodgoodgoodgoodgoodgoodgoodgoodgoodgood!goodgoodgoodgoodgoodgoodgoodgoodgood"
    }
  },
  mounted(){
    
  },
  components: {
  }
}
</script>

<style>
.tComment{
  background: #fff;

}

.tTitle{
  text-align: left;
  border-bottom: 2px solid #fff;
  padding: 0 20px;
  background: #fff;
}
  .commentWrapper{
    display: flex;
    justify-content:center;
    align-items: center;
  padding-bottom: 20px;

    /*overflow: hidden;*/
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
  .teacherAvatar{
    height: 100px;
    width: 100px;
  }
  img{
    max-width: 100%;
  }
  .quot{
    position: absolute;
    display: inline-block;
    width: 15px;
    height: 15px;
    top: -5px;
    left: -15px;
  }
  .quot2{
    position: absolute;
    display: inline-block;
    width: 15px;
    height: 15px;
    right: -2px;
    bottom: -2px;
  }
</style>