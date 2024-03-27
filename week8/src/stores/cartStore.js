import { defineStore } from "pinia";
import axios from "axios";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0,
  }),
  actions: {
    getCart() {
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts;
        this.final_total = res.data.data.carts;
        this.total = res.data.data.total;
        console.log("char:", this.carts);
        // this.cart = res.data.data;
        // console.log("char:", this.cart);
      });
    },
    addToCart(id) {
      const order = {
        product_id: id,
        qty: 1,
      };
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data: order })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },

  },
});
