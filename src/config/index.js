// 环境变量相关配置
// 获取当前环境变量
let ENV = process.env.VUE_APP_API_ENV;
console.log('当前环境:', ENV)

// 获取各环境url
const setupUrl = () => {
    let baseURL, imageBaseURL;
    switch (ENV) {
        case 'dev':
            baseURL = '123';
            imageBaseURL = '/img/';
            break;
        case 'uat':
            baseURL = '123';
            imageBaseURL = '/img/';
            break;
        case 'prod':
            baseURL = '123';
            imageBaseURL = '/img/';
            break;
        default:
            baseURL = '123';
            imageBaseURL = '/img/';
    }
    return {
        baseURL,
        imageBaseURL
    }
}

export default {
    ...setupUrl()
}