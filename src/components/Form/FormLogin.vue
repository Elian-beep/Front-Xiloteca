<template>
  <div class="area-form">
    <SubTitle text="Fazer Login" class="subTitle" />
    <form class="form-login">
      <div class="inputs">
        <InputWithIcon
          icon="fa-solid fa-user"
          typeInput="text"
          placeholderInput="Usuário"
        />
        <InputWithIcon
          icon="fa-solid fa-lock"
          typeInput="password"
          placeholderInput="Senha"
        />
      </div>
      <button class="btn-forgetPassword">Esqueci minha senha</button>

      <button>Entrar</button>
      <!-- COMPONENTE -->
      <span>Ainda não tem uma conta? <button>Cadastrar</button></span>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubTitle from "../Titles/SubTitle.vue";
import InputWithIcon from "./InputWithIcon.vue";

export default defineComponent({
  name: "FormLogin",
  components: { SubTitle, InputWithIcon },
});
</script>

<style scoped>
.area-form {
  width: 296px;
  background: #fafafa;
  box-shadow: 0px 0px 20px 2px rgba(52, 115, 85, 0.1);
  border-radius: 4px;
  padding: 40px 24px;
}

.subTitle {
  text-align: center;
}
.form-login {
  display: flex;
  flex-direction: column;
}

.inputs {
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn-forgetPassword {
  border: none;
  background: none;
  text-align: left;

  font-size: 12px;
  color: #213140;
  text-decoration: underline;
  margin-bottom: 33px;
}
</style>