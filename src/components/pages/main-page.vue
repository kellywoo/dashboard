<template>
  <div class="app-main">
  <app-header :title="'지점 선택'"></app-header>
    <select class="branches">
    </select>
  </div>
</template>
<script>

  import HeaderComponent from '@/components/parts/header'
  export default {
    name: 'main',
    components: {
      'app-header': HeaderComponent
    }
  }
</script>
<style></style>
