<template>
  <form>
    <InputNoIcon
      :vmodel="user.nome"
      typeInput="text"
      placeholderInput="Nome completo *"
    />
    <InputNoIcon
      :vmodel="user.usuario"
      typeInput="text"
      placeholderInput="Usuário *"
    />
    <InputNoIcon
      :vmodel="user.email"
      typeInput="email"
      placeholderInput="E-mail *"
    />
    <InputNoIcon
      :vmodel="user.senha"
      typeInput="password"
      placeholderInput="Senha *"
    />
    <InputNoIcon
      :vmodel="user.repeatSenha"
      typeInput="password"
      placeholderInput="Confirmar senha *"
    />

    <button class="btn-cadastrar">Cadastrar</button>
  </form>
</template>
  
<script>
import { defineComponent } from "vue";
import InputNoIcon from "./InputNoIcon.vue";

export default defineComponent({
  name: "FormNewUser",
  components: { InputNoIcon },
  data() {
    return {
      user: {
        id: "",
        nome: "",
        usuario: "",
        email: "",
        senha: "",
        repeatSenha: "",
      },
    };
  },
});
</script>
  
<style scoped>
form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.btn-cadastrar {
  background: #213140;
  width: 100%;
  border-radius: 2px;
  padding: 8px 34px;
  font-size: 14px;
  color: #fafafa;
  margin-bottom: 23px;
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  form {
    margin-top: 39px;
    gap: 24px;
  }

  .btn-cadastrar {
    padding: 12px 34px;
    font-size: 18px;
    margin-bottom: 32px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .btn-cadastrar{
    font-size: 24px;
  }
}
</style>