<template>
    <div class="todo-container">
      <router-view></router-view>
    </div>

</template>

<script>

  export default {
      data(){
          return{
              //从localStorage读取todos

              //深度监视
              // todos:[
              //     {title:'sss',
              //     complete:false}
              // ]
              todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')//key-value 存的是文本 字符串
          }
      },
     
      methods:{
       
      },
      components:{
          
      }
    }

</script>

<style>
  /*base*/










</style>
