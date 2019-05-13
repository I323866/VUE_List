<template>
  <div class="hello">
    <h1 class="aa">{{ msg }}</h1>
    <FdFormSet>
      <FdFormItem label="ID">
      <FdInput disabled v-model="entry.id" placeholder="entry.id" />
    </FdFormItem>
    <FdFormItem l
      <FdFormItem label="Name">
        <FdInput v-model="entry.name" placeholder="Name" />
      </FdFormItem>
    </FdFormSet>
    <FdButton @click="update">Change Name</FdButton>
    <!-- </form> -->
    <br>
           </P>
    华丽的分割线--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 华丽的分割线
    </P>
    <li>Assignment:</li>

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.id">{{ option.name }}</option>
    </select>
    <span>Selected: {{ selected }}</span>
        <br>
    <FdButton styling="emphasized" icon="task" v-on:click="assign(entry.id ,selected )">Assgin</FdButton>
    <!-- <button v-on:click="assign(entry.id ,selected )">Assgin</button> -->
        </P>
    华丽的分割线--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 华丽的分割线
    </P>
    <selTable :data="assignData"></selTable>

    <!-- <h2>Essential Links</h2> -->
  </div>
</template>

<script>
import common from '@/controller/common.js'
import selTable from '@/components/selTable.vue'
export default {
  components: { selTable },
  data() {
    return {
      selected: '',
      entry: {},
      msg: 'Detail Page',
      assignData: Array,
      options: [
        { id: 'Chuck Norris', name: 'Chuck Norris' },
        { id: 'Bruce Lee', name: 'Bruce Lee' },
        { id: 'Jackie Chan', name: 'Jackie Chan' },
        { id: 'Jet Li', name: 'Jet Li' }
      ]
    }
  },
  mounted() {
    this.getUrlParam(), this.getscopeitem()
  },
  methods: {
    getUrlParam: function() {
      //   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      //   var rg = window.location.search.substr(1)
      //   var r = window.location.search.substr(1).match(reg)
      //   if (r != null) return unescape(r[2])
      //   return null
      let uri = window.location.href.split('?')
      if (uri.length == 2) {
        let vars = uri[1].split('&')
        let getVars = {}
        let tmp = ''
        vars.forEach(function(v) {
          tmp = v.split('=')
          if (tmp.length == 2) getVars[tmp[0]] = tmp[1]
        })
        // console.log(getVars)
        // do
        this.entry = getVars
      }
    },
    getscopeitem: function() {
      let that = this
      // Make a request for a user with a given ID
      this.$axios

        .get('http://localhost:3000/api/scopeitems')
        .then(function(response) {
          // handle success

          that.options = response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    update: function(entry) {
      let that = this
      console.log(entry.id)
      console.log(entry.name)
      // Make a request for a user with a given ID
      this.$axios

        .put(`http://localhost:3000/api/packages/${entry.id}`, entry)
        .then(function(response) {
          // handle success

          that.options = response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    assign: function(id1, id2) {
      let that = this
      let data4as = { spid: id1, siid: id2 }
      // Make a request for a user with a given ID
      this.$axios

        .post(`http://localhost:3000/api/siassignment/`, data4as)
        .then(function(response) {
          // handle success

          console.log('Success')
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
