<template>
    <form class="p-4">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="product.name">
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" class="form-control" id="price" v-model.number="product.price">
      </div>
      <div class="form-group">
        <label for="brand">Brand:</label>
        <input type="text" class="form-control" id="brand" v-model="product.brand">
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea class="form-control" id="description" v-model="product.description"></textarea>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: '',
          price: null,
          brand: '',
          description: ''
        }
      };
    }
  };
  </script>
  
  <style>
  .form-group {
    margin-bottom: 1.5rem;
  }
  </style>