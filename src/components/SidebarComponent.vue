<template>
  <div id="sidebar">
      <aside>
        <!-- Brand Logo -->
        <div class="row brand-link p-5">
          <div class="col-10 text-height">
            <span class="brand-text fw-bold">پنل مدیریت فام724</span>
          </div>
          <div class="col-2">
            <img src="../assets/styles/images/login-logo.png"  alt="AdminLTE Logo" class="brand-image img-circle">
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
                        <a class="">داشبورد</a>
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
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
          </div>
        <!-- /.sidebar -->
      </aside>
  </div>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/login";
</style>
