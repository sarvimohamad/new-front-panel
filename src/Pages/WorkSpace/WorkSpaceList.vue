<template>
  <div>
    <loading-component v-if="loading"/>
    <div class="col-12" v-if="!loading">
      <div class="d-flex pt-3 m-2">
        <table class="table table-content">
          <thead class="table-dark text-center ">
          <tr>
            <td>
              <input type="checkbox" id='chkCheckAll'/>
            </td>
            <th>id</th>
            <th>نام</th>
            <th>دامنه</th>
            <th>عملیات</th>
          </tr>
          </thead>
          <tbody id="myTable" class=" text-center">
          <WorkSpaceListItem v-for="(row, key) in list" :key="key" :item="row" v-on:item-removed="removeItemFromList(row.id)"/>
          </tbody>
        </table>
      </div>
      <b-pagination
        align="center"
        class="ltr"
        v-model="query.page"
        v-on:change="paginate"
        :total-rows="meta.total"
        :per-page="meta.per_page"
        v-if="meta.total > meta.per_page"
      ></b-pagination>
    </div>
  </div>
</template>

<script>

import BaseApi from '@/Api/BaseApi'
import WorkSpaceListItem from '@/Pages/WorkSpace/WorkSpaceListItem'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'WorkSpaceList',
  components: {
    LoadingComponent,
    WorkSpaceListItem
  },
  data () {
    return {
      list: [],
      query: {
        page: 1
      },
      meta: {},
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
    paginate: function (page) {
      this.query.page = page
      this.getData()
    },
    getData: function () {
      this.loading = true
      BaseApi.get('admin/work-spaces', { params: this.query }).then((response) => {
        this.list = response.data.data
        this.meta = response.data.meta
        console.log(this.list)
      }).catch(function (error) {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
