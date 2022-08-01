<template>
  <div>
    <loading-component v-if="loading"/>
    <b-form @submit="submit" v-if="!loading">
      <b-form-group label="نام">
        <b-form-input type="text" v-model="query.name" placeholder="name"/>
      </b-form-group>
      <b-form-group label="ایمیل">
        <b-form-input type="text" v-model="query.email" placeholder="email"/>
      </b-form-group>
      <b-form-group label="password">
        <b-form-input type="password" v-model="query.password" placeholder="password"/>
      </b-form-group>
      <b-form-group label="roles">
        <b-form-select :options="roles" v-model="query.roles" multiple />
      </b-form-group>
      <div class="float-start">
        <b-button variant="success">ثبت</b-button>
      </div>
    </b-form>
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
