<template>
  <div>
    <div id="div1">
      <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";

// @ is an alias to /src
export default {
  name: "tinymce",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    // const editor = new E("#div1");
    const editor = new E(document.getElementById("div1"));
    editor.create();
  },
};
</script>
<style scoped lang='less'>
</style>
