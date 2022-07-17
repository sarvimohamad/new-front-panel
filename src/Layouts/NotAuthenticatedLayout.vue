<template>
  <div>
    <login-component/>
  </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent'

export default {
  name: 'NotAuthenticatedLayout',
  components: { LoginComponent }
}
</script>
