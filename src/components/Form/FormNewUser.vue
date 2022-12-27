<template>
  <form @submit.prevent="insertUser">
    <!-- <InputNoIcon
      :vmodelsample="user.nome"
      typeInput="text"
      placeholderInput="Nome completo *"
    /> -->
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="text"
        v-model="user.nome"
        placeholder="Nome completo *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="text"
        v-model="user.usuario"
        placeholder="Usuário *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="email"
        v-model="user.email"
        placeholder="E-mail *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="password"
        v-model="user.senha"
        placeholder="Senha *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="password"
        v-model="user.repeatSenha"
        placeholder="Confirmar senha *"
      />
    </div>

    <button class="btn-cadastrar">Cadastrar</button>

    <span class="btn-newAcc"
      >Já possui uma conta? <button @click="closeModal()">Entrar</button></span
    >
  </form>
</template>
  
<script>
import { defineComponent } from "vue";
import User from '../../services/users.js';

export default defineComponent({
  name: "FormNewUser",
  components: {  },
  emits: ["closeModal"],
  data() {
    return {
      user: {
        nome: "",
        usuario: "",
        email: "",
        senha: "",
        repeatSenha: "",
      },
    };
  },
  methods: {
    insertUser() {
      User.save(this.user)
        .then((response) => {
          this.user = {};
          console.log(`${response.data.nome} Cadastrado com sucesso`);
        })
        .catch((e) => {
          console.log(`ERROR: ${e.response.data}`);
        })
    },
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

.area-input {
  position: relative;
  display: flex;
  align-items: center;
  border: 0.5px solid #213140;
  border-radius: 2px;
}

.inputNoIcon {
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
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

  .btn-cadastrar:hover,
  .btn-newAcc:hover {
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