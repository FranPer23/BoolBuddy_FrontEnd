<script></script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="notifications-container col-12">
          <div class="success">
            <div class="ms_check d-flex justify-content-center">
              <i class="fa-regular fa-circle-check fa-bounce text-center"></i>
            </div>

            <div class="flex-shrink-0"></div>
            <div class="success-prompt-wrap">
              <p class="success-prompt-heading text-center">
                SUBMITTED SUCCESSFULLY
              </p>

              <div
                class="success-button-container d-flex justify-content-center"
              >
                <router-link :to="{ name: 'home' }" class="ms_btn mb-4">
                  Home
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 50rem;
  background-image: url(../assets/defaultimg/sfondo4.jpg);
  background-size: cover;
}

.ms_check {
  font-size: 8rem;
  color: rgb(22 101 52);
}

.notifications-container {
  height: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex {
  display: flex;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.success {
  margin: 5rem auto;
  width: 70%;
  border: 3px solid rgb(22 101 52);
  padding: 5rem 5rem;
  border-radius: 0.375rem;
  background-color: rgb(240, 253, 244, 0.692);
}

.success-prompt-wrap {
  margin-left: 0.75rem;
}

.success-prompt-heading {
  padding-top: 2rem;
  font-weight: bold;
  color: rgb(22 101 52);
}
.ms_btn {
  border-radius: 10px;
  display: inline-block;
  padding: 0.5rem 0.5rem;
  font-size: 16px;
  font-weight: 700;
  color: rgb(22 101 52);
  border: 3px solid rgb(22 101 52);
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
  background-color: rgb(104, 230, 152);
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.ms_btn:hover::before {
  transform: translateX(0);
}
</style>
