<template>
  <div>
    <Editor id="tinymce" :init="init"></Editor>
  </div>
</template>

<script>
// 富文本编辑器组件
import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入不显示
import Editor from "@tinymce/tinymce-vue"; //编辑器引入
import "tinymce/themes/silver/theme"; //编辑器主题
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/paste"; //粘贴过滤
import "tinymce/plugins/preview"; //预览
// @ is an alias to /src
export default {
  name: "tinymce",
  data() {
    return {
      init: {
        selector: "tinymce",
        language_url: "/tinymce/langs/zh_CN.js", //汉化路径是自定义的，一般放在public或static里面
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: `/tinymce/skins/content/default/content.css`,
        plugins: this.plugins, //插件
        //工具栏
        menubar: false, //隐藏菜单栏
        toolbar: "undo redo|bold italic forecolor|link preview", //字体大小
        height: 500, //高度
        placeholder: "在这里输入文字",
        branding: false, //隐藏右下角技术支持
        paste_preprocess: function (plugin, args) {
          console.log(args.content);
        },
        paste_as_text: true,
        //init_instance_callback为回调配置项
        init_instance_callback: (editor) => {
          // console.log(`回调----`)
          editor.on("input", (e) => {
            // console.log('文本框input触发')
            this.$emit("input", e.target.innerHTML);
          });
          editor.on("change", (e) => {
            // console.log('文本框change触发')
            this.$emit("change", e.level.content);
          });
        },
      },
    };
  },
  components: {
    Editor,
  },
  methods: {},
  mounted() {
    tinymce.init(this.init);
  },
};
</script>
<style scoped lang='less'>
</style>
