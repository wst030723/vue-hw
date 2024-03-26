<template>
  <div class="container">
    <div
      class="position-relative d-flex align-items-center justify-content-center"
      style="min-height: 400px"
    >
      <div
        class="position-absolute"
        style="
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
          background-position: center center;
          opacity: 0.1;
        "
      ></div>
      <h2 class="fw-bold">Lorem ipsum.</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div
            class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <div
                  class="d-flex justify-content-between align-items-center pe-1"
                >
                  <h4 class="mb-0">Lorem ipsum</h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                      <RouterLink
                        class="py-2 d-block text-muted"
                        :to="`/products`"
                        >全部</RouterLink
                      >
                    </li>

                    <li v-for="item in categories" :key="item">
                      <RouterLink
                        class="py-2 d-block text-muted"
                        :to="`/products?category=${item}`"
                        >{{ item }}</RouterLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="product in products" :key="product.id">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    <RouterLink :to="`/product/${product.id}`">{{
                      product.title
                    }}</RouterLink>
                  </h4>
                  <p class="card-text mb-0">
                    NT${{ product.price }}
                    <span class="text-muted"
                      ><del>NT${{ product.origin_price }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
          <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
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
      categories: ["國內", "國外"],
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
