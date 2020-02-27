<template>
  <div id="app">
    <!-- <smooth-scrollbar> -->
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
    <!-- </smooth-scrollbar> -->
  </div>
</template>

<script>

export default { }

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap&subset=cyrillic');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    // text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
