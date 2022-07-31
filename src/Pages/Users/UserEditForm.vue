<template>
  <div>
    <loading-component v-if="loading"/>
    <form v-if="!loading" @submit="submit">
      <input v-model="query.name" placeholder="name" type="text"/><br>
      <input v-model="query.email" placeholder="Email" type="email"/><br>
      <input v-model="query.password" placeholder="password" type="password"/><br>
      <b-select :options="roles" v-model="query.roles" multiple />
      <input type="submit">
    </form>
  </div>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'UserEditForm',
  components: { LoadingComponent },
  data () {
    return {
      loading: false,
      roles: [],
      query: {
        roles: []
      }
    }
  },
  mounted () {
    this.getRoleOption()
    this.getUserData()
  },
  methods: {
    getRoleOption: function () {
      BaseApi.get('admin/roles', { params: { 'get-options': 1 } }).then((response) => {
        this.roles = response.data.data
      })
    },
    getUserData: function () {
      this.loading = true
      BaseApi.get(`admin/users/${this.$route.params.id}`).then((response) => {
        this.query = response.data.data
      }).finally(() => {
        this.loading = false
      })
    },
    submit: function (e) {
      e.preventDefault()
      this.loading = true
      BaseApi.put(`admin/users/${this.$route.params.id}`, this.query).then(() => {
        this.$router.push({ name: 'users' })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
