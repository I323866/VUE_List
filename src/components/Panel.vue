<template>
  <FdShell>
    <FdShellHeader>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <!-- <FdShellBarLogo src="../images/logo.png" srcset="/images/logo.png 1x, /images/logo@2x.png 2x" /> -->
          <a href="#" class="fd-shellbar__logo">
            <img
              src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
              srcset="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x"
              width="48"
              height="24"
              alt="SAP"
            >
          </a>
          <FdShellBarProduct>
            <FdShellBarProductMenu>
              <template slot="title">{{ProductName}}</template>
              <template slot="menu">
                <FdMenuItem v-on:click="selectPackage">Package</FdMenuItem>
                <FdMenuItem v-on:click="selectSI">Scope Item</FdMenuItem>
              </template>
            </FdShellBarProductMenu>
          </FdShellBarProduct>
          <FdShellBarSubtitle>Buniess work branch</FdShellBarSubtitle>
        </FdShellBarGroup>
        <FdShellBarGroup position="end"></FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
    <FdApp>
      <FdAppNavigation orientation="vertical" :item-select="fd">
        <SideBarNav :data="gridData" :Title="ProductName" @clickitem="onclickitem"/>
      </FdAppNavigation>
      <FdAppMain>
        <ContentDetail :detail="detail" :selectedId="selectedId"/>
      </FdAppMain>
    </FdApp>
    <FdShellFooter>Footer</FdShellFooter>
  </FdShell>
</template>

<script>
import SideBarNav from '@/components/sideBarNav'
import ContentDetail from '@/components/contentDetail'
import { promises } from 'fs'
export default {
  name: 'Panel',
  components: {
    SideBarNav,
    ContentDetail
  },
  data() {
    return {
      gridData: [
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
      ProductName: 'Product Name',
      selectedId: '',
      detail: {},
      packages: [],
      scopeItem: []
    }
  },
  methods: {
    onclickitem: function(item) {
      this.detail = item
    },
    selectPackage: function() {
      console.log('AAA')
      this.ProductName = 'Package'
      // this.getPkgs()
      this.getAll()
    },

    selectSI: function() {
      console.log('BBB')
      this.ProductName = 'Scope Item'
      this.getscopeitem()
    },

    async getAll() {
      var keywords = ['packages', 'scopeitems']
      var api = 'http://localhost:3000/api/'
      var count = 0
      var that = this
      // 这个函数不用理会，理解为promise包起来的$.get，resolve的是json格式的内容
      function getData(url) {
        return fetch(url).then(function(response) {
          return response.json()
        })
      }
      function getRepoUrl(url,keyword) {
        return getData(url,keyword).then(function(data) {
          if (keyword == 'packages') {
            that.packages = data
            that.gridData = data
          } else {
            that.scopeItem = data
            that.gridData[0].children = data
          }
        })
      }
      function getRepoName(url) {
        return getData(url).then(function(repo) {
          console.log(repo[0].full_name)
        })
      }
      function allData(keyword) {
        if (keyword == 'packages') {
          that.gridData = that.packages
        } else {
          that.gridData[0].children = that.scopeItem
        }

        console.log(that.gridData)
      }
      var sequence = Promise.resolve()
      keywords.forEach(function(keyword) {
        var searchAPI = api + keyword
        sequence = sequence
          .then(function() {
            return getRepoUrl(searchAPI,keyword)
          })
          .then(allData(keyword))
      })
    },

    async getPkgs() {
      let that = this
      // Make a request for a user with a given ID
      this.$axios

        .get('packages')
        .then(function(response) {
          // handle success
          // response.data.array.forEach(element => {

          // });
          that.gridData = response.data
          rst = response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
    },
    async getscopeitem() {
      let that = this
      // Make a request for a user with a given ID
      this.$axios

        .get('http://localhost:3000/api/scopeitems')
        .then(function(response) {
          that.gridData = response.data
          return response.data
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .then(function() {
          // always executed
        })

      return this.gridData
    },
    fd: function(id) {
      console.log('id ' + id)
      this.selectedId = id
    }
  }
}
</script>

