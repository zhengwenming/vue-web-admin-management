<template>
  <div>
    <textarea :id="tinymceId" class="tinymce-textarea" />
  </div>
</template>

<script>
import plugins from "./plugins";
import toolbar from "./toolbar";
// import { uploadImageCos } from "@/services/api/file";

import load from "./dynamicLoadScript";
// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN =
  "https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js";

// @ is an alias to /src
export default {
  name: "tinymce",
  props: {
    id: {
      type: String,
      default: function () {
        return (
          "vue-tinymce-" +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + "")
        );
      },
    },
    value: {
      type: String,
      default: "",
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    menubar: {
      type: String,
      default: "file edit insert view format table",
    },
    height: {
      type: [Number, String],
      required: false,
      default: 360,
    },
    width: {
      type: [Number, String],
      required: false,
      default: "auto",
    },
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        en: "en",
        zh: "zh_CN",
        es: "es_MX",
        ja: "ja",
      },
    };
  },
  components: {},
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, (err) => {
        if (err) {
          this.$message.error(err.message);
          return;
        }
        this.initTinymce();
      });
    },

    initTinymce() {
      const _this = this;
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        language: this.languageTypeList["zh"],
        height: this.height,
        body_class: "panel-body ",
        object_resizing: false,
        onvert_urls: false, //这个参数加上去就可以了，路径就带域名了
        relative_urls: false, //这个参数加上去就可以了，路径就带域名了
        remove_script_host: false, //这个参数加上去就可以了，路径就带域名了
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        // menubar: this.menubar,
        menubar: false, // 不显示菜单
        plugins: plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: (editor) => {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", () => {
            this.hasChange = true;
            this.$emit("input", editor.getContent());
          });
        },
        setup(editor) {
          editor.on("FullscreenStateChanged", (e) => {
            _this.fullscreen = e.state;
          });
        },
        // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        images_upload_handler(blobInfo, success, failure, progress) {
          progress(0);
          // const token = _this.$store.getters.token;
          // let params = {
          //   file: blobInfo.blob(),
          // };
          // const file = blobInfo.blob();
          // uploadImageCos({
          //   file,
          //   customizedPath: "active",
          //   success: (res) => {
          //     let url = "https://" + res.Location;
          //     success(url.toString());
          //     progress(100);
          //   },
          //   fail: (err) => {
          //     failure("上传图片失败！");
          //   },
          // });
        },
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped lang='less'>
</style>

