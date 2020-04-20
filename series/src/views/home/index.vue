<template>
  <div>
    <h1>这是body</h1>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang='scss'></style>
