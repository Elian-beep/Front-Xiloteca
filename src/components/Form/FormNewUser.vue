<template>
  <form @submit.prevent="insertUser">
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="text"
        required
        v-model="user.nome"
        placeholder="Nome completo *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="text"
        required
        v-model="user.usuario"
        placeholder="Usuário *"
      />
    </div>
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="email"
        required
        v-model="user.email"
        placeholder="E-mail *"
      />
    </div>
    <AlertDanger :showAlert="alertEmail" text="E-mail ja existente" />
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="password"
        required
        v-model="user.senha"
        placeholder="Senha *"
      />
    </div>
    <AlertDanger :showAlert="alertPassword" text="As senhas devem ser iguais!" />
    <div class="area-input">
      <input
        class="inputNoIcon"
        type="password"
        required
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
import User from "../../services/users.js";
import AlertDanger from "../Alerts/alertDanger.vue";


export default defineComponent({
  name: "FormNewUser",
  components: { AlertDanger },
  emits: ["closeModal", "openAlertTemp"],
  data() {
    return {
      userBD: "",
      user: {
        nome: "",
        usuario: "",
        email: "",
        senha: "",
        repeatSenha: "",
      },
      alertEmail: false,
      alertPassword: false
    };
  },
  methods: {
    insertUser() {
      if (this.user.senha !== this.user.repeatSenha) {
        this.alertPassword = true;
        console.log("Senhas incorretas");
      }else{
        this.alertPassword = false;
        User.findEmail(this.user.email).then((response) => {
          this.userBD = response.data[0].email;
          if (this.user.email == this.userBD) {
            console.log('email ja existente');
            this.alertEmail = true;   
          }else{
            User.save(this.user)
              .then((responseSave) => {
                this.alertEmail = false;
                this.user = {};
                this.$emit("openAlertTemp", true);
                this.closeModal();
              })
              .catch((e) => {
                console.log(`ERROR: ${e.responseSave.data}`);
              });
          }
        });
      }
    },
    closeModal() {
      this.$emit("closeModal", false);
    },
    clearUser(){
      this.user.nome = "";
      this.user.usuario = "";
      this.user.email = "";
      this.user.senha = "";
      this.user.repeatSenha = "";
    }
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