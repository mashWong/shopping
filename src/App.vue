<template>
  <div id="app">
    <div id="nav" v-show="this.$route.name == 'Home'">
      <router-link to="/join">我的参与</router-link>
      <router-link to="/follow">我的关注</router-link>
    </div>
    <PopBox v-show="this.$route.name == 'Home'"></PopBox>
    <router-view/>
  </div>
</template>

<script>
  import PopBox from './views/PopBox';
    export default {
        name: 'app',
        components: {
            PopBox
        }
    }
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: calc(100% - 20px);
  margin: 10px;
  display: inline-block;
  text-align: left;
  float: left;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 14px;
    float: left;
    padding-left: 10px;
  }
}
  .doJoin{
    float: right;
    margin-right: 10px;
  }
</style>
