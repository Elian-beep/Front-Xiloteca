<template>
  <nav class="navbar-container">
    <div class="navbar-content">
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
    <div class="navbar-refs">
      <span
        >Universidade do Estado do Amazonas | Centro de Estudos Superiores de
        Itacoatiara | Curso de Engenharia Florestal</span
      >
    </div>
  </nav>
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

.navbar-container{
  border-bottom: 0.5px solid #213140;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.navbar-content {
  display: flex;
  justify-content: space-between;
}

.navbar-logo {
  width: 50%;
}

.navbar-refs {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.navbar-refs span {
  font-weight: 400;
  font-size: 10px;
  align-self: baseline;
  color: #213140;
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
  .navbar-container{
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
    gap: 20px;
  }

  .navbar-refs span{
    font-size: 10pt;
  }

  .navbar-link a {
    font-size: 12pt;
    padding: 10px 16px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .navbar-container {
    padding: 40px 96px;
    gap: 26px;
  }

  .navbar-link a {
    font-size: 14pt;
    padding: 12px 18px;
  }
}
</style>