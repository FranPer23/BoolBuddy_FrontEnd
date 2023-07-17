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
      form: {
        name: "",
        surname: "",
        email: "",
        message: "",
      },
      statusMessage: false,
      vote: 0,
      mouseOut: true,
    };
  },
  computed: {
    imageUrl() {
      return `${this.store.baseUrl}/storage${this.profile.photo}`;
    },
    cvUrl() {
      return `${this.store.baseUrl}/storage${this.profile.cv}`;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`${this.store.baseUrl}/api/profiles/${id}`).then(
      (resp) => {
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

    (function () {
      "use strict";
      const forms = document.querySelectorAll(".needs-validation");
      Array.from(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
  methods: {
    sendMessage() {
      const message = {
        name: this.form.name,
        surname: this.form.surname,
        email: this.form.email,
        message: this.form.message,
        specialist_id: this.$route.params.id,
      };

      //chiamata xios per gestione di invio messaggi
      axios.post(`${this.store.baseUrl}/api/messages`, message).then(
        (resp) => {
          this.$router.push("/success");
        },
        (error) => {}
      );
    },

    sendReview() {
      const review = {
        name: this.form.reviewName,
        review: this.form.reviewMessage,
        specialist_id: this.$route.params.id,
      };
      console.log(review);

      // chiamata axios per gestione di invio delle recensioni
      axios.post(`${this.store.baseUrl}/api/reviews`, review).then(
        (resp) => {
          this.$router.push("/success");
        },
        (error) => {}
      );
    },

    sendVote() {
      const vote = {
        vote: this.vote,
        username: "pippo",
        specialist_id: this.$route.params.id,
        user_id: 1,
      };
      console.log(this.vote);

      // chiamata axios per gestione dei voti
      axios.post(`${this.store.baseUrl}/api/votes`, vote).then(
        (resp) => {
          this.$router.push("/success");
        },
        (error) => {}
      );
    },
  },
};
</script>

<template>
  <main>
    <div class="bg_div">
      <section class="container">
        <!-- START PROFILE CARD-->
        <div class="ms_card">
          <!-- BACK -->
          <router-link :to="{ name: 'search' }" class="ms_btn mb-4">
            Indietro
          </router-link>
          <!-- BACK -->
          <div v-if="profile">
            <div class="img_container">
              <div v-if="profile.photo">
                <img :src="imageUrl" alt="" class="ms_img"/>
              </div>
              <div v-else>
                <img src="../assets/defaultimg/profilejpg.jpg" alt="" />
              </div>
            </div>
            <div class="profile_info text-center">
              <h2 class="text-uppercase">
                {{ profile.surname }} {{ profile.name }}
              </h2>
              <p class="mb-4">{{ profile.field }}</p>
              <hr />
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <p>{{ profile.address }}, {{ profile.city }}</p>
              </div>
              <div class="my-4">
                <div>
                  <i class="fa-solid fa-code"></i>
                  <ul
                    class="list-unstyled"
                    v-for="(technology, index) in profile.technology"
                  >
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
              <div v-if="profile.mobile">
                <i class="fa-solid fa-mobile"></i>
                <p>
                  {{ profile.mobile }}
                </p>
              </div>
              <span v-else></span>
              <div v-if="profile.service">
                <i class="fa-solid fa-wrench"></i>
                <p>
                  {{ profile.service }}
                </p>
              </div>
              <span v-else></span>
              <i class="fa-solid fa-file mb-4"> CV</i>
              <div v-if="profile.cv">
                <img :src="cvUrl" alt="" />
              </div>
              <span v-else></span>
            </div>
          </div>
          <div v-else-if="errorMessage" class="my-4">
            {{ errorMessage }}
          </div>
        </div>
        <!-- END CARD PROFILE -->

        <!--////////////////// START CONTAINER INTERACTIONS BUTTONS //////////////////-->
        <div class="buttons_container mt-4 p-3">
          <!--START MESSAGE BUTTON -->
          <p>
            <button
              class="ms_btn my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <a href=""
                >Send message <i class="fa-solid fa-paper-plane fa-flip"></i
              ></a>
            </button>
          </p>
          <!-- END MESSAGE BUTTON -->

          <!-- START REVIEW BUTTON -->
          <p>
            <button
              class="ms_btn my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              Review <i class="fa-solid fa-pen fa-flip"></i>
            </button>
          </p>
          <!-- END REVIEW BUTTON -->

          <!-- START VOTE BUTTON -->
          <p>
            <button
              class="ms_btn my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              Leave a vote <i class="fa-solid fa-star fa-flip"></i>
            </button>
          </p>
          <!-- END VOTE BUTTON -->
        </div>
        <!--////////////////// END CONTAINER INTERACTIONS BUTTONS //////////////////-->

        <!-- START MESSAGE FORM -->
        <div class="collapse mt-4 p-3" id="collapseExample">
          <div class="card card-body">
            <!-- Message -->
            <div class="form-container mt-2 p-3">
              <form
                @submit.prevent="sendMessage"
                class="needs-validation"
                novalidate
              >
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email address*</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control was-validated"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                  <div class="invalid-feedback">
                    <strong>Please choose a valid e-mail.</strong>
                  </div>
                  <div class="valid-feedback"><strong>Looks good!</strong></div>
                </div>

                <div class="mb-3">
                  <label for="name" class="form-label">Name*</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control was-validated"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <div class="invalid-feedback">
                    <strong>Please choose a valid Name.</strong>
                  </div>
                  <div class="valid-feedback"><strong>Looks good!</strong></div>
                </div>
                <div class="mb-3">
                  <label for="surname" class="form-label">Surname*</label>
                  <input
                    v-model="form.surname"
                    type="text"
                    class="form-control was-validated"
                    id="surname"
                    placeholder="Surname"
                    required
                  />
                  <div class="invalid-feedback">
                    <strong>Please choose a valid Surname</strong>
                  </div>
                  <div class="valid-feedback"><strong>Looks good!</strong></div>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label"
                    >Your message here*</label
                  >
                  <textarea
                    v-model="form.message"
                    class="form-control was-validated"
                    id="message"
                    rows="3"
                    placeholder="Enter text here"
                    required
                  ></textarea>
                  <div class="invalid-feedback">
                    <strong>Please enter your text before submitting.</strong>
                  </div>
                  <div class="valid-feedback"><strong>Looks good!</strong></div>
                </div>

                <div>
                  <button type="submit" class="ms_btn">Invia</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- END MESSAGE FORM -->

        <!-- START REVIEWS FORM -->
        <div class="collapse mt-4 p-3" id="collapseExample1">
          <div class="card card-body">
            <div class="form-container mt-2 p-3">
              <form
                @submit.prevent="sendReview"
                class="needs-validation"
                novalidate
              >
                <div class="mb-3">
                  <label for="reviewName" class="form-label">Name*</label>
                  <input
                    v-model="form.reviewName"
                    type="text"
                    class="form-control"
                    id="reviewName"
                    placeholder="name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="reviewMessage" class="form-label"
                    >Your message*</label
                  >
                  <textarea
                    v-model="form.reviewMessage"
                    class="form-control"
                    id="reviewMessage"
                    rows="3"
                    placeholder="Enter your message here"
                    required
                  ></textarea>
                </div>

                <div>
                  <button type="submit" class="ms_btn">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- END REVIEWS FORM -->

        <!-- START VOTES FIELD -->
        <div class="collapse" id="collapseExample2">
          <div class="form-container mt-4 p-3">
            <form @submit.prevent="sendVote">
              <div class="card card-body">
                <div
                  class="form-container mt-4 p-3 d-flex justify-content-start"
                >
                  <span class="mx-3">Vote:</span>
                  <div v-for="n in 5">
                    <i
                      v-if="n > this.vote"
                      class="fa-regular fa-star me-3 ms_vote"
                      id="n"
                      @mouseover.prevent="
                        this.mouseOut ? (this.vote = n) : null
                      "
                    ></i>
                    <i
                      v-else
                      class="fa-solid fa-star me-3 ms_vote"
                      id="n"
                      @click="
                        this.vote = n;
                        this.mouseOut = !this.mouseOut;
                      "
                      @mouseout.prevent="this.mouseOut ? (this.vote = 0) : null"
                    ></i>
                  </div>

                  <div>
                    <button type="submit" class="ms_btn mx-3">Invia</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- END VOTES FIELD -->
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.bg_div {
  background-color: rgba(0, 0, 0, 0.596);
  padding-top: 10rem;
  padding-bottom: 2rem;
}
main {
  background-image: url(../assets/defaultimg/sfondo4.jpg);
  background-size: cover;
  background-position: center;
}

.form-control {
  background-color: rgba(255, 255, 255, 0.521);
}
.ms_img {
  object-fit: cover;
}
//CARD

.card {
  background-color: rgba(255, 255, 255, 0.692);
}
// BUTTONS CONTAINER
.buttons_container {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.692);
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
// BUTTON
.ms_card {
  border-radius: 10px;
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.692);
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
    border: 2px solid black;
  }
}

.ms_btn {
  border-radius: 10px;
  display: inline-block;
  padding: 0.5rem 2rem;
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
  scroll-behavior: smooth;
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

//Profile info
h2 {
  font-size: 4rem;
}

.profile_info {
  padding-top: 8rem;
  font-size: 2rem;
}

//Vote
.ms_vote {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #0c2230;
}
</style>
