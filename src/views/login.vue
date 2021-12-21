<template>
  <div class="login flex flex-center">

    <div class="login-container">
      <h1 class="f-center f-fff">
        Login
      </h1>
      <el-input v-model="input" placeholder="username"></el-input>
      <el-input v-model="input" placeholder="password"></el-input>
      <el-button class="login-button" @click="login">登录</el-button>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Login",
  components: {},
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.$store.commit("memoryVuexData", {
      token: "0101010",
    });
  },
  methods: {
    login() {
      // 登录成功跳转
      // this.$router.push({ name: "Home", params: { id: "1" } });
      this.$router.push({ path: "/home"});
    },
  },
};
</script>
<style scoped lang='less'>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../assets/img/loginbg.jpg) no-repeat center;
    background-size: 100% 100%;
    z-index: -1;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }

  // 登录框 start
  .login-container {
    width: 450px;
    position: relative;
    top: -70px;
    // 修改ui原始样式
    /deep/.el-input__inner {
      width: 100%;
      height: 72px;
      line-height: 72px;
      margin-top: 25px;
      padding: 0 15px;
      background: #2d2d2d;
      *background-color: transparent;
      background: rgba(45, 45, 45, 0.15);
      -moz-border-radius: 6px;
      -webkit-border-radius: 6px;
      border-radius: 6px;
      border: 1px solid #3d3d3d;
      border: 1px solid rgba(255, 255, 255, 0.15);
      -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
      -webkit-box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%) inset;
      box-shadow: 0 2px 3px 0 rgb(0 0 0 / 10%) inset;
      font-family: "PT Sans", Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #fff;
      text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
      -o-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      -ms-transition: all 0.2s;
      &:-moz-placeholder {
        color: #fff;
      }
      &:-ms-input-placeholder {
        color: #fff;
      }
      &::-webkit-input-placeholder {
        color: #fff;
      }

      &:focus {
        outline: none;
        -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
          0 2px 7px 0 rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
          0 2px 7px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
          0 2px 7px 0 rgba(0, 0, 0, 0.2);
      }
    }

    .login-button {
      cursor: pointer;
      width: 100%;
      height: 54px;
      margin-top: 25px;
      padding: 0;
      background: #f45010;
      border-radius: 10px;
      border: 0px;
      box-shadow: 0 15px 30px 0 #f45010 inset, 0 2px 7px 0 rgb(0 0 0 / 20%);
      font-family: "PT Sans", Helvetica, Arial, sans-serif;
      font-size: 1px;
      font-weight: 700;
      color: #fff;
      text-shadow: 0 1px 2px rgb(0 0 0 / 10%);
      -o-transition: all 0.2s;
      -moz-transition: all 0.2s;
      -webkit-transition: all 0.2s;
      -ms-transition: all 0.2s;
      &:hover {
        box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
          0 2px 7px 0 rgba(0, 0, 0, 0.2);
      }

      &:active {
        box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1) inset,
          0 1px 4px 0 rgba(0, 0, 0, 0.1);
        border: 0px solid #ef4300;
      }
    }
  }
}
</style>
