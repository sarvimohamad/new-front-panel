<template>
  <div>
    <loading-component v-if="loading"/>
    <form @submit="submit" v-if="!loading">
      <input type="text" v-model="query.slug" placeholder="slug"/><br>
      <input type="text" v-model="query.settings.title" placeholder="title"/>
      <input type="submit">
    </form>
  </div>
</template>

<script>
import BaseApi from '@/Api/BaseApi'
import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'ContentTypeCreate',
  components: { LoadingComponent },
  props: ['id'],
  data () {
    return {
      loading: false,
      query: {
        slug: '',
        settings: {
          title: ''
        }
      }
    }
  },
  methods: {
    submit: function (e) {
      e.preventDefault()
      this.loading = true
      BaseApi.post(`admin/work-spaces/${this.id}/content-types`, this.query).then((response) => {
        window.location.reload()
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
