<template>
  <nav
    class="navbar navbar-expand-lg navbar-light position-fixed w-100 z-1 top-0 navbar-bg"
  >
    <div class="container">
      <RouterLink
        class="navbar-brand"
        style="color: #556354; font-size: 24px"
        to="/"
        >.Coyz</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <RouterLink
            class="nav-item nav-link me-4"
            style="color: #556354"
            to="/"
            >首頁
          </RouterLink>
          <RouterLink
            class="nav-item nav-link me-4"
            style="color: #556354"
            to="/about"
            >關於我們</RouterLink
          >
          <RouterLink
            class="nav-item nav-link me-4"
            style="color: #556354"
            to="/products"
            >產品介紹</RouterLink
          >
          <RouterLink
            class="nav-item nav-link me-4"
            style="color: #556354"
            to="/"
            >門市資訊</RouterLink
          >

          <RouterLink class="nav-item nav-link me-4 position-relative" to="/"
            ><i class="bi bi-cart3" style="color: #556354"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ this.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";

import cartStore from "../stores/cartStore";

export default {
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style scoped>
.navbar-bg {
  background-color: #f2f1ed;
}
</style>
