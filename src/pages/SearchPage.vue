<script>
import axios from "axios";
import ProfileCard from "../components/ProfileCard.vue";
import { store } from "../store";

export default {
  data() {
    return {
      profiles: [],
      store,
      loading: false,
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
      this.loading = true;

      const params = {
        page: page,
      }

      if (this.store.selectedTechnology !== "") {
        if (this.store.selectedTechnology !== "all") {
          params.technology_id = this.store.selectedTechnology;
        }
      }
      axios.get(`${this.store.baseUrl}/api/profiles`, { params })
        .then((resp) => {
          this.profiles = resp.data.results.data;
        }).finally(() => {
          this.loading = false;
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
  <main>
    <!-- Loading -->
    <div v-if="this.loading === true">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h2>...LOADING...</h2>
    </div>

    <div v-else>
      <div class="container">
        <div class="col">
          <label class="form-label" for="technology">Technologies</label>
          <select v-model="this.store.selectedTechnology" id="technology" class="form-select w-100"
            @change="getProfiles()">
            <option selected value=""></option>
            <option value="all">ALL</option>
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
            Technologies not found
          </p>
        </template>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

main {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #69788c;
  background: -webkit-linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
  background: linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
}
</style>