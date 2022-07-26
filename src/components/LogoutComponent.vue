<template>
  <a @click="logout">خروج</a>
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
