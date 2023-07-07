<script>
import axios from "axios";

export default {
  data() {
    return {
      profiles: [],
    };
  },
  mounted() {
    this.getProfiles();
  },
  methods: {
    getProfiles() {
      axios.get("http://127.0.0.1:8000/api/profiles").then((resp) => {
        this.profiles = resp.data.results.data;
        console.log(resp);
      });
    },
  },
};
</script>

<template>
  <h1>Hola</h1>
  <!-- <a href="http://localhost:8000/">Hola!</a> -->
  <ul>
    <li v-for="profile in profiles">
      {{ profile.name }}
    </li>
  </ul>
  <router-view></router-view>;
</template>

<style lang="scss">
// @use "./styles/general.scss" as *;
</style>
