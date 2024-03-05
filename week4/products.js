import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let productModal = null;
let delProductModal = null;

// 建立 Vue
const app = createApp({
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "tinaweek2",
      products: [],
      New: false,
      temp: {
        imagesUrl: [], // 用於多圖
      },
      pagination: {}, // 分頁
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
          window.location = "index.html";
        });
    },
    // 取資料
    getData(page = 1) {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products?page=${page}`;
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
    // 新增更新
    // updateProduct() {
    //   let url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
    //   let http = "post";

    //   if (!this.New) {
    //     url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.temp.id}`;
    //     http = "put";
    //   }

    //   axios[http](url, { data: this.temp })
    //     .then((response) => {
    //       //跳出彈窗
    //       alert(response.data.message);
    //       productModal.hide();
    //       this.getData();
    //     })
    //     //失敗
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // },
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
    // delProduct() {
    //   const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.temp.id}`;

    //   axios
    //     .delete(url)
    //     // 成功
    //     .then((response) => {
    //       alert(response.data.message);
    //       delProductModal.hide();
    //       this.getData();
    //     })
    //     // 失敗
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // },
    // createImages() {
    //   this.temp.imagesUrl = [];
    //   this.temp.imagesUrl.push("");
    // },
  },
  mounted() {
    // 建立 Modal
    // productModal = new bootstrap.Modal(
    //   document.getElementById("productModal"),
    //   {
    //     keyboard: false,
    //   }
    // );

    // delProductModal = new bootstrap.Modal(
    //   document.getElementById("delProductModal"),
    //   {
    //     keyboard: false,
    //   }
    // );

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
  props: ["product", "New"],
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "tinaweek2",
    };
  },
  methods: {
    updateProduct() {
      // 新增商品
      let api = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      let httpMethod = "post";
      // 如果不是新產品，切換到編輯 API
      if (!this.New) {
        api = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.product.id}`;
        httpMethod = "put";
      }

      axios[httpMethod](api, { data: this.product })
        .then((response) => {
          alert(response.data.message);
          this.hideModal();
          this.$emit("update");
        })
        .catch((err) => {
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
    productModal = new bootstrap.Modal(
      document.getElementById("productModal"),
      {
        keyboard: false,
        backdrop: "static",
      }
    );
  },
});

// 產品刪除元件
app.component("delProductModal", {
  template: "#delProductModal",
  props: ["item"],
  data() {
    return {
      apiUrl: "https://vue3-course-api.hexschool.io/v2",
      apiPath: "tinaweek2",
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
      axios
        .delete(
          `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.item.id}`
        )
        .then((response) => {
          this.hideModal();
          this.$emit("update");
        })
        .catch((err) => {
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
