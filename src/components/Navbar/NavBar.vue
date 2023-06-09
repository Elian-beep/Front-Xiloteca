<template>
  <div class="navbar-container">
    <div class="navbar-logo">
      <Logo :isVisible="true" />
    </div>
    <div class="navbar-link">
      <a href="#">
        <span>Visitar Página</span>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Logo from "../Titles/Logo.vue";

export default defineComponent({
  name: "NavBar",
  components: { Logo },
});
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #213140;
  padding: 16px 24px;
}

.navbar-logo {
  width: 50%;
}

.navbar-link {
  width: 40%;
  display: flex;
  justify-content: center;
}

.navbar-link a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  flex-direction: row;
  text-align: center;
  font-size: 10pt;
  text-decoration: none;
  border: 1px solid #213140;
  color: #213140;
  font-weight: 800;
  padding: 6px 12px;
  border-radius: 5px;
  transition: background-color ease-in 0.2s;
}

.navbar-link a:hover,
.navbar-link a:focus {
  background: #213140;
  color: #fafafa;
}

@media screen and (min-width: 481px) {
  /* TABLET */
  .navbar-container {
    padding: 24px 40px;
  }

  .navbar-link {
    justify-content: right;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .navbar-container {
    padding: 32px 80px;
  }

  .navbar-link a {
    font-size: 12pt;
    padding: 10px 16px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .navbar-container {
    padding: 48px 96px;
  }

  .navbar-link a {
    font-size: 14pt;
    padding: 12px 18px;
  }
}
</style>