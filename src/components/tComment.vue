<template>
	<div class="tComment">
    <div class="tTitle">教师点评</div>
    <div class="commentWrapper">
          <div class="teacher">
            <div class="teacherAvatar"><img v-bind:src="dataall.teacher_review.teacher_head_icon"></div>
            <div class="teacherName">{{dataall.teacher_review.teacher_name}}</div>
          </div>
          <div class="comment">
          <i class="quot">
           <img src="../assets/quot.png">
          </i>
          <i class="quot2">
           <img src="../assets/quot2.png">
          </i>
          <div>
            <div>{{dataall.teacher_review.review_knowledge}}</div>
            <div>{{dataall.teacher_review.review_overall}}</div>
            <div>{{dataall.teacher_review.review_question_type}}</div>
          </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tComment',
  props:['dataall'],
  data(){
    return{
       
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
    background: #c9e5f5;
    color: #000;
    height: 35px;
    line-height: 35px;
    margin: 10px 0;
    font-weight: bold;
    text-align: center;
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