<template>
  <div>
    <loading-component v-if="loading"/>
    <form @submit="submit" v-if="!loading">
      <input type="text" v-model="query.name" placeholder="name"/><br>
      <input type="email" v-model="query.email" placeholder="Email"/><br>
      <input type="password" v-model="query.password" placeholder="Password"/><br>
      <b-select :options="roles" v-model="query.roles" multiple />
      <input type="submit">
    </form>
  </div>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'UserCreateForm',
  components: { LoadingComponent },
  data () {
    return {
      roles: [],
      loading: false,
      query: {
        name: '',
        email: '',
        password: '',
        roles: []
      }
    }
  },
  mounted () {
    this.getRoleOption()
  },
  methods: {
    getRoleOption: function () {
      BaseApi.get('admin/roles', { params: { 'get-options': 1 } }).then((response) => {
        this.roles = response.data.data
      })
    },
    submit: function (e) {
      e.preventDefault()
      this.loading = true
      BaseApi.post('admin/users', this.query).then(() => {
        this.$router.push({ name: 'users' })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
