
<template>
  <el-tabs @tab-click='showView' v-model="$store.state.editableTabsValue" class="menuNav" stretch type="card"
    @tab-remove="removeTab">
    <el-tab-pane :closable='item.canclose' v-for="(item, index) in $store.state.editableTabs" :key="index"
      :label="item.title" :name="item.name">
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: "/home",
    };
  },
  computed: {
    // editableTabs:function(){
    //   return this.$store.state.editableTabs
    // }
  },
  methods: {
    showView(tabpane) {
      if (this.$route.path == tabpane.name) {
        return;
      }
      this.$router.push(tabpane.name);
    },
    removeTab(targetName) {
      this.$store.commit("removeMenuNav", { targetName });
    },
  },
  mounted() {},
};
</script>

<style scoped lang='less'>
.menuNav {
  position: relative;
  top: 2px;
  /deep/.el-tabs__header {
    background: #fff;
    margin-bottom: 0;
  }
}
</style>