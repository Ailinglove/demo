<template>
  <div style="width:100%;height:300px;;">
    <div :id="main" style="width:100%;height:300px;"></div>
  </div>
</template>

<script>
export default {
    props:['chartData','main'],
    name:'chartool',
    watch:{
        chartData(data){
            console.log('gaibian',data)
            this.init()
        }
    },
    methods:{
       
        init(){
            var myChart=this.$echarts.init(document.getElementById(this.main))
            var option = {
            title: {
                text: this.chartData.title
            },
            tooltip: {},
            legend: {
                data:this.chartData.lenged
            },
            xAxis: {
                data:this.chartData.xdata
            },
            yAxis: {},
            series: [{
                // name: '销量',
                type: this.chartData.type,
                data: this.chartData.ydata
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option,true);
        }
    },
    mounted(){
       {this.init()}
    },
    updated(){
        this.init()
    }
}
</script>

<style>

</style>