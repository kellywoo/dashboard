<template>
  <h1 class="blocks-header">
    <img class="blocks_waiting_logo" alt="BLOCKS"
         src="assets/img/blocks_logo_white.svg" />
    what is
    {{ title }}
  </h1>
</template>
<script>
  export default {
    name: 'header',
    data(){
      return {
        title: 'blocks'
      }
    }
  }
</script>
<style></style>
