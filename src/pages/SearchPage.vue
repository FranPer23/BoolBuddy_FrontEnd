<script>
import axios from "axios";
import ProfileCard from "../components/ProfileCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      profiles: [],
      store,
      technologies: [],
      selectedTechnology: "all",
    };
  },

  name: "SearchPage",
  components: {
    ProfileCard,
  },
  mounted() {
    this.getProfiles();
    this.getTechnologies();
  },
  methods: {

    getProfiles(page = 1) {
      const params = {
        page: page,
      }

      if (this.selectedTechnology !== "all") {
        params.technology_id = this.selectedTechnology;
      }
      axios.get(`${this.store.baseUrl}/api/profiles`, { params }).then((resp) => {
        this.profiles = resp.data.results.data;
      });
    },
    getTechnologies() {
      axios.get(`${this.store.baseUrl}/api/technologies`).then((resp) => {
        this.technologies = resp.data.results;
        console.log(resp.data.results);
      })
    },
  },
};
</script>

<template>
  <div class="container">
    <h2 class="text-center">Profili:</h2>
    <div class="col">
      <label class="form-label" for="technology">Tecnologie</label>
      <select v-model="selectedTechnology" id="technology" class="form-select w-100" @change="getProfiles()">
        <option value="all">TUTTI</option>
        <option v-for="technology_item in technologies" :key="technology_item.id" :value="technology_item.id">{{
          technology_item.name }}</option>
      </select>
    </div>
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
