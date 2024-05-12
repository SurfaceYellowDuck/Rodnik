<template>

  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
    <component :is="layout">
      <router-view />
    </component>
  </div>
<!--  <router-view/>-->
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout'
  export default{
    computed:{
      layout(){
        console.log(this.$route.meta)
        return (this.$route.meta.layout || 'empty')
      }
    },
    components: {
      EmptyLayout
    }
  }
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/style.css";
//@import "~vuetify";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
