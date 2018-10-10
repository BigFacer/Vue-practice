<template>
  <div id="app">

    <div class="leftNavclass">


    <leftNav></leftNav>
      <div class="main">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>

import  leftNav from '@/components/common/leftnav.vue'

export default {

  name: 'app',
  components:{
    leftNav
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

}
leftNav{
   float: left;
  width:5% ;

  }
.main{
  float:left;
  width:95%;
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
}
</style>
