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
        background-image: url(https://images.unsplash.com/photo-1534986136417-89b28be6a379?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center;
        opacity: 0.8;
      "
    ></div>
    <h2 style="color: #673220; position: relative; z-index: 1">門市資訊</h2>
  </div>

  <div class="container">
    <div class="container mt-md-5 mb-7">
      <div class="row">
        <div
          v-for="(item, index) in shopItems"
          :key="index"
          class="col-md-4 mb-4"
        >
          <div class="card border-0" style="background-color: #f2f1ed">
            <div class="card-body flex-column">
              <div class="d-flex justify-content-between">
                <h5 class="card-title" style="font-weight: 600">
                  {{ item.name }}
                </h5>
                <p
                  class="card-text"
                  style="color: #673220; font-weight: bolder; font-size: large"
                >
                  {{ item.since }}
                </p>
              </div>
              <div class="mt-3">
                <p class="card-text d-flex align-items-center">
                  <img
                    src="../../../public/phone.svg"
                    alt="SVG Image"
                    width="20"
                    height="20"
                    class="me-2"
                  />{{ item.phone }}
                </p>
                <p class="card-text d-flex align-items-center">
                  <img
                    src="../../../public/add.svg"
                    alt="SVG Image"
                    width="20"
                    height="20"
                    class="me-2"
                  />{{ item.address }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopItems: [
        {
          name: "高雄總店",
          since: "2020",
          phone: "07-777-7777",
          address: "高雄市鳳山區一心路1號",
        },
        {
          name: "鳳山分店",
          since: "2020",
          phone: "07-777-7777",
          address: "高雄市鳳山區一心路1號",
        },
        {
          name: "巨蛋分店",
          since: "2020",
          phone: "07-777-7777",
          address: "高雄市左營區巨蛋路1號",
        },
        {
          name: "三多分店",
          since: "2020",
          phone: "07-777-7777",
          address: "高雄市苓雅區三多路1號",
        },
        {
          name: "時代分店",
          since: "2021",
          phone: "07-777-7777",
          address: "高雄市前鎮區時代路1號",
        },
        {
          name: "遠百分店",
          since: "2021",
          phone: "07-777-7777",
          address: "高雄市前金區遠百路1號",
        },
        {
          name: "鹽埕分店",
          since: "2022",
          phone: "07-777-7777",
          address: "高雄市鹽埕區二聖路1號",
        },
        {
          name: "五甲分店",
          since: "2023",
          phone: "07-777-7777",
          address: "高雄市鳳山區五甲路1號",
        },
      ],
    };
  },
};
</script>
