<template>
<div class="app-grid">
  <div class="left-panel">
    <app-grid></app-grid>
  </div>
  <div class="right-panel">
    <app-wait></app-wait>
  </div>
</div>
</template>
<script>
  import WaitComponent from '@/components/parts/waiting';
  import GridComponent from '@/components/parts/grid';

export default {
  name: 'grid-page',
  components: {
    'app-wait': WaitComponent,
    'app-grid': GridComponent
  }
}
</script>
