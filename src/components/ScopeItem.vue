
<template>
  <div id="example" class="hello">
    <h1>{{ msg }}</h1>
      <gridTable :data = "gridData" :columns = "gridColumns" ></gridTable>
      <button v-on:click="common.goHome()">go to homepage</button>
  </div>

</template>

<script type="text/x-template" id="grid-template">
import common from "@/controller/common.js";
import gridTable from "@/components/gridTable.vue";
import Vue from 'vue';
export default {
  name: "ScopeItem",
  components:{ gridTable },
  data() {
    return {
      msg: "Scope Item",
      common: common,
      gridColumns: ['id', 'name'],
      gridData: [
      { id: 'Chuck Norris', name: Infinity },
      { id: 'Bruce Lee', name: 9000 },
      { id: 'Jackie Chan', name: 7000 },
      { id: 'Jet Li', name: 8000 }
    ]
    };
  },
  mounted() {
    this.getscopeitem()
  },
  methods: {
    getscopeitem: function() {
      let that = this
      // Make a request for a user with a given ID
      this.$axios

        .get('http://localhost:3000/api/scopeitems')
        .then(function(response) {
          // handle success
        // response.data.array.forEach(element => {
          
        // });
          that.gridData = response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    }
  }

};
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
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
