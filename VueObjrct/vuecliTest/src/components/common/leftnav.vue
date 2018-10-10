<template>
  <div  class="leftnav">
    <ul >


        <router-link to="/" tag="li">
        <i class="icon iconfont icon-dianpu" ></i>
        <div>店铺</div>
        </router-link>



          <router-link :to="{name:'hi',params:{username:'jspang'}}" tag="li">
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
        </router-link>

        <router-link to="/HelloWorld/20180928/Vuew学习" tag="li">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
        </router-link>
      <li><button @click="Gonext()">前进</button></li>
      <li><button @click="Goback()">后退</button></li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'leftNav',
    data () {
      return {
      }
    },
    methods:{
      Gonext(){
            this.$router.go(1)

      },
      Goback(){

        this.$router.go(-1)
      }

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .leftnav {
    color:#fff;
    float: left;
    width: 5%;
    height: 100%;
    background: #0086b3;
    text-align: center;

    font-size: 10px;
    cursor: pointer;
  }
  .leftnav ul{
    margin: 0;
    padding: 0;
  }
  .leftnav li{

    list-style: none;
    text-align: center;
    border-bottom:1px solid #20a0ff;
    padding:10px;


  }

  .iconfont{
    font-size: 24px;
  }
</style>
