<script>
export default {
  name: "AppHeader",

  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Profiles",
          routeName: "profiles",
        },
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
  <header class="text-center p-2">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">BoolBuddy</a>
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
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in menuItems">
              <router-link
                :to="{ name: item.routeName }"
                class="nav-link active"
                aria-current="page"
                >{{ item.label }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
