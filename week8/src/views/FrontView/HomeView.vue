<template>
  <!-- 首頁圖 -->
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center center;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-end my-auto">
        <div class="col-md-5 text-center z-1">
          <h2 style="color: white">歡迎光臨我們的豆豆店！</h2>
          <p class="mb-0 pt-2" style="color: white">
            品味生活，一杯咖啡的浪漫之旅
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row mt-5">
      <div class="text-center">
        <h3 style="color: #3f3f46">熱門產品</h3>
      </div>
      <div
        class="col-md-4 mt-md-4"
        v-for="(product, index) in products.slice(0, 3)"
        :key="product.id"
      >
        <div class="card border-0 mb-4">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded-0"
            alt="..."
            height="300px"
            style="object-fit: cover"
          />

          <div class="card-body text-center" style="color: #673220">
            <h4>{{ product.title }}</h4>
            <div class="d-flex justify-content-center">
              <p class="card-text text-muted mb-0" style="font-size: 14px">
                {{ product.description }}
              </p>
              <span style="color: transparent">{{ index }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-md-4 text-center">
        <router-link
          to="/products"
          class="btn-block m-0 px-4 py-2"
          style="background-color: #673220; border-radius: 0"
        >
          <span
            style="
              color: white;
              font-family: Noto Serif Tamil Slanted;
              letter-spacing: 4px;
            "
            >More</span
          >
        </router-link>
      </div>
    </div>
  </div>

  <div
    class="bg-light mt-7"
    style="background-image: url('../../../public/1.png'); height: 300px"
  >
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row justify-content-center py-7"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1582794818313-7dab0085461f?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="img-fluid"
          style="object-fit: cover"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4" style="color: #673220">豆子的挑選</h4>
        <p class="text-muted" style="letter-spacing: 2px">
          我們以挑選來自秘魯、哥倫比亞、危地馬拉等地的頂級咖啡豆為傲，每一杯Coyz的咖啡都是對豆子精挑細選的完美體現。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1551462577-9aaf3ff5d927?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4" style="color: #673220">好喝的關鍵</h4>
        <p class="text-muted" style="letter-spacing: 2px">
          細心研磨，每顆豆子均勻細緻。輕輕搖晃，使咖啡粉均勻。用沸水浸泡，靜待數分鐘，品味獨特風味。
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="img-fluid"
          style="object-fit: cover"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4" style="color: #673220">拉花的技巧</h4>
        <p class="text-muted" style="letter-spacing: 2px">
          精湛拉花技巧是我們的驕傲。手藝細膩，每一杯咖啡都是一幅獨一無二的藝術品。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProduct() {
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
        .then((res) => {
          console.log("API Response:", res);
          this.products = res.data.products;
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    },
  },
  mounted() {
    this.getProduct();
    console.log(this.$route);
  },
};
</script>
<style scoped></style>
