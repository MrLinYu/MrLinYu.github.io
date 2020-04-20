<template>
  <div class="header-container">
    <el-menu
    router
    :unique-opened='true'
    class="el-menu-vertical-demo"
    background-color="#f9f9f9"
    text-color="#333"
    active-text-color="#ffd04b">
      <el-submenu v-for="(route, index) in routes" :key="index" :index='route.path'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ route.name }}</span>
        </template>
        <el-menu-item-group v-for="(route2, index2) in route.children" :key="index2">
          <el-menu-item :index="route2.path">
            <template slot="title">{{ route2.name}}</template>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import preRoutes from '@/router'
export default {
  data () {
    return {
      routes: []
    }
  },
  created () {
    this.getNavs()
  },
  methods: {
    getNavs () {
      const routes = preRoutes.options.routes.filter(route => route.path.length > 1)
      this.routes = routes
      console.log(this.routes)
    }
  }
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
