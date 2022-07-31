<template>
  <div class="login-page">
    <div class="container">
    <div class="row justify-content-md-center">
      <div id="login-box">
        <div class="row justify-content-center">
          <div class="row">
            <div class="d-flex align-items-center flex-column">
              <img src="../assets/styles/images/login-logo.png" alt="logo" class="login-logo mb-3"/>
            </div>
          </div>
          <div class="row">
            <div class="d-flex align-items-center flex-column">
              <h5 class="login-title-first ">خوش آمدید</h5>
            </div>
          </div>
          <div class="row">
            <div class="d-flex align-items-center flex-column">
              <h6 class="login-title-second mb-5">پنل مدیریت یکپارچه فام 724</h6>
            </div>
          </div>
        </div>
        <form class="form" action="" @submit="submit" v-show="!loading">
          <div class="form-group mb-1 email-input">
            <input type="email" class="form-control" v-model="query.email" placeholder="ایمیل">
          </div>
          <div class="form-group mb-1 password-input">
            <img src="../assets/styles/images/Show@3x.png" alt="show-pass" class="show-pass"/>
            <input type="password" class="form-control password" v-model="query.password" placeholder="رمز عبور">
          </div>
          <div class="form-group mb-1 captcha-input ">
            <input type="text" class="form-control" placeholder="کد امنیتی">
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col-6 align-items-end pt-3   forget">
                <a href="#" class="forget-password">فراموشی رمز عبور</a>
              </div>
              <div class="col-6 align-self-start col-6  ">
                <!--                  <img src="{asset('../assets/styles/images/captcha.png')}" class="captcha">-->
              </div>
            </div>
          </div>
          <div class=" mb-1">
            <button type="button" @click="submit" class="btn btn-primary btn-login w-100 btn-md">ورود</button>
          </div>
          <div class="d-flex flex-row  pt-1">
            <div class="p-2">
              <input type="checkbox">
            </div>
           <div class="p-2">
             <a style="color: white" class="text-decoration-none" href="/register" ><small>مرا به خاطر بسپار</small></a>
           </div>
          </div>
        </form>
        <loading-component v-show="loading"/>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'LoginComponent',
  components: { LoadingComponent },
  data () {
    return {
      loading: false,
      query: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function () {
      this.loading = true
      BaseApi.post('login', this.query)
        .then(response => {
          localStorage.setItem('token', response.data.token)
          location.reload()
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
