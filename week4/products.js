import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let productModal = null;
let delProductModal = null;

const apiUrl = "https://vue3-course-api.hexschool.io/v2";
const apiPath = "tinaweek2";

// 建立 Vue
const app = createApp({
  data() {
    return {
      products: [],
      isNew: false,
      temp: {
        imagesUrl: [], // 用於多圖
      },
      pagination: {}, // 分頁
    };
  },
  methods: {
    // 驗證登入
    checkAdmin() {
      const url = `${apiUrl}/api/user/check`;
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
    // 取資料
    getData(page = 1) {
      const url = `${apiUrl}/api/${apiPath}/admin/products?page=${page}`;
      axios
        .get(url)
        // 成功後 更新產品和分頁數據
        .then((response) => {
          const { products, pagination } = response.data;
          this.products = products;
          this.pagination = pagination;
        })
        // 失敗後 顯示錯誤訊息並回登入頁面
        .catch((err) => {
          alert(err.response.data.message);
          window.location = "index.html";
        });
    },
    // 打開彈窗
    openModal(isNew, item) {
      // 新增
      if (isNew === "add") {
        this.temp = {
          imagesUrl: [],
        };
        this.isNew = true;
        productModal.show();
        // 編輯
      } else if (isNew === "edit") {
        this.temp = { ...item };
        this.isNew = false;
        productModal.show();
        // 刪除
      } else if (isNew === "del") {
        this.temp = { ...item };
        delProductModal.show();
      }
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
});

// 分頁元件
app.component("pagination", {
  template: "#pagination",
  props: ["pages"],
  methods: {
    emitPages(item) {
      this.$emit("emit-pages", item);
    },
  },
});

// 產品新增/編輯元件
app.component("productModal", {
  template: "#productModal",
  props: ["product", "isNew"],
  data() {
    return {
    };
  },
  methods: {
    updateProduct() {
      // 新增商品
      let api = `${apiUrl}/api/${apiPath}/admin/product`;
      let httpMethod = 'post';
      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${apiUrl}/api/${apiPath}/admin/product/${this.product.id}`;
        httpMethod = 'put';
      }

      axios[httpMethod](api, { data: this.product }).then((response) => {
        alert(response.data.message);
        this.hideModal();
        this.$emit('update');
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
    createImages() {
      this.product.imagesUrl = [];
      this.product.imagesUrl.push("");
    },
    openModal() {
      productModal.show();
    },
    hideModal() {
      productModal.hide();
    },
  },

  mounted() {
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static'
    });
  },
});

// 產品刪除元件
app.component("delProductModal", {
  template: "#delProductModal",
  props: ["item"],
  data() {
    return {
    };
  },
  mounted() {
    delProductModal = new bootstrap.Modal(
      document.getElementById("delProductModal"),
      {
        keyboard: false,
        backdrop: "static",
      }
    );
  },
  methods: {
    delProduct() {
      axios.delete(`${apiUrl}/api/${apiPath}/admin/product/${this.item.id}`)
      .then((response) => {
        this.hideModal();
        this.$emit('update');
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
    openModal() {
      delProductModal.show();
    },
    hideModal() {
      delProductModal.hide();
    },
  },
});

app.mount("#app");
