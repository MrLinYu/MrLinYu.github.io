<template>
  <div class="header-container">
    <ul>
      <li>这是标题一</li>
      <li>这是标题一</li>
      <li>这是标题一</li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderNav extends Vue {

}
</script>
<style scoped lang='scss'>
.header-container {
  width: 200px;
  height: 100%;
  border-right: 1px solid #dfdfdf;
  background: #ffff;
}
</style>
