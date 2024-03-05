import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

let productModal = null;
let delProductModal = null;

// 建立 Vue 
createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'tinaweek2',
      products: [],
      New: false,
      temp: {
        imagesUrl: [], // 用於多圖
      },
    }
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
            window.location = "index.html";
          });
      },
      getData() {
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/products/all`;
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
      // 新增更新
      updateProduct() {
        let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
        let http = "post";
  
        if (!this.New) {
          url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.temp.id}`;
          http = "put";
        }
  
        axios[http](url, { data: this.temp })
          .then((response) => {
            //跳出彈窗
            alert(response.data.message);
            productModal.hide();
            this.getData();
          })
          //失敗
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      // 打開彈窗
      openModal(New, item) {
        // 新增
        if (New === "add") {
          this.temp = {
            imagesUrl: [],
          };
          this.New = true;
          productModal.show();
        // 編輯
        } else if (New === "edit") {
          this.temp = { ...item };
          this.New = false;
          productModal.show();
        // 刪除
        } else if (New === "del") {
          this.temp = { ...item };
          delProductModal.show();
        }
      },
      // 刪除
      delProduct() {
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.temp.id}`;
  
        axios
          .delete(url)
          // 成功
          .then((response) => {
            alert(response.data.message);
            delProductModal.hide();
            this.getData();
          })
          // 失敗
          .catch((err) => {
            alert(err.response.data.message);
          });
      },
      createImages() {
      this.temp.imagesUrl = [];
      this.temp.imagesUrl.push('');
    },
  }, 
   mounted() {
    // 建立 Modal 
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false
    });

    delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
      keyboard: false
    });

    //初始化後，執行的第一個方法
    // 取出 Token
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)tinaToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      axios.defaults.headers.common.Authorization = token;
  
    this.checkAdmin();
  },

}).mount('#app');