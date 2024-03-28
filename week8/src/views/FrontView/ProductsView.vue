<template>
  <div>
    <!-- banner -->
    <div
      class="position-relative d-flex align-items-center justify-content-center"
      style="min-height: 300px"
    >
      <div
        class="position-absolute"
        style="
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url(https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
          background-position: center center;
          opacity: 0.8;
        "
      ></div>
      <h2 style="color: #673220; position: relative; z-index: 1">產品介紹</h2>
    </div>

    <div class="container">
      <div class="container mt-md-5 mb-7">
        <div class="grid">
          <div class="accordion mb-3" id="accordionExample">
            <div class="card border-0" style="background-color: transparent">
              <div
                id="collapseOne"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <ul class="list-unstyled d-flex justify-content-center">
                  <li class="me-4">
                    <RouterLink :to="`/products`" class="li-item"
                      >全部</RouterLink
                    >
                  </li>

                  <li v-for="item in categories" :key="item" class="me-4">
                    <RouterLink
                      :to="`/products?category=${item}`"
                      class="li-item"
                      >{{ item }}</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
              <div class="card border-0 mb-4 position-relative">
                <img
                  :src="product.imageUrl"
                  class="card-img-top rounded-0"
                  alt="..."
                  style="object-fit: cover"
                  height="300"
                />
                <a href="#" class="text-dark">
                  <i
                    class="far fa-heart position-absolute"
                    style="right: 16px; top: 16px"
                  ></i>
                </a>
                <div class="card-body p-0" style="background-color: #f2f1ed">
                  <h4 class="mb-0 mt-3" style="text-align: center">
                    <RouterLink
                      :to="`/product/${product.id}`"
                      style="text-decoration: none; color: #673220"
                      >{{ product.title }}</RouterLink
                    >
                  </h4>
                  <p
                    class="card-text my-1"
                    style="text-align: center; font-size: 18px"
                  >
                    NT${{ product.price }}
                    <span class="text-muted" style="font-size: 14px"
                      ><del>NT${{ product.origin_price }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      categories: ["咖啡", "冷萃", "甜點"],
    };
  },
  watch: {
    "$route.query": {
      handler() {
        this.getProducts();
      },
      deep: true,
    },
  },
  methods: {
    getProducts() {
      // eslint-disable-next-line no-console
      console.log(this.$route);
      const { category = "" } = this.$route.query;
      // category = undefinded 所以要預設為空
      axios
        .get(
          // eslint-disable-next-line comma-dangle
          `https://vue3-course-api.hexschool.io/v2/api/tinaweek2/products?category=${category}`
        )
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
          this.products = res.data.products;
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.li-item {
  color: #a1a1aa;
  font-size: 20px;
  text-decoration: none;
}
.li-item:focus {
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-thickness: 1px;
  color: #673220;
  text-shadow: 0px 4px 4.8px rgba(0, 0, 0, 0.25);
}
</style>
