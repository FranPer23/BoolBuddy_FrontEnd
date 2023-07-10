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
  <main>
    <div class="container">
      <div class="row row-cols-3">
        <div class="col g-4" v-for="profile in profiles">
          <ProfileCard :profile="profile" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

main{
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #69788c;
  background: -webkit-linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
  background: linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
}
</style>
