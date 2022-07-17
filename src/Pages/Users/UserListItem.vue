<template>
  <tr>
    <td>{{ item }}</td>
    <td>
      <router-link :to="{name:'show-user', params: {id:item.id}}">edit</router-link>
    </td>
    <td>
      <loading-component v-if="loading"/>
      <button @click="removeItem" v-if="!loading">Delete</button>
    </td>
  </tr>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'UserListItem',
  components: { LoadingComponent },
  props: ['item'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    removeItem: function () {
      this.loading = true
      BaseApi.delete(`admin/users/${this.item.id}`).then(() => {
        this.$emit('item-removed')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
