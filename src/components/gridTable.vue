<template class="content" id="evaluate" style="background-color:#fff; padding-bottom:50px;">
  <div class="gridTable">
    <div class="btn btn-blueviolet btn-inline-block btn-create" @click="addRow">Add Row</div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
            <span class="arrow"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index ) in data" :key="index">
          <td v-for="(key,idx) in columns" :key="idx">
            <input v-model="entry[key]">
          </td>
          <button class="btn success" v-on:click="goDetail1(entry)">Detail</button>
          <button v-on:click="deleteRow(entry,index)" class="btn danger">Delete</button>
          <button v-on:click="save(entry.id,entry.name,entry.flag)" class="btn warning">Save</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<script>
import common from '@/controller/common.js'
import Packages from '@/controller/common.js'
export default {
  name: 'gridTable',
  props: {
    data: Array,
    columns: Array,
    index: 1
    // filterKey: String
  },

  data() {
    return {
      common: common,
      clonedata: Array,
      msg: 'Welcome to Your Vue.js App',
      objectname: ''
    }
  },
  mounted() {
    this.getUrlParam()
    this.clonedata = this.data
  },
  methods: {
    addRow() {
      this.data.push({
        id: '',
        name: '',
        flag: true
      })
    },

    updateRow(entry, index) {
      common.goDetail(entry, this.objectname)
    },
    getUrlParam: function() {
      let uri = window.location.href.split('/#/')
      if (uri.length === 2) {
        this.objectname = uri[1]
      }
    },
    goDetail1: function(entry) {
      common.goDetail(entry, this.objectname)
    },
    deletePackage: function(entry) {
      let that = this
      console.log(entry.id)
      console.log(entry.name)
      // Make a request for a user with a given ID
      this.$axios

        .delete(`http://localhost:3000/api/packages/${entry.id}`)
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
    addPackage: function(id, name, index) {
      let entry = {id:id,name:name}

      this.$axios

        .post(`http://localhost:3000/api/packages/`, entry)
        .then(function(response) {
          // handle success

          alert('Add Successfully!')
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    deleteRow(entry, index) {
      this.data.splice(index, 1)
      if (this.objectname == 'Packages') {
        this.deletePackage(entry)
      } else {
      }
    },
    save(id,name,flag) {
      if(flag==true){
        this.addPackage(id,name)
      }else{
        alert('This one can not save')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
/* Red */
.danger {
  border-color: #f44336;
  color: red;
}
/* Red */
.warning {
  border-color: #255230;
  color: blue;
}
.danger:hover {
  background: #f44336;
  color: white;
}
</style>
