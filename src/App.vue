<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />
  <div class="ms_fixed">

    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
