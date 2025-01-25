<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="欢迎来到您的 Vue.js 应用"/>
    <SnakeGame />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SnakeGame from '@/components/SnakeGame.vue'

export default {
  name: '主页',
  components: {
    HelloWorld,
    SnakeGame
  }
}
</script> 