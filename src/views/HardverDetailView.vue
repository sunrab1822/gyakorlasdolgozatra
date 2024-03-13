<template>
    <div class="container">
        <h1>{{ produt.ProductName }}</h1>

        <p>{{ produt.ProductDescription }}</p>


    </div>
</template>

<script setup>
import { ref } from "vue";
import DataService from "../services/dataservice";
import { useRoute } from "vue-router";

const route = useRoute()
const produt = ref()


DataService.getproductById(route.params.id - 101)
  .then((resp) => {
    produt.value = resp;
    console.log(produt.value);
  })
  .catch((err) => {
    console.log(err);
  });
</script>