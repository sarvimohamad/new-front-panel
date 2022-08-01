<template>
  <tr>
    <td>
      <input type="checkbox" id='chkCheckAll'/>
    </td>
    <td v-text="item.id"></td>
    <td>{{item.slug}}</td>
    <td v-text="item.settings.title"></td>
    <td>
      <div class="col-6 d-flex justify-content-start">
        <button class="btn btn-danger" @click="removeItem" v-if="!loading">پاک کردن</button>
      </div>
    </td>
  </tr>
</template>

<script>

import BaseApi from '@/Api/BaseApi'

export default {
  name: 'ContentTypeListItem',
  props: ['item', 'id'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    removeItem: function () {
      this.loading = true
      BaseApi.delete(`admin/work-spaces/${this.id}/content-types/${this.item.id}`).then(() => {
        this.$emit('item-removed')
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
