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
  </div>
</template>

<style lang="scss" scoped>
.card,
.col {
  height: 100%;
}
</style>
