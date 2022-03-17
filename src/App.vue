<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  #app{
    height: 100%;
  }
  // 样式重置
	@import './style/common-reset';
  // 公共样式
	@import './style/common-style';
</style>
