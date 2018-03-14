<template>
  <div class="wait-section">
    <app-header :title="'대기번호 안내'"></app-header>
    <p class="wait-info">
      인포테스크에서 상담목적을 선택하시고,<br>휴대폰 번호를 입력해주세요.<br>차례가 되면 문자메시지로 알려드립니다.<br>
    </p>
    <table class="wait-tbl">
      <thead>
      <tr>
        <th scope="row">창구번호</th>
        <th scope="row">현재상담번호</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" class="flash-animate">
        <td>{{item.number}}번</td>
        <td>{{twoDigit(item.in_progress)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/parts/header';
  import axios from 'axios';
  export default {
    data(){
      return {items: [
        {number: 1, in_progress: 22},
        {number: 2, in_progress: 11},
        {number: 3, in_progress: 13},
        {number: 4, in_progress: 25},
        ],
      timer: null}
    },
    name: "waiting",
    methods: {
      twoDigit(n){
        return n < 10 ? '0' + n.toString() : n.toString();
      },
      fetch(){
//        axios.get('http://dataev-blocks')
//          .then(v => console.log(v);
      }
    },
    created () {
      this.timer = setInterval(this.fetch.bind(this), 2000);
    },
    beforeDestory () {
      clearInterval(this.timer)
    },
    components: {
      'app-header': HeaderComponent
    }
  }
</script>

<style lang="scss" scoped>

  .wait-info {
    font-size: 2.2vh;
    text-align: center;
    margin-bottom: 2vh;
    padding: 2vh 0.5em;
    font-weight: 300;
    line-height: 1.8;
    opacity: 0.8;
  }

  .wait-tbl {
    width: 80%;
    max-width: 48em;
    margin: 3vh auto 0;
    background-color: #2d2e31;
    border-radius: 2vh;
    text-align: center;
    th {
      padding: 3vh 1.4vh 1vh;
      opacity: 0.6;
      font-size: 3vh;
      font-weight: 300;
      text-align: center;
    }
    td {
      font-weight: 700;
      font-size: 4.5vh;
      line-height: 1.3;
      letter-spacing: 0.1em;
      padding: 1.2vh 1.4vh 1.2vh;
    }
    tr:last-child td {
      padding-bottom: 4vh;
    }
  }
  @keyframes flash {
    0%,50%,to {
      opacity: 1
    }

    25%,75% {
      opacity: 0
    }
  }

  .flash-animate {
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-iteration-count: 2;
    animation-name: flash
  }
</style>
