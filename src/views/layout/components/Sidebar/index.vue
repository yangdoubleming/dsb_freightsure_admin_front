<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'menus'
    ]),
    routes() {
      // return this.menus.data.menuList
        return  [
          {
            title: "申请管理",
            list: [{
              name: "申请列表",
              url: "userInfo"
            },{
              name: "驳回列表",
              url: "loanRecords"
            }],
            class: "userManage"
          },
          {
            title: "订单管理",
            list: [{
              name: "订单列表",
              url: "orderList"
            }],
            class: "userManage"
          },
        ]
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
