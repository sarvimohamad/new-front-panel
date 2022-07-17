<template>
  <loading-component/>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'InitLayout',
  components: { LoadingComponent },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$emit('layout-changed', 'NotAuthenticatedLayout')
      return false
    }
    this.checkUser()
  },
  methods: {
    checkUser: function () {
      BaseApi.get('user').then((response) => {
        this.$store.state.user = response.data.profile
        this.$store.state.permissions = response.data.permissions
        this.$emit('layout-changed', 'MainLayout')
      }).catch(() => {
        this.$emit('layout-changed', 'NotAuthenticatedLayout')
      })
    }
  }
}
</script>
