<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ProductNumber</th>
      <th scope="col">ProductName</th>
      <th scope="col">RetailPrice</th>
      <th scope="col">QuantityOnHand</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products">
      <td>{{ product.ProductNumber }}</td>
      <td>{{ product.ProductName }}</td>
      <td>{{ product.RetailPrice }}</td>
      <td>{{ product.QuantityOnHand }}</td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
defineProps(["products"])


</script>