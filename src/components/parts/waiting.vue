<template>
  <div class="waiting-section">
    <app-header :title="'대기번호 안내'"></app-header>
    <p class="blocks_waiting_info">
      인포테스크에서 상담목적을 선택하시고,<br>휴대폰 번호를 입력해주세요.<br>차례가 되면 문자메시지로 알려드립니다.<br>
    </p>
    <table class="blocks_waiting_table">
      <tbody>
      <tr>
        <th>창구번호</th>
        <th>현재상담번호</th>
      </tr>
      <tr>
        <td>1번</td>
        <td>00</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/parts/header'
  export default {
    name: "waiting",
    components: {
      'app-header': HeaderComponent
    }
  }
</script>

<style lang="scss" scoped>
  .app-waiting {
    display: inline-block;
    width: auto;
    height: 10vh;
    margin: 0 auto 3vh;
  }
  .waiting-title {
    text-align: center;
    font-size: 5vh;
    margin: 5vh 0 2vh;
  }
  .logo {
    display: inline-block;
    width: auto;
    height: 10vh;
    margin: 0 auto 3vh;
  }
</style>
