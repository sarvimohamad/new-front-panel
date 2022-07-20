<template>
  <div id="top-nav-bar" class="rounded-lg">
    <b-icon-list id="menuHolder" @click="toggleMenu"></b-icon-list>
    <span>{{this.$store.state.user.name}}</span>
    <div class="float-left" >
      <b-dropdown toggle-class="text-decoration-none" variant="link" no-caret>
        <template #button-content>
          <b-avatar src="../../public/images/person.png"></b-avatar>
        </template>
        <b-dropdown-item :to="{ name: 'profile'}">پروفایل</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>خروج</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavBarComponent',
  methods: {
    toggleMenu: function () {
      this.$store.state.isWide = !this.$store.state.isWide
    }
  }
}
</script>
