
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios.post(api, this.user).then((response) => {
        const { token, expired } = response.data;
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `tinaToken=${token};expires=${new Date(expired)}; path=/`;
        // 成功跳至 products.html
        window.location = 'products.html';
      })
      //失敗
      .catch((err) => {
        alert(err.response.data.message);
      });
    },
  },
}).mount('#app');