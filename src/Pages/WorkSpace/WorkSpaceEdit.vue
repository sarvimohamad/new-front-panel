<template>
  <b-row>
    <b-col sm="6">
      <loading-component v-if="loading"/>
      <form @submit="submit" v-if="!loading">
        <input type="text" v-model="query.title" placeholder="title"/><br>
        <input type="text" v-model="query.domain" placeholder="domain"/><br>
        <input type="text" v-model="query.db_connection.host" placeholder="DB Host"/><br>
        <input type="text" v-model="query.db_connection.port" placeholder="DB Port"/><br>
        <input type="text" v-model="query.db_connection.database" placeholder="DB Name"/><br>
        <input type="text" v-model="query.db_connection.username" placeholder="DB Username"/><br>
        <input type="text" v-model="query.db_connection.password" placeholder="DB Password"/><br>
        <b-select :options="users" v-model="query.users" multiple />
        <input type="submit">
      </form>
    </b-col>
    <b-col sm="6">
      <content-type-list :id="query.id" v-if="query.id" />
      <content-type-create :id="query.id" v-if="query.id"/>
    </b-col>
  </b-row>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'
import ContentTypeList from '@/Pages/ContentType/ContentTypeList'
import ContentTypeCreate from '@/Pages/ContentType/ContentTypeCreate'

export default {
  name: 'WorkSpaceCreate',
  components: { ContentTypeCreate, ContentTypeList, LoadingComponent },
  data () {
    return {
      users: [],
      loading: false,
      query: {
        title: '',
        domain: '',
        db_connection: {},
        users: []
      }
    }
  },
  mounted () {
    this.getUserOption()
    this.getData()
  },
  methods: {
    getUserOption: function () {
      BaseApi.get('admin/users', { params: { 'get-options': 1 } }).then((response) => {
        this.users = response.data.data
      })
    },
    getData: function () {
      this.loading = true
      BaseApi.get(`admin/work-spaces/${this.$route.params.id}`).then((response) => {
        this.query = response.data.data
      }).finally(() => {
        this.loading = false
      })
    },
    submit: function (e) {
      e.preventDefault()
      this.loading = true
      BaseApi.put(`admin/work-spaces/${this.$route.params.id}`, this.query).then(() => {
        this.$router.push({ name: 'workspace' })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
