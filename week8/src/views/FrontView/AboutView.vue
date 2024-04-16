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
        background-image: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        background-position: center;
        opacity: 0.8;
      "
    ></div>
    <h2 style="color: #673220; position: relative; z-index: 1">關於我們</h2>
  </div>

  <div class="container">
    <div class="container mt-md-5 mb-7">
      <div class="text-center" style="color: #52525b; letter-spacing: 2px">
        品味生活，一杯咖啡的浪漫之旅
      </div>
      <div class="row mt-6">
        <div
          class="col-6"
          style="font-size: 40px; font-weight: 600; color: #3f3f46"
        >
          &#8220;打造精緻咖啡，<br />為生活加分的豆子專家 &#8221;
        </div>
        <div
          class="col-6"
          style="letter-spacing: 1.6px; font-size: 20px; color: #374151"
        >
          我們的初衷是為了讓每位顧客都擁有健康美麗的肌膚，提供專業的護膚方案和產品。
          <br /><br />我們致力於提供最優質的護膚產品，滿足您的肌膚需求。從天然成分到科學配方，我們的產品均經過精心挑選和測試，讓您擁有健康亮麗的膚色。歡迎您來店體驗，尋找您肌膚的完美解答！
        </div>
      </div>
    </div>
  </div>

  <div style="background-color: #f2f1ed">
    <div class="container">
      <div class="timeline-section">
        <div class="timeline">
          <div
            v-for="(item, index) in scheduleItems"
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-date">{{ item.number }}</div>
            <div class="timeline-content">
              <div class="timeline-title">{{ item.title }}</div>
              <div class="timeline-description">{{ item.description }}</div>
            </div>
            <div class="timeline-line"></div>
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
      scheduleItems: [
        {
          number: "2020",
          title: ".Coyz成立",
          description: "首間.Coyz坐落於高雄市中心",
        },
        {
          number: "2021",
          title: "分店達5家",
          description: "分店持續擴展中",
        },
        {
          number: "2022",
          title: "榮獲國際咖啡比賽冠軍",
          description: "店內招牌『椰奶那提』榮獲多項提名，贏得冠軍",
        },
        {
          number: "2023",
          title: "首次海外員工旅遊-日本",
          description: "首次海外員工旅遊",
        },
        {
          number: "2024",
          title: "榮獲國際甜點比賽冠軍",
          description: "手工製作『藍莓乳酪蛋糕』獲得國際甜點冠軍",
        },
      ],
    };
  },
};
</script>

<style scoped>
.timeline-section {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.timeline {
  position: relative;
  margin: 50px auto;
  padding: 20px 0;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-date {
  position: absolute;
  top: 20px;
  left: 10px;
  background-color: #673220;
  color: #fff;
  padding: 5px 10px;
  border-radius: 0px;
  font-size: 16px;
  z-index: 1;
}

.timeline-content {
  padding: 20px;
  padding-left: 80px;
  background-color: #f2f1ed;
  border-radius: 5px;
}

.timeline-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.timeline-description {
  font-size: 14px;
  line-height: 1.6;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 0;
  bottom: -50px;
  width: 2px;
  background-color: #673220;
  margin-left: 35px;
}
</style>
