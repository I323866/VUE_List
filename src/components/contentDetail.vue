<template>
  <div class="flex">
    <FdPanel title>
          <FdActionBar title>
      <FdButton id="createbutton" v-on:click="showModal" icon="delete">Delete</FdButton>
      <!-- <FdButton styling="emphasized">Button 2</FdButton> -->
    </FdActionBar>
      <FdTabs v-model="activeTab">
        <FdTabItem label="Header" name="a">
          <FdActionBar>
            <FdButton id="createbutton" v-on:click="update" icon="update">Update</FdButton>
          </FdActionBar>
          <div class="fd-form__group">
            <div class="fd-form__item">
              <div class="fd-input-group fd-input-group--before">
                <span class="fd-input-group__addon fd-input-group__addon--before">ID</span>
                <input disabled class type="text" id="headerid" name v-model="detail.id">
                <span class="fd-input-group__addon fd-input-group__addon--before">Name</span>
                <input class type="text" id name v-model="detail.name">
              </div>
            </div>
          </div>
        </FdTabItem>

        <FdTabItem label="Assignment" name="b">
          <selTable></selTable>
        </FdTabItem>

        <FdTabItem label="Tab C (disabled)" name="c" disabled>I am tab item C.</FdTabItem>
      </FdTabs>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <hr>Active Tab:
      <b>{{ activeTab }}</b>
    </FdPanel>
  </div>
</template>

<script>
/* eslint-disable */
import selTable from '@/components/selTable.vue'
import header from '@/components/header.vue'
import bus from '@/controller/eventBus.js'
export default {
  props: {
    header: {},
    detail: {
      type: Object,
      default: {}
    }
  },
  // props: {selectedId},
  // selectedId : selectedId,
  components: { selTable, header },
  data: () => ({ activeTab: 'a' }),
  mounted() {
    this.getUrlParam()
    bus.$on('userDefaultEvent', function(msg) {
      this.header.id = msg
    })
    // addAsync(1,2)
    //   .do(x => resultA = x)
    //   .flatMap(x => addAsync(x, 3))
    //   .do(x => resultB = x)
    //   .flatMap(x => addAsync(x, 4))
    //   .do(x => resultC = x)
    //   .subscribe(x => {
    //     console.log('total: ' + x)
    //     console.log(resultA, resultB, resultC)
    //   });
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

    update: function(entry) {
      let that = this
      console.log(this.detail.id)
      console.log(this.detail.name)

      // Make a request for a user with a given ID
      this.$axios

        .put(`http://localhost:3000/api/packages/${this.detail.id}`, this.detail)
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
  }
}
</script>

<style scoped>
/* input {margin-left: 10px }; */
</style>
