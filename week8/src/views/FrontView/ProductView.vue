<template>
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
        background-image: url(https://images.unsplash.com/photo-1612195325284-c16da65be55d?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
        opacity: 0.8;
      "
    ></div>
    <h2 style="color: #673220; position: relative; z-index: 1">產品介紹</h2>
  </div>

  <div class="container mt-5">
    <ol class="breadcrumb px-0 mb-0 py-3">
      <li class="breadcrumb-item">
        <RouterLink class="text-muted" to="/">首頁</RouterLink>
      </li>
      <li class="breadcrumb-item">
        <RouterLink class="text-muted" to="/products">產品列表</RouterLink>
      </li>
      <li
        class="breadcrumb-item active"
        aria-current="page"
        style="color: #673220"
      >
        {{ product.title }}
      </li>
    </ol>

    <div class="row">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="pt-4">{{ product.description }}</p>
        <p style="letter-spacing: 4px">{{ product.content }}</p>

        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6"></div>
          <div class="col-6">
            <a
              class="text-nowrap btn w-100 py-2"
              style="background-color: rgba(103, 50, 32, 0.6); color: #fff"
              @click.prevent="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5"></div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "pinia";

import cartStore from "@/stores/cartStore";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
        });
    },
    ...mapActions(cartStore, ["addToCart"]),
  },
  mounted() {
    this.getProduct();
    console.log(this.$route);
  },
};
</script>
