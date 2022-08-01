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
            <th>slug</th>
            <th>delete</th>
          </tr>
          </thead>
          <tbody id="myTable" class=" text-center">
            <ContentTypeListItem v-for="(row, key) in list" :key="key" :item="row" :id="id" v-on:item-removed="removeItemFromList(row.id)"/>
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
import LoadingComponent from '@/components/LoadingComponent'
import ContentTypeListItem from '@/Pages/ContentType/ContentTypeListItem'

export default {
  name: 'ContentTypeList',
  components: {
    ContentTypeListItem,
    LoadingComponent
  },
  props: ['id'],
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
      BaseApi.get(`admin/work-spaces/${this.id}/content-types`, { params: this.query }).then((response) => {
        this.list = response.data.data
        this.meta = response.data.meta
      }).catch(function (error) {
        console.log(error)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
