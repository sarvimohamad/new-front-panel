<template>
  <div>
    <p>
      {{ user.name }}
      خوش آمدی
      <logout-component/>
    </p>

    <div>
      <router-link to="/users">list</router-link>
      <br>
      <router-link to="/users-create">user-create</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LogoutComponent from '@/components/LogoutComponent'

export default {
  name: 'MainLayout',

  components: { LogoutComponent },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  }
}
</script>
