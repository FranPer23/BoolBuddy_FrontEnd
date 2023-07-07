<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SingleProfilePage",
  data() {
    return {
      store,
      profile: null,
      errorMessage: "",
    };
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`${this.store.baseUrl}/api/profiles/${id}`).then(
      (resp) => {
        // if (resp.data.success) {
        //     this.profile = resp.data.results
        // } else {
        //     this.errorMessage = resp.data.error
        // }
        this.profile = resp.data.results;
      },
      (error) => {
        if (error.response.status === 404) {
          this.$router.replace({ name: "not-found" });
        } else {
          this.errorMessage = "Oops, qualcosa è andato storto";
        }
      }
    );
  },
  methods: {
    // goBack() {
    //     this.$router.go(-1);
    // }
  },
};
</script>

<template>
  <section class="container">
    <router-link :to="{ name: 'search' }" class="btn btn-primary mb-3"
      >Indietro</router-link
    >
    <div v-if="profile">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.surname }}</p>
      <div class="my-4 text-primary">
        <span>Tecnologie: </span>
        <span v-for="(technology, index) in profile.technology">
          {{ technology.name }}
          {{ index === profile.technology.length - 1 ? "." : "," }}</span
        >
      </div>
    </div>
    <div v-else-if="errorMessage" class="my-4">
      {{ errorMessage }}
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
