<template>
  <div class="home-warpper">
    <slide-nav></slide-nav>
    <div class="content-warpper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import SlideNav from '@/views/slide-nav'
export default {
  components: {
    SlideNav
  }
}
</script>
<style scoped lang='scss'>
.home-warpper {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  min-height: 100%;
}
.content-warpper {
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;;
}
</style>
