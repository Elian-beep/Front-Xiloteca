<template>
  <form>
    <p>
      Informe seu e-mail de cadastro para enviarmos o link de redefinição de
      senha.
    </p>
    <InputNoIcon
      :vmodel="user.email"
      typeInput="email"
      placeholderInput="E-mail *"
    />

    <button class="btn-enviar">Enviar</button>

    <span class="btn-newAcc"
      >Já possui uma conta? <button @click="closeModal()">Entrar</button></span
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
    closeModal() {
      this.$emit("closeModal", false);
    },
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
.btn-enviar {
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

  .btn-enviar {
    padding: 12px 34px;
    font-size: 18px;
    margin-bottom: 32px;
  }

  .btn-newAcc {
    font-size: 14px;
  }

  .btn-enviar:hover,
  .btn-newAcc:hover {
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .btn-enviar {
    font-size: 24px;
  }

  .btn-newAcc {
    font-size: 16px;
  }
}
</style>