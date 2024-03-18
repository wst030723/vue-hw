<template>
  <h1>This is Cart Page.</h1>
  <div class="mt-4">
    <!-- 購物車列表 -->
    <div class="text-end">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCarts"
      >
        清空購物車
      </button>
    </div>

    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="carts">
          <tr v-for="item in carts" :key="item.id">
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeCartItem(item.id)"
                :disabled="loadingStatus.loadingItem === item.id"
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === item.id"
                ></i>
                x
              </button>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cart.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="container">
    <!-- 表單驗證 -->
    <div class="my-5 row justify-content-center">
      <v-form
        ref="form"
        class="col-md-6"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { localize, loadLocaleFromURL } from "@vee-validate/i18n";

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

loadLocaleFromURL(
  "https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json"
);

configure({
  generateMessage: localize("zh_TW"),
});

export default {
  data() {
    return {
      cart: {},
      carts: [],
      loadingStatus: {
        loadingItem: "",
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },

  methods: {
    // 清空購物車
    deleteAllCarts() {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/carts`;
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getCart() {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/cart`;
      this.$http
        .get(url)
        .then((response) => {
          this.cart = response.data.data;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCartItem(id) {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http

        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // 送出訂單
    createOrder() {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/order`;
      const order = this.form;
      this.$http

        .post(url, { data: order })
        .then((response) => {
          alert(response.data.message);
          this.$refs.form.resetForm();
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    // 在 mounted 階段取得產品資料
    this.getCart();
  },
};
</script>
