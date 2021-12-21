import Vue from 'vue'
import Vuex from 'vuex'
import $router from '@/router';

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: 'token',
    editableTabs: [{
      title: "首页",
      name: "/home",
      canclose: false,
    }],
    // 当前菜单选中的 菜单
    editableTabsValue: '/home',
    // isloading
    axiosLoading: false
  },
  // 同步
  mutations: {
    //存储数据 设置VUEX
    memoryVuexData(state, items) {
      for (var key in items) {
        state[key] = items[key]
      }
    },
    // 设置loading flag
    setLoading(state, items) {
      state.axiosLoading = items
    },
    // 增加menuNav 菜单数据
    addMenuNav(state, items) {
      // 设置当前选中项目
      state.editableTabsValue = items.name;
      let canAdd = true;
      state.editableTabs.forEach((e) => {
        if (e.name == items.name) {
          canAdd = false
          return
        }
      })
      // 防止重复添加
      if (!canAdd) {
        return
      }
      state.editableTabs.push(items)
    },
    // 删除menuNav 菜单数据
    removeMenuNav(state, items) {
      let tabs = state.editableTabs;
      let activeName = state.editableTabsValue;
      console.log(activeName, 'activeName')
      console.log(tabs, 'tabs')
      if (activeName === items.targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === items.targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            console.log(nextTab, 'nextTab')

            if (nextTab) {
              console.log(nextTab)
              activeName = nextTab.name;
            }
          }
        });
      }
      state.editableTabsValue = activeName;
      $router.push(activeName)
      state.editableTabs = tabs.filter((tab) => tab.name !== items.targetName);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
    key: 'cmsData',
    reducer: (val) => {
      return {
        token: val.token,
        editableTabsValue: val.editableTabsValue,
        editableTabs: val.editableTabs
      }
    },
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) => sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key)
    }
  })]
})