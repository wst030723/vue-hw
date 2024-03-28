<template>
  <div class="pt-5" style="background-color: #18181b">
    <div
      class="container"
      style="position: relative; position: relative; overflow: hidden"
    >
      <div
        class="d-flex align-items-center justify-content-between text-white mb-4"
      >
        <a
          class="text-white h1"
          href="./index.html"
          style="text-decoration: none"
          >.Coyz</a
        >
        <div></div>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="bi bi-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="bi bi-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="bi bi-youtube"></i
            ></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">Line | @.Coyz</p>
          <p class="mb-0">Phone | 0999-999-999</p>
          <p class="mb-0">EMail | .coyz@gmail.com</p>
        </div>
      </div>
      <div
        style="
          position: absolute;
          top: 85%;
          right: 2%;
          transform: translate(50%, -50%);
          z-index: 1;
        "
      >
        <img
          src="../../public/slogan.svg"
          alt="SVG Image"
          style="
            transform-origin: center center;
            animation: rotate 30s linear infinite;
          "
        />
      </div>
    </div>
  </div>
  <p class="mb-0 text-center" style="color: gray; background-color: #18181b">
    © 2024 .Coyz All Rights Reserved.
  </p>
</template>

<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 添加樣式來控制間隔的寬度 */
.container .d-flex div {
  height: 100px; /* 根據您的需求調整寬度 */
}
</style>
