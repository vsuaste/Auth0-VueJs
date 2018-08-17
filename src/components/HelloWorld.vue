<template>
  <div>
  <app-nav></app-nav>
  <h3 class="text-center">Public Content</h3>

  <div class="jumbotron text-center" v-if="isLoggedIn()">
      <h2>SECRET</h2>
      <router-link class="btn btn-lg btn-success" to="/inside-world"> Take me to secret World </router-link>
  </div>
</div>
</template>

<script>
import appNav from './AppNav'
import { isLoggedIn } from '../auth'

export default {
  name: 'HelloWorld',
  components: {
    appNav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
