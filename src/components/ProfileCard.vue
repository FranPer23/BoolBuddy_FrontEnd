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
  <div class="ms_card mb-4">
    <div class="card-inner">
      <div class="card-front">
        <div v-if="profile.photo">
          <img :src="imageUrl" alt="" />
        </div>
        <div v-else>
          <img src="../assets/defaultimg/profilejpg.jpg" alt="" />
        </div>
      </div>
      <div class="card-back">
        <div class="ms_card-body mb-4">
          <h2 class="my-3">{{ profile.surname }} {{ profile.name }}</h2>
          <h5 class="text-uppercase mb-3">Technologies:</h5>
          <div class="ms_technology_space">
            <ul class="list-unstyled flex-wrap">
              <li v-for="technology in profile.technology" class="col-6">
                {{ technology.name }}
              </li>
            </ul>
          </div>
        </div>
        <router-link
          :to="{ name: 'single-profile', params: { id: profile.id } }"
          class="ms_btn text-center align-self-center"
        >
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// STYLE
img {
  width: 400px;
  height: 400px;
  border-radius: 10px;
}

h2 {
  font-size: 2.5rem;
}
// CARD
.ms_card {
  height: 400px;
  width: 400px;
  perspective: 2500px;
  cursor: pointer;
}

.card-inner {
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.ms_card:hover .card-inner {
  transform: rotateY(180deg);
  font-weight: 700 !important;
  background: none;
  transition: all 0.3s ease 0s;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
}

.card-front {
  background-color: #3e444c;
  display: flex;
  align-items: center;
  border: 3px solid #3e444c;
  border-radius: 10px;
  justify-content: center;
  transform: rotateY(0deg);
}

.card-back {
  background-color: #d1d8e0;
  color: #0c2230;
  display: flex;
  padding: 1rem;
  align-items: center;
  border: 3px solid #3e444c;
  border-radius: 10px;
  justify-content: center;
  transform: rotateY(180deg);
}

// button style
.ms_technology_space {
  font-size: 1rem;
  height: 200px;
  align-items: center;
}

.ms_btn {
  border-radius: 10px;
  width: 50%;
  display: inline-block;
  padding: 0.5rem 0.5rem;
  font-size: 16px;
  font-weight: 700;
  color: #0c2230;
  border: 3px solid #0c2230;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.ms_btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f3f4;
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.ms_btn:hover::before {
  transform: translateX(0);
}
</style>
