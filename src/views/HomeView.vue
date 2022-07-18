<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton type="primary" :loading="loading" @click="handleSubmit"
      >成功按钮</yangButton
    >
    <yangButton type="danger">危险按钮</yangButton>
    <yangButton type="warning">警告按钮</yangButton>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit() {
      this.loading = true
      setTimeout(() => {
        console.log('123')
        this.loading = false
      }, 3000)
    }
  }
}
</script>
