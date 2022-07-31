<template>
  <div id="sidebar">
    <aside>
      <!-- Brand Logo -->
      <div class="row brand-link p-5">
        <div class="col-10 text-height">
          <span class="brand-text fw-bold">پنل مدیریت فام724</span>
        </div>
        <div class="col-2">
          <img src="../assets/styles/images/login-logo.png" alt="AdminLTE Logo" class="brand-image img-circle">
        </div>
      </div>
      <div class="ul-box mt-5">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="row">
              <div class="col-2 d-flex justify-content-end">
                <img src="../assets/styles/images/menu-icons/dashboard-dark-icon.svg" alt="dashboard" class="">
              </div>
              <div class="col-10 ">
                <router-link class="router-link" :to="{name:'users'}">لیست کاربران</router-link>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-2 d-flex justify-content-end">
                <img src="../assets/styles/images/menu-icons/admin-light-icon.svg" alt="dashboard" class="">
              </div>
              <div class="col-10 ">
                <a class="">مدیریت کاربران پنل</a>
              </div>
            </div>
          </li>
          <li class="list-group-item ">
            <div class="collapse-item" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false"
                 aria-controls="collapseExample">
              <div class="row">
                <div class="col-2 d-flex justify-content-end">
                  <img src="../assets/styles/images/menu-icons/admin-light-icon.svg" alt="dashboard" class="">
                </div>
                <div class="col-10 ">
                  <div class="row">
                    <div id="request" @click="changeArrow($event)" class="cursor-pointer">
                      <div class="d-flex justify-content-start">
                        <span>مدیریت وب سایت ها</span>
                      </div>
                      <div class="d-flex justify-content-end">
                        <img src="../assets/styles/images/left Arrow 2@3x-min.png" alt="dashboard"
                             :class="this.arrowName=='request' ? 'arrow-down' : 'arrow-left'">
                      </div>
                    </div>
                  </div>
                </div>
                <div @click="changeArrow('')" class="collapse" id="collapseExample">
                  <ul class="ul-sidebar">
                    <li @click="goToUrl('/users')">users</li>
                    <li> رد شده</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-2 d-flex justify-content-end">
                <img src="../assets/styles/images/menu-icons/Iconly_Bulk_Document.svg" alt="dashboard" class="">
              </div>
              <div class="col-10 ">
                <a class="">لیست فعالیت ها</a>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-2 d-flex justify-content-end">
                <img src="../assets/styles/images/menu-icons/Iconly_Bulk_Login.svg" alt="dashboard" class="">
              </div>
              <div class="col-10 ">
                <logout-component class="router-link"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
import LogoutComponent from '@/components/LogoutComponent'
export default {
  name: 'SidebarComponent',
  components: { LogoutComponent },
  data: function () {
    return {
      arrowName: ''
    }
  },
  methods: {
    changeArrow (event) {
      const linkName = event?.currentTarget?.id !== undefined && event?.currentTarget?.id !== null ? event?.currentTarget?.id : ''
      if (this.arrowName !== '') {
        this.arrowName = ''
      } else {
        this.arrowName = linkName
      }
    },
    goToUrl (path) {
      if (path !== window.location.pathname) {
        this.$router.push({ path: path })
      }
    }
  }
}
</script>
