<script>
import { store } from "../store";

export default {
  name: "AppHeader",

  data() {
    return {
      store,
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        // {
        //   label: "Profiles",
        //   routeName: "profiles",
        // },
        {
          label: "Search",
          routeName: "search",
        },
      ],
    };
  },
};
</script>

<template>
  <header class="text-center p-3">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#">BoolBuddy</a>
        <!-- <img
          class="top-left-img"
          src="../assets/defaultimg/boolbuddy-text.png"
          alt=""
        /> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav w-50 text-start">
            <li class="nav-item" v-for="item in menuItems">
              <router-link
                :to="{ name: item.routeName }"
                class="nav-link active"
                aria-current="page"
                >{{ item.label }}</router-link
              >
            </li>
          </ul>
          <ul class="ms_logo_container">
            <li style="width: 20rem">
              <img class="logo-img" src="../assets/img/5.png" alt="" />
            </li>
          </ul>
          <ul class="navbar-nav d-flex justify-content-end w-50 text-start ">
            <li class="me-3 ms_pad">
              <a :href="`${this.store.baseUrl}/login`">Login</a>
            </li>
            <li class="ms_pad">
              <a :href="`${this.store.baseUrl}/register`">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
//HEADER
header {
  background-color: #c9c9c9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
// IMAGES
.top-left-img {
  width: 12%;
}
.logo-img {
  float: none;
  width: 7%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style-type: none;
}

//media query
@media screen and (max-width: 991px) {
  .ms_logo_container {
    display: none;
  }
  .ms_pad {
    padding:0.5rem 0 ;
  }
   
}
</style>
