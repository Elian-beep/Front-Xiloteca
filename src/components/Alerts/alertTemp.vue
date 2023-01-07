<template>
  <div class="containerAlert" :class="{ showAlert : DataShowAlert }">
    <p class="title">Cadastrado com sucesso</p>
    <p class="subtitle">Verifique sua caixa de email</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "alertTemp",
  props: {
    showAlert: {
        type: Boolean,
        required: true
    }
  },
  data() {
    return {
      timeAlert: 1000 * 5,
      DataShowAlert: false,
    };
  },
  methods: {
    activeAlert() {
      setTimeout(() => {
        this.DataShowAlert = false;
      }, this.timeAlert);
    },
  },
  watch: {
    showAlert(newShowAlert){
        this.DataShowAlert = newShowAlert;
        this.activeAlert;
    }
  }
});
</script>

<style scoped>
.containerAlert {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 200px;
  text-align: center;
  padding: 4px 6px;
  background: rgba(68, 181, 68, 1);
  box-shadow: 0px 0px 20px 2px rgba(52, 115, 85, 0.1);
  color: #213140;
  border-radius: 3px;
  display: none;
}

.containerAlert.showAlert{
    display: block;
}

.containerAlert .title {
  font-size: 13px;
  font-weight: 600;
}

.containerAlert .subtitle {
  margin-top: 1px;
  font-size: 11px;
  font-weight: 500;
}
</style>