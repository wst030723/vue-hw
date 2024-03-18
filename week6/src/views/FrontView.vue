<template>
  <nav class="nav-bar">
    <RouterLink to="/home">首頁</RouterLink> |
    <RouterLink to="/list">產品列表</RouterLink> |
    <RouterLink to="/cart">購物車</RouterLink> |
    <RouterLink to="/admin/products">後台</RouterLink>
  </nav>
  <hr />
  <RouterView></RouterView>
</template>

<style></style>
