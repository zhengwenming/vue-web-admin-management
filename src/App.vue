<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  #app{
    width: 100%;
    height: 100%;
  }
  // 样式重置
	@import './style/common-reset';
  // 公共样式
	@import './style/common-style';
</style>
