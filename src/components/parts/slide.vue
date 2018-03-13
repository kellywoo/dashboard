<template>
  <div class="slide-section">
    <iframe class="fixed_iframe" :src="url"></iframe>
  </div>
</template>
<script>
  import {COINONE_URL} from "../gv";
  const url = `${COINONE_URL}/chart/apps/slide/`;

  export default {
    name: 'slide',
    data(){
      return {
        url: url
      }
    }
  }
</script>
<style></style>
