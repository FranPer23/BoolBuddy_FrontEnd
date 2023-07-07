<script>
import { store } from "../store";

export default {
  name: "ProfileCard",
  props: {
    profile: Object,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    imageUrl() {
      return `${this.store.baseUrl}/storage${this.profile.photo}`;
    },
  },
};
</script>

<template>
  <div class="card p-2">
    <img :src="imageUrl" alt="" />
    <h5>Surname: {{ profile.surname }}</h5>
    <h5>Name: {{ profile.name }}</h5>
    <div class="text-primary">
      <ul class="list-unstyled">
        <li v-for="technology in profile.technology">
          {{ technology.name }}
        </li>
      </ul>
    </div>
    <router-link
      :to="{ name: 'single-profile', params: { id: profile.id } }"
      class="btn btn-primary"
      >Dettagli</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.card,
.col {
  height: 100%;
}
</style>
