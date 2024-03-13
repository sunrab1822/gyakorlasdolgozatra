<template>
    <div class="row">
        <div v-for="product in products" class="card" style="width: 18rem;">
            <img :src="product.Image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.ProductName  }}</h5>
                <p class="card-text">{{ product.RetailPrice }}</p>
                <router-link :to="'/product/'+ product.ProductNumber" class="btn btn-primary">Go to product</router-link>
            </div>
        </div>
    </div>

</template>

<script setup>
defineProps(["products"])
</script>