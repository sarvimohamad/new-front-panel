<template>
  <div>
    <form @submit="submit" v-show="!loading">
      <input type="text" v-model="query.email"/>
      <input v-model="query.password"/>
      <b-button @click="submit">ورود</b-button>
    </form>
    <loading-component v-show="loading"/>
  </div>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'LoginComponent',
  components: { LoadingComponent },
  data () {
    return {
      loading: false,
      query: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function () {
      this.loading = true
      BaseApi.post('login', this.query)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          location.reload()
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
