<template>
  <h1>產品檢視</h1>
</template>

<script>
import router from "../../router/index.js";

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      products: [], // 產品數組
      temp: {}, // 臨時變量
    };
  },
  methods: {
    // 驗證管理員身份
    checkAdmin() {
      const url = `${VITE_APP_API_URL}v2/api/user/check`;
      this.$http
        .post(url)
        // 成功：獲取產品數據
        .then(() => {
          this.getData();
        })
        // 失敗：顯示錯誤消息並重定向到登入頁面
        .catch((err) => {
          alert(err.response.data.message);
          router.push("/login");
        });
    },
    // 獲取產品數據
    getData() {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/admin/products`;
      this.$http
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
    // 打開產品
    openProduct(item) {
      this.temp = item;
    },
  },
  mounted() {
    // 初始化後，執行的第一個方法
    // 取得 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)tinaToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = token;

    this.checkAdmin();
  },
};
</script>
