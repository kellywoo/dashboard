<template>
  <div class="app-grid">
    <div class="left-panel">
      <app-youtube></app-youtube>
    </div>
    <div class="right-panel">
      <app-wait></app-wait>
    </div>
  </div>
</template>
<script>
  import WaitComponent from '@/components/parts/waiting';
  import YoutubeComponent from '@/components/parts/youtube';

  export default {
    name: 'grid-youtube',
    components: {
      'app-wait': WaitComponent,
      'app-youtube': YoutubeComponent
    }
  }
</script>
