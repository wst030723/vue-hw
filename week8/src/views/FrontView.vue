<template>
  <NavbarComponent></NavbarComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    NavbarComponent,
    // eslint-disable-next-line vue/no-unused-components
    FooterComponent,
  },
};
</script>
