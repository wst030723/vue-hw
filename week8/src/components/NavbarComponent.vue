<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
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
        <RouterLink class="nav-item nav-link me-4 active" to="/"
          >Home <span class="sr-only">(current)</span></RouterLink
        >
        <RouterLink class="nav-item nav-link me-4" to="/products"
          >Product</RouterLink
        >
        <RouterLink class="nav-item nav-link me-4" to="/about"
          >About</RouterLink
        >
        <RouterLink class="nav-item nav-link" to="/"
          ><i class="fas fa-shopping-cart"></i
        ></RouterLink>
      </div>
    </div>
  </nav>
</template>
