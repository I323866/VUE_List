<template>
  <div>
    <FdActionBar title>
      <FdButton slot="back" styling="light" compact icon="nav-back"/>
      <FdButton id="createbutton" v-on:click="showModal" icon="create">Add</FdButton>
      <FdButton id="hidebutton" v-on:click="hide" icon="hide" title="hide Title"></FdButton>
      <!-- <FdButton styling="emphasized">Button 2</FdButton> -->
    </FdActionBar>
    <p
      id="title"
      v-show="isShow"
      class="fd-has-text-align-center fd-has-font-weight-bold"
    >selected id: {{ selectedId }}</p>
    <div v-show="false" id="panel">Other Title!</div>
    <FdSideNav :selectedId.sync="selectedId">
      <FdSideNavList :items="data">
        <FdSideNavLink
          slot="link"
          slot-scope="$item"
          @click="onRowClick($item)"
          :selected="$item.id === selectedId"
        >{{ $item.name }}</FdSideNavLink>
      </FdSideNavList>
    </FdSideNav>

    <FdModal title="New Package" :active.sync="isAddModalActive">
      <div id="addModalContent">
        <FdFormSet>
          <FdFormItem label="ID">
            <FdInput :required="true" v-model="newPackage.id" placeholder="Package ID"/>
          </FdFormItem>
          <FdFormItem label="Name">
            <FdInput :required="true" v-model="newPackage.name" placeholder="Name"/>
          </FdFormItem>
        </FdFormSet>
      </div>
      <template slot="actions">
        <FdButton @click="closeAddPackageModal" styling="light">Cancel</FdButton>
        <FdButton @click="createPackageModal" styling="emphasized">Create</FdButton>
      </template>
    </FdModal>
  </div>
</template>

<script>
import $ from 'jquery'
import common from '@/controller/common.js'
import bus from '@/controller/eventBus.js'
import rp from 'request-promise'
/* eslint-disable */
export default {
  name: 'sideBarNav',
  props: {
    data: Array,
    title: ''
  },
  data() {
    return {
      selectedId: 'A-3',
      entry: { id: 'A-1', name: 'Item A-1' },
      items: [
        { id: 'A-1', name: 'Item A-1' },
        {
          id: 'A-2',
          name: 'Item A-2',
          children: [
            { id: 'A-2-1', name: 'Item A-2-1' },
            { id: 'A-2-2', name: 'Item A-2-2' },
            { id: 'A-2-3', name: 'Item A-2-3' }
          ]
        },
        { id: 'A-5', name: 'Item A-5' }
      ],
      common: common,
      isShow: true,
      isAddModalActive: false,
      newPackage: {
        id: '',
        name: ''
      }
    }
  },
  mounted() {
    items = data

    // this.getPkgs(),
    // this.getscopeitem()
  },
  methods: {
    selectObject: function(item) {
      console.log('aaa')
      // console.log(item.name)
      console.log(this.selectedId)
      this.$emit('item-select', this.selectedId)
      // this.common.goDetai2(this.selectedId, 'Package')
      localStorage.setItem('aaa', this.selectedId)
      // bus.$emit("userDefaultEvent","this is from sideBarNav")
    },
    onRowClick(item) {
      this.$emit('clickitem', item)
    },
    hide: function() {
      // if (this.isShow == true) {
      //   this.isShow = false
      // } else {
      //   this.isShow = true
      // }
      this.$jquery('#title').hide(1000, 'linear')
      this.$jquery('#panel').slideDown('slow')
      this.$jquery('#headerid').val('test set value')
    },
    closeModal() {
      this.isAddModalActive = false
    },
    showModal() {
      this.isAddModalActive = true
      event.stopImmediatePropagation()
    },
    createPackageModal() {
      this.isAddModalActive = false
      this.addPackage(this.newPackage.id, this.newPackage.name)
    },
    closeAddPackageModal() {
      this.isAddModalActive = false
    },
    addPackage: function(id, name) {
      Promise.all([this.addPKG(id, name), this.getPKG()])
        .then(function(values) {
          console.log(values)
        })
        .catch(error => {
          this.errormsg = error.response.data.message
        })
    },
    async addPKG(id, name) {
      let entry = { id: id, name: name }
      let that = this
      const response = await this.$axios
        .post(`http://localhost:3000/api/packages/`, entry)
        .then(function(response) {
          // handle success
          return response.data
          // alert('Add Successfully!')
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    async getPKG() {
      let that = this
      const response = await this.$axios
        .get('packages')
        .then(function(response) {
          // handle success
          // response.data.array.forEach(element => {

          // });
          that.items = response.data
          alert('Add Successfully!!!!!!!!')
          return response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },

    start() {
      return new Promise((resolve, reject) => {
        resolve('start')
      })
    },
    addPackage1: function(id, name) {
      const fn1 = () => {
          return new Promise((resolve, reject) => {
            addPKG()
          })
      }

      const fn2 = () => {
        return new Promise((resolve, reject) => {
          getPKG()
          })
      }
    }
  }
}
</script>

<style scoped>
tstart-toolbar-bottom .tstart-left {
  float: left; /*在左*/
  width: 300px;
  margin: 5px 5px 5px 5px;
  padding: 5px;
  border: 1px solid silver;
  background-color: white;
  /*椭圆与阴影*/
  box-shadow: 0px 0px 5px #000;
  -moz-box-shadow: 0px 0px 5px #000;
  -webkit-box-shadow: 0px 0px 5px #000;
}
#panel {
  padding: 50px;
  display: none;
}
</style>

