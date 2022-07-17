<template>
  <div>
    <loading-component v-if="loading"/>
    <table v-if="!loading">
      <user-list-item v-for="(row, key) in list" :key="key" :item="row" v-on:item-removed="removeItemFromList(row.id)"/>
    </table>
  </div>
</template>

<script>

import BaseApi from '@/Api/BaseApi'
import UserListItem from '@/Pages/Users/UserListItem'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'UserList',
  components: {
    LoadingComponent,
    UserListItem
  },
  data () {
    return {
      list: [],
      query: {},
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    removeItemFromList: function (id) {
      this.list = this.list.filter((item) => {
        return item.id !== id
      })
    },
    getData: function () {
      this.loading = true
      BaseApi.get('admin/users', this.query).then((response) => {
        this.list = response.data.data
      }).catch(function (error) {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
