import axios from 'axios';
import history from '../router/history';

// 允许axios请求时带上cookie
axios.defaults.withCredentials = true;

const request = (url, options) => {
  const opts = {
    url,
    method: (options.method || 'get').toLowerCase(),
    baseURL: options.baseURL
  };
  const optionData = options.data || {};
  if (method === 'get') opts.params = optionData;
  else opts.data = optionData;
  return axios(opts)
    .then((res) => {
      const response = res || {};
      const { status } = response;
      if (status === 200) { // http请求成功
        const { data, code } = response.data;
        if (code === 200) { // 如果接口请求没问题直接返回data，有问题则将错误信息全部返回
          return data;
        }
        // 登录超时，跳登录
        if (code === 101) {
          history.push('/');
        }
        return Promise.reject(response.data || '服务器报错');
      }
    })
    .catch((err) => {
      if (!err.code) {
        console.error(err.message);
      }
      return Promise.reject(err);
    });
};

module.exports = request;
