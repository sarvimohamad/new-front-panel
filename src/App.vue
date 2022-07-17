<template>
  <div>
    <component :is="layout" v-on:layout-changed="changeLayout"/>
  </div>
</template>

<script>
import InitLayout from '@/Layouts/InitLayout'
import MainLayout from '@/Layouts/MainLayout'
import NotAuthenticatedLayout from '@/Layouts/NotAuthenticatedLayout'

export default {
  name: 'App',
  components: { InitLayout, MainLayout, NotAuthenticatedLayout },
  data () {
    return {
      layout: 'InitLayout'
    }
  },
  methods: {
    changeLayout: function (layout) {
      this.layout = layout
    }
  }
}
</script>
