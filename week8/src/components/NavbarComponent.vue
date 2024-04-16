<template>
  <nav
    class="navbar navbar-expand-lg navbar-light position-fixed w-100 z-3 top-0"
    :class="{ 'navbar-bg': isNavbarBg }"
  >
    <div class="container">
      <RouterLink class="navbar-title" to="/">.Coyz</RouterLink>
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
          <RouterLink class="nav-link me-4" style="color: #fff" to="/about"
            >關於我們</RouterLink
          >
          <RouterLink class="nav-link me-4" style="color: #fff" to="/products"
            >產品介紹</RouterLink
          >
          <RouterLink class="nav-link me-4" style="color: #fff" to="/content"
            >門市資訊</RouterLink
          >
          <RouterLink
            class="nav-item nav-link me-4 position-relative"
            to="/checkout"
          >
            <i class="bi bi-cart3" style="color: #fff"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import cartStore from "../stores/cartStore";

export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  setup() {
    const isNavbarBg = ref(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      isNavbarBg.value = scrollPosition > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { isNavbarBg };
  },
};
</script>

<style scoped>
.navbar-title {
  color: #fff;
  font-family: "Noto Sans Thai UI";
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  font-style: italic;
}

.navbar-bg {
  background-color: #673220;
  border-bottom: 1px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
}
</style>
