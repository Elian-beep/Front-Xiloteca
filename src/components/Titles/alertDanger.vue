<template>
    <p class="alert" :class="{ showAlert : dataShowAlert }" >{{text}}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "alertDanger",
    props: {
        text: {
            type: String,
            required: true
        },
        showAlert: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            dataShowAlert: false
        }
    },
    mounted(){
        this.dataShowAlert = this.showAlert; 
    },
    watch: {
        showAlert(newShowAlert){
            this.dataShowAlert = newShowAlert;
        }
    }
});
</script>

<style scoped>
.alert{
    display: none;
    font-size: 12px;
    text-align: center;
    color: #ff0000;
    margin-top: -10px;
}

.alert.showAlert{
    display: block;
}

@media screen and (min-width: 769px){
    /* LAPTOP */
    .alert{
        font-size: 14px;
        margin-top: -12px;
    }
}
</style>