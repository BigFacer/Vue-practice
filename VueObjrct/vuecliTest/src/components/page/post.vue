<template>
<div class="post">
    <div>
      <el-row>

        <el-col :span="7" >

       <el-tabs>
          <el-tab-pane label="点餐" >

            <el-table :data="tableData" border style="width: 100%;text-align: center" >
              <el-table-column prop="goodsName" label="商品"  ></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column  label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delgoods(scope.row)" >删除</el-button>
                  <el-button type="text" size="small"  @click="addgoodslist(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div>
              <span>数量：{{totalCount}}</span>
              <span>金额：{{totalMoney}}</span>

            </div>

          </el-tab-pane>
         <el-tab-pane label="挂单" ></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
       </el-tabs>
          <div class="exitbtn">
            <el-button type="primary">挂单</el-button>
            <el-button type="success">结账</el-button>
            <el-button type="danger" @click="delAllGoods()">删除</el-button>

          </div>



        </el-col>
        <el-col :span="17" style="border-left: 1px solid #cccccc">
               <div style="width: 100%;height: 300px;overflow-y: scroll">
                 <div style="text-align: left;text-indent: 10px">高频率商品</div>
                 <ul class='cookList'>
                   <li v-for="goods in ofengoods" @click="addgoodslist(goods)">
                     <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                     <span class="foodName">{{goods.goodsName}}</span>
                     <span class="foodPrice">￥{{goods.price}}元</span>
                   </li>
                 </ul>

               </div>
               <div>

                 <el-tabs>
                   <el-tab-pane label="主食">


                     <ul class='cookList'>

                       <li v-for="goods in type0Goods"  @click="addgoodslist(goods)">

                         <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>

                         <span class="foodName">{{goods.goodsName}}</span>

                         <span class="foodPrice">￥{{goods.price}}元</span>

                       </li>

                     </ul>

                   </el-tab-pane>
                   <el-tab-pane label="小食">

                     <ul class='cookList'>

                       <li v-for="goods in type1Goods" @click="addgoodslist(goods)">

                         <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>

                         <span class="foodName">{{goods.goodsName}}</span>

                         <span class="foodPrice">￥{{goods.price}}元</span>

                       </li>

                     </ul>
                   </el-tab-pane>
                   <el-tab-pane label="饮料">


                     <ul class='cookList'>

                       <li v-for="goods in type2Goods"  @click="addgoodslist(goods)">

                         <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>

                         <span class="foodName">{{goods.goodsName}}</span>

                         <span class="foodPrice">￥{{goods.price}}元</span>

                       </li>

                     </ul>
                   </el-tab-pane>
                   <el-tab-pane label="套餐">

                     <ul class='cookList'>

                       <li v-for="goods in type3Goods"  @click="addgoodslist(goods)">

                         <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>

                         <span class="foodName">{{goods.goodsName}}</span>

                         <span class="foodPrice">￥{{goods.price}}元</span>

                       </li>

                     </ul>
                   </el-tab-pane>




                 </el-tabs>


               </div>

        </el-col>

      </el-row>

    </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'post',
    data(){
      return {
        tableData: [],
        ofengoods:[],
        type0Goods:[],
        type1Goods:[],
        type2Goods:[],
        type3Goods:[],
        totalCount:0,
        totalMoney:0


      }
    },
    methods:{
      addgoodslist(goods){

        this.totalCount=0;
        this.totalMoney=0;
      let chooselist=false;


      for (let i =0;i<this.tableData.length;i++){

        if (this.tableData[i].goodsId==goods.goodsId){
          chooselist=true;

        }



      }

      if(chooselist){
        let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId);
        arr[0].count++;

      }else{

        let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
        this.tableData.push(newGoods)
      }

        this.getAllMoney();


      },

      delgoods(goods){

        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
        this.getAllMoney();

      },
      delAllGoods() {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
      },
      getAllMoney(){
        this.totalCount=0;
        this.totalMoney=0;   if(this.tableData){

          this.tableData.forEach((element) => {
            this.totalCount+=element.count;
            this.totalMoney=this.totalMoney+(element.price*element.count);
          });
        }
      }


    },
 created:function () {
   axios.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods").then(respens=>{

     this.ofengoods=respens.data

   }).catch();
   axios.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods").then(response=>{



     //this.oftenGoods=response.data;

     this.type0Goods=response.data[0];

     this.type1Goods=response.data[1];

     this.type2Goods=response.data[2];

     this.type3Goods=response.data[3];
   }).catch()
 }





  }



</script>


<style scoped>
  .el-table th>.cell{

    text-align: center;
  }
 .post{
   float: left;
   width: 100%;
 }
.exitbtn{
  margin-top: 30px;
  margin-bottom: 20px;
}
 .cookList li{
   list-style: none;
   width:23%;
   border:1px solid #E5E9F2;
   height: auot;
   overflow: hidden;
   background-color:#fff;
   padding: 2px;
   float:left;
   margin: 2px;
 }
 .cookList li span{
   display: block;
   float:left;
 }
 .foodImg{
   width: 40%;
 }
 .foodName{
   font-size: 18px;
   padding-left: 10px;
   color:brown;
 }
 .foodPrice{
   font-size: 16px;
   padding-left: 10px;
   padding-top:10px;
 }
 .cookList li{

   list-style: none;

   width:23%;

   border:1px solid #E5E9F2;

   height: auot;

   overflow: hidden;

   background-color:#fff;

   padding: 2px;

   float:left;

   margin: 2px;


 }

 .cookList li span{


   display: block;

   float:left;

 }

 .foodImg{

   width: 40%;

 }

 .foodName{

   font-size: 18px;

   padding-left: 10px;

   color:brown;


 }

 .foodPrice{

   font-size: 16px;

   padding-left: 10px;

   padding-top:10px;

 }
</style>
