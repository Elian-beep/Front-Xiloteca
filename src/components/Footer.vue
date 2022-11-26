<template>
  <footer :class="{ menuOpen: menuOpen }">
    <div class="area-logos">
      <span class="logo logo-fapeam"></span>
      <span class="logo logo-uea"></span>
      <span class="logo logo-cc"></span>
      <span class="logo logo-proex"></span>
    </div>
    <span class="whiteBar"></span>
    <div class="area-text">
      <div class="credits">
        <a href="">Dev: Elian Batista</a>
        <a href="">Design: Linda Hillary</a>
      </div>
      <span>Acadêmicos do curos de Ciência da Computação - UEA/CESIT</span>
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
  align-items: center;
}

.logo {
  background-size: contain;
  background-repeat: no-repeat;
}
.logo-fapeam {
  background-image: url(@/assets/fapeam.png);
  width: 32px;
  height: 33px;
}

.logo-uea {
  background-image: url(@/assets/uea.png);
  width: 33px;
  height: 32px;
}

.logo-cc {
  background-image: url(@/assets/cienciacomputacao.png);
  width: 39px;
  height: 33.67px;
}

.logo-proex {
  background-image: url(@/assets/proex.png);
  width: 61px;
  height: 21.33px;
}

.area-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
}

.whiteBar{
  border-top: 0.5px solid rgba(250, 250, 250, 0.5);
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

  footer {
    flex-direction: row;
    padding: 34px 24px;
    justify-content: space-between;
  }

  .area-logos {
    max-width: 50%;
    gap: 24px;
    align-items: center;
  }

  .area-logos .logo-fapeam {
    background-image: url(@/assets/fapeam-tablet.svg);
    width: 40px;
    height: 42px;
  }

  .area-logos .logo-uea {
    background-image: url(@/assets/uea-tablet.svg);
    width: 40px;
    height: 39px;
  }

  .area-logos .logo-cc {
    background-image: url(@/assets/cienciacomputacao-tablet.svg);
    width: 49px;
    height: 41px;
  }

  .area-logos .logo-proex {
    background-image: url(@/assets/proex-tablet.svg);
    width: 70px;
    height: 19px;
  }

  .whiteBar{
    border-left: 1px solid rgba(250, 250, 250, 0.5);
  }

  .area-text {
    width: 50%;
    border-top: none;
  }

  .credits {
    flex-direction: column;
    gap: 8px;
  }

  .area-text span {
    text-align: left;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */

  footer {
    padding: 78px 48px;
    gap: 70px;
  }

  .area-logos .logo-fapeam {
    background-image: url(@/assets/fapeam-laptop.svg);
    width: 63.81px;
    height: 67px;
  }

  .area-logos .logo-uea {
    background-image: url(@/assets/uea-laptop.svg);
    width: 64px;
    height: 62px;
  }

  .area-logos .logo-cc {
    background-image: url(@/assets/cienciacomputacao-laptop.svg);
    width: 72px;
    height: 60px;
  }

  .area-logos .logo-proex {
    background-image: url(@/assets/proex-laptop.svg);
    width: 116px;
    height: 33px;
  }

  .credits a,
  .area-text span {
    font-size: 16px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  footer {
    display: flex;
    justify-content: space-around;
  }

  .area-logos {
    justify-content: space-between;
    gap: 60px;
  }
  .area-logos .logo-fapeam {
    background-image: url(@/assets/fapeam-desktop.svg);
    width: 80px;
    height: 84px;
  }

  .area-logos .logo-uea {
    background-image: url(@/assets/uea-desktop.svg);
    width: 88px;
    height: 84px;
  }

  .area-logos .logo-cc {
    background-image: url(@/assets/cienciacomputacao-desktop.svg);
    width: 96px;
    height: 81px;
  }

  .area-logos .logo-proex {
    background-image: url(@/assets/proex-desktop.svg);
    width: 148px;
    height: 42px;
  }
  .area-text{
    width: auto;
  }

  .credits a,
  .area-text span {
    font-size: 18px;
  }
}
</style>
    