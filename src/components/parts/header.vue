<template>
  <header class="blocks-header">
    <img class="blocks-logo" alt="BLOCKS"
         src="/static/img/blocks_logo_white.svg" />
    <h1 class="blocks-title">{{ title }}</h1>
  </header>
</template>
<script>
  export default {
    name: 'header',
    props: {
      title: {
        default: 'blocks'
      }
    },
    data(){
      return {
      }
    }
  }
</script>
<style>
  .blocks-header {
    padding: 5vh 0 3vh;
    text-align: center;
  }
  .blocks-logo {
    height: 10vh;
    margin-bottom: 3vh;
  }
  .blocks-title {
    font-size: 5vh;
  }
</style>
