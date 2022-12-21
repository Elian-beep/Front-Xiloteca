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

    <span class="btn-newAcc"
      >Já possui uma conta?
      <button @click="closeModal()">Entrar</button></span
    >
  </form>
</template>
  
<script>
import { defineComponent } from "vue";
import InputNoIcon from "./InputNoIcon.vue";

export default defineComponent({
  name: "FormNewUser",
  components: { InputNoIcon },
  emits: ["closeModal"],
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
  methods: {
    closeModal(){
        this.$emit("closeModal", false)
    }
  }
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

.btn-newAcc {
  font-weight: 400;
  font-size: 12px;
  color: #213140;

  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.btn-newAcc button {
  background: none;
  font-weight: 600;
  border: none;
  border-bottom: 1px solid #213140;
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

  .btn-newAcc {
    font-size: 14px;
  }

  .btn-cadastrar:hover, .btn-newAcc:hover {
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .btn-cadastrar {
    font-size: 24px;
  }

  .btn-newAcc {
    font-size: 16px;
  }
}
</style>