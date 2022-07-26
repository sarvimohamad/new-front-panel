<template>
  <div id="main">
    <div :class="cssClassOverlay" id="menuOverlay" @click="toggleMenu"></div>
    <sidebar-component :class="cssClass"/>
    <div id="content" :class="cssClass">
      <top-nav-bar-component />
      <div id="page">
        <router-view/>
      </div>
      <footer-component/>
    </div>
  </div>
</template>

<script>
// import LogoutComponent from '@/components/LogoutComponent'
// import RootComponent from '@/components/RootComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TopNavBarComponent from '@/components/TopNavBarComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'MainLayout',

  components: { TopNavBarComponent, SidebarComponent, FooterComponent },
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
