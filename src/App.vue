<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
};
</script>

<template>
  <AppHeader />
  <div class="ms_fixed">
    <router-view></router-view>
  </div>
  <appFooter/>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
