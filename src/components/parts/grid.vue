<template>
  <div class="grid-section"></div>
</template>
<script>
  import {COINONE_URL} from "../gv";

  const url = `${COINONE_URL}/chart/frame/?site=Coinone&unit_time=`;

  export default {
    name: "slide",
    data () {
      return {
        time: Date.now(),
        url: '',
        selected: '',
        period: [ '1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h', '1d', '1w' ],
      }
    },
    methods: {
      chartSlide (period) {
        this.selected = period;
        this.url = url + period;
      }
    },
    created () {
      this.url = url + this.period[ 0 ];
      this.time = Date.now();
    }
  }
</script>

<style>

</style>


<style></style>
