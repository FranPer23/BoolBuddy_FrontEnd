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
    };
  },

  name: "SearchPage",
  components: {
    ProfileCard,
  },
  mounted() {
    this.getTechnologies();
    this.getProfiles();
  },
  methods: {
    getProfiles(page = 1) {
      const params = {
        page: page,
      }

      if (this.store.selectedTechnology !== "") {
        if (this.store.selectedTechnology !== "all") {
          params.technology_id = this.store.selectedTechnology;
        }
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
  <h2 class="text-center">Profili:</h2>
  <div class="container">
    <div class="col">
      <label class="form-label" for="technology">Tecnologie</label>
      <select v-model="this.store.selectedTechnology" id="technology" class="form-select w-100" @change="getProfiles()">
        <option selected value=""></option>
        <option value="all">TUTTI</option>
        <option v-for="technology_item in technologies" :key="technology_item.id" :value="technology_item.id">{{
          technology_item.name }}</option>
      </select>
    </div>

    <template v-if="this.profiles.length > 0">
      <div class="row row-cols-3">
        <div class="col g-4" v-for="profile in profiles">
          <ProfileCard :profile="profile" />
        </div>
      </div>
    </template>

    <template v-else>
      <p class="text-center text-uppercase py-3">
        Nessuna tecnologia utilizzata
      </p>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>
