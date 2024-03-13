<template>

    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="isChecked">
        <label class="form-check-label" for="flexCheckDefault">
            Card
        </label>
    </div>
    
    <div class="container">
        <card-component v-if="isChecked" :products="products"/>
        <table-component v-else :products="products" />
    </div>
</template>

<script setup>
import DataService from "../services/dataservice";
import TableComponent from '../components/TableComponent.vue';
import CardComponent from "../components/CardComponent.vue";
import { ref } from "vue";

const products = ref();
const isChecked = ref(false);

DataService.getAllProduct()
    .then((resp) => {
        products.value = resp;
    })
    .catch((err) => {
        console.log(err);
});






</script>