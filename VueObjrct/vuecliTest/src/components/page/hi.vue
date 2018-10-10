<template>
<el-tabs>

  <el-tab-pane label="喜爱">
    <el-table border  style="width: 100%;text-align: center">

      <el-table-column prop="goodsname" label="商品">



      </el-table-column>
      <el-table-column prop="price" label="价格" width="50"></el-table-column>
      <el-table-column prop="Like" label="喜好" width="70"></el-table-column>
      <el-table-column prop="exit" label="操作">
        <template scope="scope">
          <el-button type="text" size="small">删除</el-button>


        </template>


      </el-table-column>


    </el-table>


  </el-tab-pane>
  <el-tab-pane label="一般">
    {{$route.params.username}}

  </el-tab-pane>
  <el-tab-pane label="厌恶"></el-tab-pane>

</el-tabs>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'hi',
    data(){
      return {



      }
    },



  }



</script>


<style scoped>

</style>
