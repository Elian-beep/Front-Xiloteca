<template>
  <section class="container" :class="{ showModal: dataShowModal }">
    <div class="content">
      <div class="modal-header">
        <div></div>
        <MainTitle :text="mainTitle" />
        <button class="modal-btnClose">
          <i @click="closeModal" class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import MainTitle from "./Titles/MainTitle.vue";

export default defineComponent({
  name: "ModalContainer",
  emits: ["closedModal"],
  components: { MainTitle },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    mainTitle: {
      type: String,
      required: true,
    },
  },
  data(){
    return{
      dataShowModal: false,
    }
  },
  methods: {
    closeModal(){
      this.$emit('closedModal', false);
      this.dataShowModal = false;
    }
  },
  mounted() {
    this.dataShowModal = this.showModal;
  },
  watch: {
    showModal(newShowModal){
      this.dataShowModal = newShowModal;
    }
  }
});
</script>
  
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(15px);

  display: none;
}

.container.showModal {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.content {
  background: #fafafa;
  padding: 24px 16px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.modal-btnClose{
  background: none;
  padding: none;
  border: none;
  color: #213140;
  font-size: 15px;
}

.modal-btnClose:hover{
  cursor: pointer;
}


@media screen and (min-width: 769px) {
  /* LAPTOP */
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
}
</style>
  