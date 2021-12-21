<template>
  <div class="articlemanagement">
    <!-- 搜索部分 -->
    <div class="search-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="审批人" class="p-l-10">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>

        <el-form-item label="活动区域" class="p-l-10">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="活动时间" class="p-l-10">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="f-center" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item class="p-l-10">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">新 建 文 章</el-button>
        </el-form-item>

      </el-form>
    </div>
    <!-- 表格展示部分 -->
    <div class="table-list">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="auto">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="130">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="editArticle(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增/编辑 -->

    <el-dialog title="新增文章" :visible.sync="dialogFormVisible">
      <div class="edit-data">

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="类别一" value="shanghai"></el-option>
              <el-option label="类别二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="是否原创">
            <el-switch v-model="form.delivery"></el-switch>
            <el-tag>{{form.delivery?'是':'否'}}</el-tag>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="定时发布">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章内容">
            <TEditor v-model="content" @input="tinymceInput" ref="tinymceRef" v-if="true"></TEditor>
            <Wangeditor v-if="false"></Wangeditor>

          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import TEditor from "@/components/tinymceCdn/tinymceCdn.vue";
import Wangeditor from "@/components/wangeditor.vue";

// @ is an alias to /src
export default {
  name: "articlemanagement",
  data() {
    return {
      content: "Welcome to Use Tinymce Editor",
      previewContent: "",
      dialogFormVisible: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  components: {
    TEditor,
    Wangeditor,
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    tinymceInput(val) {
      this.previewContent = val;
    },
    editArticle(row) {
      this.$router.push({ name: "ArticlemanagementEdit", parms: row });
    },
  },
  mounted() {},
};
</script>
<style scoped lang='less'>
.articlemanagement {
  /* 搜索表单 */
  .search-form {
  }
  .table-list {
    width: 100%;
  }
}
</style>
