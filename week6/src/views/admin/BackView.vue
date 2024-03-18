<template>
  <RouterView></RouterView>
  <nav>
    <RouterLink to="/home">回到前台</RouterLink> |
    <RouterLink to="/admin/products">產品列表</RouterLink> |
    <RouterLink to="/admin/order">後台訂單</RouterLink>
  </nav>
</template>
