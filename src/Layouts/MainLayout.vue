<template>
  <div id="main">
    <div :class="cssClassOverlay" id="menuOverlay" @click="toggleMenu"></div>
    <sidebar-component :class="cssClass"/>
    <div id="content" :class="cssClass">
      <top-nav-bar-component />
      <div id="page">
        <router-view/>
      </div>
    </div>
    <div class="text-center pb-3">
      <small class="text-primary">sssss</small>
    </div>
  </div>
</template>

<script>
// import LogoutComponent from '@/components/LogoutComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TopNavBarComponent from '@/components/TopNavBarComponent'

export default {
  name: 'MainLayout',

  components: { TopNavBarComponent, SidebarComponent },
  methods: {
    toggleMenu: function () {
      this.$store.state.isWide = !this.$store.state.isWide
    }
  },
  computed: {
    user: function () {
      return this.$store.state.user
    },
    cssClass: function () {
      return {
        wide: this.$store.state.isWide
      }
    },
    cssClassOverlay: function () {
      return {
        wide: this.$store.state.isWide,
        'd-none': this.$store.state.isWide,
        'd-block': !this.$store.state.isWide,
        'd-md-none': true
      }
    }
  }
}
</script>
