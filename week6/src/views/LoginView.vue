<template>
  <h1>Hello, This is Login Page.</h1>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">抓抓 - 請先登入</h1>
      <div class="col-12">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <!-- v-model 雙向綁定 -->
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <!-- v-model 雙向綁定 -->
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
  </div>
</template>

<script>
const { VITE_APP_API_URL } = import.meta.env;
import router from "../router/index.js";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = `${VITE_APP_API_URL}v2/admin/signin`;
      this.$http

        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `tinaToken=${token};expires=${new Date(
            expired
          )}; path=/`;
          // 成功跳至 products.html
          router.push("/admin/products");
        })
        //失敗
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
