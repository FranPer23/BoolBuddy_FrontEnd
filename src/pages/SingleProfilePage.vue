<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SingleProfilePage",
    props: {
    profile: Object,
  },
  data() {
    return {
      store,
      profile: null,
      errorMessage: "",
    };
  },
  computed: {
    imageUrl() {
      return `${this.store.baseUrl}/storage${this.profile.photo}`;
    },
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
  <main>
    <section class="container">
      <router-link :to="{ name: 'search' }" class="ms_btn mb-4">
        Indietro
      </router-link>

      <div class="ms_card">
        <div v-if="profile">
          <div class="img_container">
            <div v-if="profile.photo">
              <img :src="imageUrl" alt="" />
            </div>
            <div v-else>
              <img src="../assets/defaultimg/profilejpg.jpg" alt="" >
            </div>
          </div>
          <div class="profile_info text-center">
            <h2 class="text-uppercase">{{ profile.surname }} {{ profile.name }}</h2>
            <p class="mb-4"> {{ profile.field }}</p>
            <hr>
            <div> <i class="fa-solid fa-location-dot"></i> 
            <p>
              {{ profile.address }}, {{ profile.city }}
            </p>
          </div>
            <div class="my-4">
              <div>
                <i class="fa-solid fa-code"></i> 
                <ul class="list-unstyled" v-for="(technology, index) in profile.technology">
                  <li>
                    {{ technology.name }}
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="profile.phone">
              <i class="fa-solid fa-phone"></i>
              <p>
                {{ profile.phone }}
              </p>
            </div>
            <span v-else></span>
            <div v-if="profile.mobile"><i class="fa-solid fa-mobile"></i> 
              <p>
                {{ profile.mobile }}
              </p>
            </div>
            <span v-else></span>
            <div v-if="profile.service"> <i class="fa-solid fa-wrench"></i>
              <p>
                {{ profile.service}}
              </p>
            </div>
            <span v-else></span>
          </div>
        </div>
        <div v-else-if="errorMessage" class="my-4">
          {{ errorMessage }}
        </div>
      </div>
    </section>

  </main>
</template>

<style lang="scss" scoped>
main{
  padding-top: 6rem;
  padding-bottom: 4rem;
  background: #69788c;
  background: -webkit-linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
  background: linear-gradient(58deg, #69788c 0%, #f0f3f4 100%);
}

//CARD

// BUTTON
.ms_card {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  color: #0c2230;
 
}

.img_container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: -150px;
  right: 50%;
  transform: translate(50%, 0);
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid black ;
  }
}
.ms_btn {
 
 display: inline-block;
 padding: 0.5rem 2rem;
 font-size: 16px;
 font-weight: 700;
 color:  #0c2230;
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
 background-color: #F0F3F4;
 transform: translateX(-100%);
 transition: all .3s;
 z-index: -1;
}

.ms_btn:hover::before {
 transform: translateX(0);
}

//Profile info
h2{
  font-size: 4rem;
}
p{
  
}

.profile_info{
  padding-top: 8rem;
  font-size: 2rem;
}
</style>
