<template>
  <nav>
    <router-link to="/">主页</router-link> |
    <router-link to="/about">关于</router-link>
  </nav>
  <router-view/>
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<style>
#app {
  font-family: "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> 