<template>
  <footer :class="{ menuOpen: menuOpen }">
    <div class="area-logos">
      <img src="@/assets/fapeam.png" alt="Logo Fapeam" />
      <img src="@/assets/uea.png" alt="Logo UEA" />
      <img
        src="@/assets/cienciacomputacao.png"
        alt="Logo da turma de Ciência da Computação"
      />
      <img src="@/assets/proex.png" alt="Logo Proex" />
    </div>
    <div class="area-text">
      <div class="credits">
        <a href="">Dev: Elian Batista</a>
        <a href="">Design: Linda Hillary</a>
      </div>
      <span>Acadêmicos do curos de Ciência da Computação</span>
    </div>
  </footer>
</template>
    
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  props: {
    menuOpen: {
      type: Boolean,
      require: true,
    },
  },
});
</script>
    
<style scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 26px;

  position: static;
  bottom: 0;
  left: 0;

  background: #130f26;
  padding: 24px 24px 16px 24px;
}

.area-logos {
  display: flex;
  gap: 28px;
  justify-content: center;
}

.area-text {
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 10px;
}

.credits {
  display: flex;
  justify-content: space-between;
}

.credits a {
  text-decoration: none;
  outline: none;
  color: #fafafa;
  font-weight: 300;
  font-size: 12px;
}

.area-text span {
  color: #fafafa;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
}

footer.menuOpen {
  display: none;
}

@media screen and (min-width: 481px) {
  /* TABLET */
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
}
</style>
    