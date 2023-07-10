<script>
import axios from "axios";
import ProfileCard from "../components/ProfileCard.vue";
import { store } from "../store";
import { resolveDirective } from "vue";
import { routerKey } from "vue-router";

export default {
  data() {
    return {
      profiles: [],
      store,
      technologies: [],
      selectedTechnology: "",
    };
  },

  name: "SearchPage",
  components: {
    ProfileCard,
  },
  mounted() {
    this.getTechnologies();
  },
  methods: {
    getProfiles() {
      this.store.selectedTechnology = this.selectedTechnology;
      this.$router.push({ name: "search" });
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
  <h1>HOMEPAGE</h1>
  <div class="container">
    <h2 class="text-center">Profiles:</h2>
    <div class="col">
      <label class="form-label" for="technology">Technologies</label>
      <select v-model="selectedTechnology" id="technology" class="form-select w-100" @change="getProfiles()">
        <option selected value=""></option>
        <option value="all">ALL</option>
        <option v-for="technology_item in technologies" :key="technology_item.id" :value="technology_item.id">{{
          technology_item.name }}</option>
      </select>
    </div>
  </div>
</template>

<style></style>
