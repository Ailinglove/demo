<template>
  <div class="main" style="width:100%;">
    <h2 class="title">数据实时大屏</h2>
    <div class="content">
        <div class="box left">
            <ul>
                <li v-for="(item,index) in tab" @click=change(index)>{{item}}</li>
            </ul>
        </div>
        <div class="box right">
        <div class="time">{{time}}</div>
        <div>
            <chartool :main="'network'" :chartData="chartData"></chartool>

        </div>

        </div>
    </div>
  </div>
</template>

<script>
import chartool from './tools'
export default {
    components:{chartool},
    data(){
      return {
          time:new Date().toLocaleDateString(),
               tab:['首页','商品交易','地区交易'],
       data:[
           {type:'bar',
         
          ydata:[1000000,3500000,300000,45000],
          xdata: ["交易额/万元","交易单数","日活跃人数/千人","商品曝光数"],},
          {type:'bar',
         
          ydata:[5, 20, 36, 10, 10, 20],
          xdata: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],},
          {type:'bar',
         
          ydata:[62000,155000,110000,40000,30000],
          xdata: ["华中地区","华东地区","华南地区","西北地区","西南"],}
       ],
       chartData:{type:'bar',ydata:[1000000,3500000,300000,45000],
          xdata: ["交易额/万元","交易单数","日活跃人数/千人","商品曝光数"]}    ,    
        }
    },
    methods:{
        change(index){
            console.log(index)   
            this.chartData=this.data[index]
        },
          
    },
    watch:{
        chartData(data){
            console.log('gaibian',data)
        }
    },
  }
</script>

<style >
.main{
    height:100%;
    width:100%;

}
.title{
    text-align: center;
}
.content{
    margin-top:100px;
    display:flex;
    

}
.box{
    height:300px;
    
}
li{
        width:140px;
        height:100px;
        list-style: none;
        line-height:100px;
        text-align: center;
        color:white

}
li:nth-child(1){
    background: blue;
}
li:nth-child(2){
    background: orangered;
}
li:nth-child(3){
    background: orange;
}
.right{
    width:800px;
    height:400px;
margin:30px auto;}
.time{
    position: relative;
    left:550px;
    margin:0 0 10px 0;
    width:100px;
    border:1px solid blue;
}


</style>

