<template>
  <div class="selTable">
    <FdTable :headers="headers" selectionMode="multiple" :items="items">
      <template slot="row" slot-scope="{ item }">
        <FdTableRow @click="onRowClick(item)">
          <FdTableCell>
            <FdButton @click.stop="onButtonClick">{{ "remove" }}</FdButton>
          </FdTableCell>
          <FdTableCell>{{ item.lastName }}</FdTableCell>
          <FdTableCell>{{ item.building }}</FdTableCell>
        </FdTableRow>
      </template>
    </FdTable>
  </div>
</template>

<script>
export default {
  name: 'selTable',
  methods: {
    onButtonClick() {
      console.log('click on button')
    },
    onRowClick(item) {
      console.log('click on row representing item: %o', item)
    }
  },
  data: () => ({
    headers: ['', 'Pkg ID', 'SI ID'],
    items: [
      {
        id: '1',
        rating: 1,
        firstName: 'Chris',
        lastName: '1',
        building: '3'
      },
      {
        id: '2',
        rating: 2,
        firstName: 'Andi',
        lastName: '1',
        building: '2'
      },
      {
        id: '3',
        rating: 3,
        firstName: 'Sven',
        lastName: '1',
        building: '4'
      },
      {
        id: '4',
        rating: 4,
        firstName: 'Artur',
        lastName: '2',
        building: '1'
      }
    ]
  }),
  methods: {
    getAssgin: function() {
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
}
</script>