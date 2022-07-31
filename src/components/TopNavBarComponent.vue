<template>
  <div id="top-nav-bar" class="rounded-lg">
    <div class="row">
      <div class="col">
        <b-icon-list id="menuHolder" @click="toggleMenu"></b-icon-list>
        <span>{{ this.$store.state.user.name }}</span>
      </div>
      <div class="col-auto">
        <div class="d-flex ">
          <div class="p-2">
            <img class="" src="../assets/styles/images/SVG/notification-icon.svg"/>
          </div>
          <div class="p-2">
            <img class="" src="../assets/styles/images/SVG/message-icon.svg"/>
          </div>
          <div class="p-2">
            <img class="top-nav-img  " src="../assets/styles/images/avatar04.png"/>
          </div>
        </div>
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
