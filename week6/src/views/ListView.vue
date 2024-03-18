<template>
  <div>
    <h1>This is List Page.</h1>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td style="width: 200px">
            <div
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </td>
          <td>{{ item.title }}</td>
          <td>
            <del class="h6" v-if="item.price">
              原價 {{ item.origin_price }} 元
            </del>
            <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="getProduct(item.id)"
                :disabled="
                  loadingStatus.loadingItem === item.id || !item.is_enabled
                "
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === item.id"
                ></i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addToCart(item.id)"
                :disabled="
                  loadingStatus.loadingItem === item.id || !item.is_enabled
                "
              >
                <i
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus.loadingItem === item.id"
                ></i>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <user-product-modal
      ref="userProductModal"
      :product="product"
      @add-to-cart="addToCart"
    ></user-product-modal>
  </div>
</template>

<script>
import UserProductModal from "./UserProductModal.vue";

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;

export default {
  components: {
    UserProductModal,
  },
  data() {
    return {
      products: [],
      product: {},
      loadingStatus: {
        loadingItem: "", // 初始化 loadingItem 為空
      },
    };
  },
  methods: {
    get() {
      this.$http
        .get(`${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/products/all`)
        .then((res) => {
          console.log(res);
          this.products = res.data.products;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    getProduct(id) {
      this.$http
        .get(`${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/product/${id}`)
        .then((response) => {
          this.loadingStatus.loadingItem = "";
          this.product = response.data.product;
          this.$refs.userProductModal.openModal();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    addToCart(id, qty = 1) {
      const url = `${VITE_APP_API_URL}v2/api/${VITE_APP_API_NAME}/cart`;
      this.loadingStatus.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$refs.userProductModal.hideModal();
      this.$http

        .post(url, { data: cart })
        .then((response) => {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.get();
  },
};
</script>
