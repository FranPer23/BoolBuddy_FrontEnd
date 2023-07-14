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
      };

      if (this.store.selectedTechnology !== "") {
        if (this.store.selectedTechnology !== "all") {
          params.technology_id = this.store.selectedTechnology;
        }
      }
      axios
        .get(`${this.store.baseUrl}/api/profiles`, { params })
        .then((resp) => {
          this.profiles = resp.data.results.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getTechnologies() {
      axios.get(`${this.store.baseUrl}/api/technologies`).then((resp) => {
        this.technologies = resp.data.results;
        console.log(resp.data.results);
      });
    },
  },
};
</script>

<template>
  <main>
    <div class="bg_div">
      <!-- Loading -->
      <div v-if="this.loading === true" class="load_container">
      <div class="ms_loader">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="loading_text">
        <h2>...LOADING...</h2>
      </div>
    </div>
  
      <div v-else class="container">
        
        <div class="col-11 d-flex justify-content-center">
          <label class="form-label ms-5" for="technology">Technologies</label>
          <select v-model="this.store.selectedTechnology" id="technology" class="form-select ms-3"
            @change="getProfiles()">
            <option selected value=""></option>
            <option value="all">ALL</option>
            <option v-for="technology_item in technologies" :key="technology_item.id" :value="technology_item.id">{{
              technology_item.name }}</option>
          </select>
        </div>
        <div class="">
  
          <div v-if="this.profiles.length > 0">
            <div class="row row-cols-3 ms-1">
              <div class="col g-4" v-for="profile in profiles">
                <ProfileCard :profile="profile" />
              </div>
            </div>
          </div>
  
          <div v-else>
            <p class="text-center text-uppercase py-3">
              No match for your search
            </p>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
label {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.604);
}
.bg_div{
  background-color: rgba(0, 0, 0, 0.596);
  padding-top: 10rem;
  padding-bottom: 2rem;
}

main {
  background-image: url(../assets/defaultimg/sfondo4.jpg);
  background-size: cover;
  background-position: center; 
}

//LOADING
.load_container {
  position: relative;
}
.ms_loader {
  position: absolute;
  left: 50%;
  top: 40%;
  z-index: 1000;
  height: 31px;
  width: 31px;
  color: white;
}

.loading_text {
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  color: white;
}
</style>

