<script>
import { store } from "../store";

export default {
  name: "AppFooter",

  data() {
    return {
      store,
      
    };
  },
};
</script>

<template>
  <footer class="text-white pb-4 pt-3">
    <div class="container">
        <div class="logo-img">
            <img class="" src="../assets/img/5.png" alt=""/>
        </div>
        <div class="text-center pb-5">BoolBuddy© created by 
            <a href="https://github.com/Giadagenovesi">Giada Genovesi</a>, 
            <a href="https://github.com/FranPer23">Francesca Perrotta</a>, 
            <a href="https://github.com/italocirillo">Italo Cirillo</a>, 
            <a href="https://github.com/mirkosorrentino">Mirko Sorrentino</a>, 
            <a href="https://github.com/Cris-NTL">Cristian Natoli</a>  (click on the names to see our GitHub profiles!)
            <div>as Final Project of the Full-Stack Web Development program of <span class="text-decoration-underline"><a href="https://boolean.careers/">Boolean Careers</a></span>.</div>
        </div>
        <div class="d-flex align-items-center">
            <div class="col-6">2023 BoolBuddy©, All Rights Reserved</div>
            <div class="col-6 ms_socials text-end">
                <a href="https://www.facebook.com/boolean.careers/" class="px-2"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/boolean.careers/?hl=en" class="px-2"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/booleancareers?lang=en" class="px-2"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCN0mktfmWySUg3OmvHKrdcQ" class="px-2"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.linkedin.com/school/boolean-careers/" class="px-2"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100%;
    // debug
    background-color: rgba(61, 61, 61, 0.69);
}
a {
    text-decoration: none;
    color: inherit;
}
.ms_socials {
    font-size: 1.5rem;
}
.logo-img {
    width: 10%;
    margin: auto;
}
</style>
