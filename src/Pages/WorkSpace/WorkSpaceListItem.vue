<template>
  <tr>
    <td>
      <input type="checkbox" id='chkCheckAll'/>
    </td>
    <td v-text="item.id"></td>
    <td>{{item.title}}</td>
    <td v-text="item.domain"></td>
    <td class="row">
      <loading-component v-if="loading"/>
      <div class="col-6 d-flex justify-content-end">
        <router-link class="btn btn-dark"  :to="{name:'show-work-space', params: {id:item.id}}">ویرایش</router-link>
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
  name: 'WorkSpaceListItem',
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
      BaseApi.delete(`admin/work-spaces/${this.item.id}`).then(() => {
        this.$emit('item-removed')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
