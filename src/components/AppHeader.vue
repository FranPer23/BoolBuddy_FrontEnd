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
          <ul class="navbar-nav w-50">
            <li class="nav-item" v-for="item in menuItems">
              <router-link
                :to="{ name: item.routeName }"
                class="nav-link active"
                aria-current="page"
                >{{ item.label }}</router-link
              >
            </li>
          </ul>
          <ul>
            <li style="width: 20rem">
              <img class="logo-img" src="../assets/img/5.png" alt="" />
            </li>
          </ul>
          <ul class="navbar-nav d-flex justify-content-end w-50">
            <li class="me-3">
              <a :href="`${this.store.baseUrl}/login`">Login</a>
            </li>
            <li>
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

//
</style>
