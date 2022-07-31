<template>
  <tr>
    <td>
      <input type="checkbox" id='chkCheckAll'/>
    </td>
    <td v-text="item.id"></td>
    <td>{{item.name}}</td>
    <td v-text="item.email"></td>
    <td class="row">
      <loading-component v-if="loading"/>
      <div class="col-6 d-flex justify-content-end">
        <router-link class="btn btn-dark"  :to="{name:'show-user', params: {id:item.id}}">ویرایش</router-link>
      </div>
      <div class="col-6 d-flex justify-content-start">
        <button class="btn btn-danger" @click="removeItem" v-if="!loading">پاک کردن</button>
      </div>
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
<style scoped lang="scss">
@import "src/assets/styles/login";
</style>
