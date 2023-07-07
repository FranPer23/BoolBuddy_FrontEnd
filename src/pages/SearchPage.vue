<script>
import axios from "axios";
import ProfileCard from "../components/ProfileCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      profiles: [],
      store,
    };
  },

  name: "SearchPage",
  components: {
    ProfileCard,
  },
  mounted() {
    this.getProfiles();
  },
  methods: {
    getProfiles() {
      axios.get("http://localhost:8000/api/profiles").then((resp) => {
        this.profiles = resp.data.results.data;
        console.log(resp);
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <h2 class="text-center">Profili:</h2>
    <div class="row row-cols-3">
      <div class="col g-4" v-for="profile in profiles">
        <ProfileCard :profile="profile" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>
