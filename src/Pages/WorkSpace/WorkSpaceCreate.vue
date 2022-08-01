<template>
  <div>
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
  </div>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'WorkSpaceCreate',
  components: { LoadingComponent },
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
  },
  methods: {
    getUserOption: function () {
      BaseApi.get('admin/users', { params: { 'get-options': 1 } }).then((response) => {
        this.users = response.data.data
      })
    },
    submit: function (e) {
      e.preventDefault()
      this.loading = true
      BaseApi.post('admin/work-spaces', this.query).then(() => {
        this.$router.push({ name: 'workspace' })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
