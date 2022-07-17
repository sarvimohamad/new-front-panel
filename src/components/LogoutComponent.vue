<template>
  <a @click="logout">Logout</a>
</template>

<script>
export default {
  name: 'LogoutComponent',
  methods: {
    logout: function () {
      localStorage.clear()
      location.reload()
    }
  }
}
</script>
