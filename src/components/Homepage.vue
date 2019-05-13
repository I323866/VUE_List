<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2> -->
    <button v-on:click="common.goPKG()">go to Package Page</button>
    <button v-on:click="common.goSI()">go to ScopeItem Page</button>
u    <button v-on:click="common.goTable()">go to table Page</button>
    <button v-on:click="common.goTable()">go to table Page</button>
    <button v-on:click="common.goTreeTable()">go to Tree table Page</button>
    <button v-on:click="common.goPanel()">go to Panel Page</button>
  </div>
</template>

<script>
import common from '@/controller/common.js'
export default {
  name: 'HomePage',

  data() {
    return {
      common: common,
      msg: 'Welcome to Your BCW'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.hello {
  color: #42b983;
}
</style>
