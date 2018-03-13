<template>
  <div class="app-slide">
    <div class="left-panel">
      <app-slide></app-slide>
    </div>
    <div class="right-panel">
      <app-wait></app-wait>
    </div>
  </div>
</template>
<script>
  import WaitComponent from '@/components/parts/waiting';
  import SlideComponent from '@/components/parts/slide';

  export default {
    name: 'grid-page',
    components: {
      'app-wait': WaitComponent,
      'app-slide': SlideComponent
    }
  }
</script>
