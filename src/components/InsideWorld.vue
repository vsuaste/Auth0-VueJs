<template>
  <div>
  <app-nav></app-nav>
  <h3 class="text-center">Secret Content</h3>
</div>
</template>

<script>
import AppNav from './AppNav'
//  import { isLoggedIn } from '../../auth';

export default {
  name: 'InsideWorld',
  components: {
    AppNav
  },
  data () {
    return {
      msg: 'Welcome to Your Secret App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h3 {
  color: red;
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
