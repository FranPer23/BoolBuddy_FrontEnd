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
                averageVote: "all",
                minReviews: "all",
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
                console.log(this.averageVote, this.minReviews);
                this.loading = true;

                const params = {
                    page: page,
                };

                if (this.store.selectedTechnology !== "") {
                    if (this.store.selectedTechnology !== "all") {
                        params.technology_id = this.store.selectedTechnology;
                    }
                }

                if (this.averageVote !== "") {
                    if (this.averageVote !== "all") {
                        params.averageVote = this.averageVote;
                    }
                }
                if (this.minReviews !== "") {
                    if (this.minReviews !== "all") {
                        params.minReviews = this.minReviews;
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
            <!-- End Loading -->

            <div v-else class="container">
            
                <!-- Technologies Filter -->
                <div class="col-12 text-center py-3">
                    <label class="form-label " for="technology">Technologies</label>
                    <select v-model="this.store.selectedTechnology" id="technology" class="form-select w-75 m-auto"
                        @change="getProfiles()">
                        <option selected value=""></option>
                        <option value="all">ALL</option>
                        <option v-for="technology_item in technologies" :key="technology_item.id"
                            :value="technology_item.id">{{
                            technology_item.name }}</option>
                    </select>
                </div>
                <!-- End Technologies Filter -->

                <!-- Votes Filter -->
                <div class="col-12 text-center py-3">
                    <label class="form-label" for="averageVote">Average Vote</label>
                    <select v-model="this.averageVote" id="averageVote" class="form-select w-75 m-auto"
                        @change="getProfiles()">
                        <option selected value=""></option>
                        <option value="all">ALL</option>
                        <option value="1">>= 1</option>
                        <option value="2">>= 2</option>
                        <option value="3">>= 3</option>
                        <option value="4">>= 4</option>
                        <option value="5">>= 5</option>
                    </select>
                </div>
                <!-- End Votes Filter -->

            <!-- Reviews Filter -->
                <div class="col-12 text-center pt-3 pb-5">
                    <label class="form-label" for="minReviews">Number of Reviews</label>
                    <select v-model="this.minReviews" id="minReviews" class="form-select w-75 m-auto"
                        @change="getProfiles()">
                        <option selected value=""></option>
                        <option value="all">ALL</option>
                        <option value="1">>= 1</option>
                        <option value="2">>= 2</option>
                        <option value="3">>= 3</option>
                        <option value="4">>= 4</option>
                        <option value="5">>= 5</option>
                    </select>
                </div>
            <!-- End Reviews Filter -->
            

                <div>
                    <div v-if="this.profiles.length > 0">
                        <div class="row ms-1">
                            <div class="col-lg-4 col-md-6 col-sm-12 g-4" v-for="profile in profiles">
                                <ProfileCard :profile="profile" />
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <p class="text-center text-uppercase py-3 ms_nomatch">
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

    .bg_div {
        background-color: rgba(0, 0, 0, 0.596);
        padding-top: 3rem;
        padding-bottom: 2rem;
        min-height: 100vh;
    }

    main {
        background-image: url(../assets/defaultimg/sfondo4.jpg);
        background-size: cover;
        background-position: center;
    }

    //LOADING
    .load_container {
        position: relative;
        height: 100vh;
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
    .ms_nomatch {
        color: white;
        font-size: 3rem;
        background-color: rgba(255, 255, 255, 0.39);
        border-radius: 10px;
    }
</style>
