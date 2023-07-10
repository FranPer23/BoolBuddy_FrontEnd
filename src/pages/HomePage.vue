<script>
import axios from "axios";
import { store } from "../store";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'

export default {

  components: {
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      store,
      profiles: [],
    };
  },

  methods: {
    getProfiles() {
      axios.get(`${this.store.baseUrl}/api/profiles`).then(
        (resp) => {
          this.profiles = resp.data.results.data;
        },
      );
    },
  },

  mounted() {
    this.getProfiles();
  },

};
</script>

<template>
  <!-- Jumbotron -->
  <div class="jumbotron">
    <div class="title text-center">

      <p class="fs-4 pt-5 mx-5">BoolBuddy offers professional IT services, with our experts specializing in a wide
        range of fields including web development, full-stack development, junior web development, web design and
        much more. Whether you're starting a new project or need help with an existing one, we're here to assist
        you.</p>

      <h1 class="display-5 fw-bold">
        Find Your IT Specialist
      </h1>

    </div>
  </div>
  <!-- carousel made with vueperslides -->
  <vueper-slides class="no-shadow" :visibleSlides="3" :slidePerView="1" :draggingDistance="70" :gap="5" :bullets="true"
    :arrows="false" :slideImageInside="true">
    <vueper-slide class="slide" v-for="profile in profiles" :key="user_id" :title="profile.name"
      :content="profile.surname" :image="profile.photo">
    </vueper-slide>
  </vueper-slides>
</template>

<style lang="scss">
@use '../assets/Style/AppHomePage.scss'
</style>