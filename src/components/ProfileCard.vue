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
        methods: {
            avg(voti) {
                console.log(voti);
                let sum = 0;
                voti.forEach(voto => {
                    sum = parseInt(voto.vote) + sum;
                });
                // console.log(sum / voti.length);
                return (sum / voti.length);
            }
        }
    };
</script>

<template>
    <!-- <div class="ms_card mb-4">
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
        <router-link :to="{ name: 'single-profile', params: { id: profile.id } }"
          class="ms_btn text-center align-self-center">
          Details
        </router-link>
      </div>
    </div>
  </div> -->

    <!-- prova -->
    <div class="card-client">
        <div class="user-picture">
            <div v-if="profile.photo">
                <img :src="imageUrl" alt="" />
            </div>
            <div v-else>
                <img src="../assets/defaultimg/profilejpg.jpg" alt="" />
            </div>
        </div>
        <p class="name-client text-center"> {{ profile.surname }} {{ profile.name }}
        </p>
        <hr>
        <div class="ms_technology_space">
            <ul class="list-unstyled flex-wrap d-flex justify-content-between">
                <li v-for="technology in profile.technology" class="col-6">
                    {{ technology.name }}
                </li>
            </ul>
        </div>

        <div class="d-flex justify-content-center mb-3">
            <div v-for="n in 5">
                <i v-if="avg(profile.votes) >= n" class="fa-solid fa-star me-3 ms_vote"></i>
                <i v-else class="fa-regular fa-star me-3 ms_vote"></i>
            </div>
        </div>

        <div class="d-flex justify-content-center">
            <router-link :to="{ name: 'single-profile', params: { id: profile.id } }"
                class="ms_btn text-center align-self-center">
                Details
            </router-link>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    // STYLE
    img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
    }

    h2 {
        font-size: 2.5rem;
    }

    // CARD
    .ms_technology_space {
        font-size: 1rem;
        height: 100px;
    }

    .card-client {
        background-color: rgba(255, 255, 255, 0.692);
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 20px;
        padding-right: 20px;
        border: 4px solid rgb(190, 187, 187);
        box-shadow: 0 6px 10px rgb(18, 18, 19);
        border-radius: 10px;

        color: #0c2230;
        font-family: "Poppins", sans-serif;
        transition: all 0.3s ease;
    }

    .card-client:hover {
        transform: translateY(-10px);
    }

    .user-picture {
        overflow: hidden;
        object-fit: cover;
        width: 10rem;
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }


    .name-client {
        margin: 0;
        margin-top: 20px;
        font-weight: 600;
        font-size: 18px;
    }

    // button style

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
