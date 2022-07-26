<template>
  <div id="top-nav-bar" class="rounded-lg">
    <div class="d-flex bd-highlight ">
      <div class=" p-2 w-100 bd-highlight">
        <b-icon-list id="menuHolder" @click="toggleMenu"></b-icon-list>
        <span>{{ this.$store.state.user.name }}</span>
      </div>
      <div class="dropdown">
        <a class="dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img class="top-nav-img rounded-circle" src="../assets/styles/images/user.png"/>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
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
<style scoped lang="scss">
@import "src/assets/styles/login";
</style>
