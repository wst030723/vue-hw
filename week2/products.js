import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "tinaweek2", //自己的api路徑
      products: [],
      temp: {},
    };
  },
  methods: {
    // 驗證登入
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios
        .post(url) 
        // 成功 列出產品資料
        .then(() => {
          this.getData();
        }) 
        // 失敗 顯示錯誤訊息並跳回登入頁面
        .catch((err) => {
          alert(err.response.data.message);
          window.location = "login.html";
        });
    },
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios
        .get(url)
        // 成功 
        .then((response) => {
          this.products = response.data.products;
        })
        // 失敗
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    openProduct(item) {
      this.temp = item;
    },
  },
  mounted() {
    //初始化後，執行的第一個方法
    // 取出 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)tinaToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
}).mount("#app");
