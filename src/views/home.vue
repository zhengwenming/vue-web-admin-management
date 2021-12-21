<template>
  <div class="manage_page fillcontain">

    <div class="h-100">
      <el-row style="height: 100%;">
        <el-col class="my-el-menu" :span="4"
          style="min-height: 100%; background-color: #fff;border-right: 1px solid #e6e6e6;">
          <!-- 左侧header -->
          <div class="leftHeader flex f-fff" v-if="initThemeConfig.leftHeader">
            <img src="@/assets/img/axlogo.png" alt="">
            <h1>爱心有家后台管理系统</h1>
          </div>
          <el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#fff"
            text-color="#303133" active-text-color="#409eff" router>
            <div v-for="item,index in menulist" :key="index">
              <el-menu-item v-if="!item.menuitem.length" :index="item.index"><i class="el-icon-menu"></i>{{item.title}}
              </el-menu-item>
              <el-submenu class="bg-1F2D3D" :index="item.index" v-else>
                <template slot="title"><i class="el-icon-document"></i>{{item.title}}</template>
                <el-menu-item v-for="subitem,subindex in item.menuitem" :key="subindex" :index="subitem.index">
                  {{subitem.name}}</el-menu-item>
              </el-submenu>
            </div>
          </el-menu>
        </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <!-- 右侧header -->
          <div class="rightHeader flex f-flex-r f-fff" v-if="initThemeConfig.rightHeader">
            <el-popover placement="bottom" width="150" trigger="click">
              <div class="menu-item" @click="logOut">登出</div>
              <div class="user-data" slot="reference">
                <div class="flex">
                  <img src="@/assets/img/user.jpg" alt="">
                  {{username}}
                </div>
              </div>
            </el-popover>
          </div>
          <!-- 使用面包屑导航 或者菜单选项卡导航 -->

          <div class="nav-header flex">
            <!-- 面包屑Nav -->
            <crumbsNav v-if="initThemeConfig.useBreadcrumbOrMenu" />
            <menuNav v-else />
          </div>

          <!-- 视图 -->
          <div class="p-20">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>

        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import initThemeConfig from "@/config/initThemeConfig.js";
import crumbsNav from "@/components/crumbsNav.vue";
import menuNav from "@/components/menuNav.vue";

export default {
  components: {
    crumbsNav,
    menuNav,
  },
  data() {
    return {
      initThemeConfig: initThemeConfig,
      username: "咕叽咕叽先生",
      menulist: [
        {
          title: "首页",
          index: "home",
          menuitem: [],
        },
        {
          title: "数据管理",
          index: "title",
          menuitem: [
            { index: "product", name: "产品" },
            { index: "axdatalist", name: "数据列表" },
            { index: "articlemanagement", name: "文章列表" },
          ],
        },
      ],
    };
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    // 登出
    logOut() {
      this.$router.push("/");
    },
  },
  mounted() {
    // this.$axios("www.baidu.com", "get", {},true).then(() => {});
  },
};
</script>

<style lang="less" scoped>
.leftHeader {
  width: 100%;
  height: 55px;
  background-color: #409eff;
  padding-left: 20px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
  h1 {
    font-size: 20px;
  }
}
.rightHeader {
  width: 100%;
  height: 55px;
  background-color: #409eff;
  .user-data {
    padding-right: 30px;
    cursor: pointer;
    div {
      font-size: 15px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
//
.nav-header {
  width: 100%;
  height: 45px;
  background-color: #eff2f7;
  // padding-left: 10px;
}

.menu-item {
  cursor: pointer;
  margin: -8px;
  padding: 10px;
  &:hover {
    background-color: #86bffa;
    color: #fff;
  }
}

.my-el-menu /deep/.el-menu-item.is-active,
.my-el-menu /deep/.el-menu-item:focus,
.my-el-menu /deep/.el-menu-item:hover,
.my-el-menu /deep/.el-submenu__title:hover {
  color: #409eff !important;
  background-color: #ecf5ff !important;
}
</style>
