import axios from "axios";
import $store from '@/store';
import $config from '@/config';

function Axios(url, method = 'get', data = {
  timeStamp: Date.now()
}, misc = null, responseType = 'json') {



  method = method.toLowerCase();
  // axios 配置
  let config = {
    baseURL: $config.baseURL,
    url: url,
    timeout: 30000,
    responseType: responseType,
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'content-type',
      'token': $store.state.token
    }
  }



  // axios 实例化 并传入 config
  var Axios = axios.create(config);
  // 请求拦截
  Axios.interceptors.request.use(
    (config) => {
      // 开启loading
      misc ? $store.commit('setLoading', true) : '';
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );
  // 响应拦截
  Axios.interceptors.response.use(
    (response) => {
      // 关闭loading框
      misc ? $store.commit('setLoading', false) : '';
      return response.data;
    },
    (err) => {
      this.$message({
        showClose: true,
        message: '获取数据错误',
        type: 'error'
      });
      misc ? $store.commit('setLoading', false) : '';
      Promise.reject(err);
    }
  );




  // 调用axios
  if (['post', 'put', 'dispatch', 'options', 'copy'].includes(method)) {
    return Axios[method](config.url, data);
  } else if (['delete'].includes(method)) {
    return Axios[method](config.url, {
      data
    });
  } else {
    return Axios[method](config.url, {
      params: data
    });
  }











}

export default Axios