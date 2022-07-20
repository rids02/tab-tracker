<template>
  <nav class="navbar navbar-inverse fixed-top">
    <div class="container-fluid">
    <router-link to="/" class="btn">Home</router-link> |
    <router-link to="/login" class="btn">Login</router-link> |
    <router-link :to="{name: 'Register'}" class="btn">Sign Up</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
body { padding-top: 70px; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  height: 9vh;
  background-color: #0B8677;
}
nav {
  padding: 30px;
}

nav a:hover {
  font-weight: bold;
  color: #ECE8E2;
}

nav a.router-link-exact-active {
  color: #ECE8E2;
}


</style>
