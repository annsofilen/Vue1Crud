<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="newProduct.name">
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input type="number" class="form-control" id="price" v-model="newProduct.price">
            </div>
            <div class="form-group">
              <label for="brand">Brand</label>
              <input type="text" class="form-control" id="brand" v-model="newProduct.brand">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea class="form-control" id="description" rows="3" v-model="newProduct.description"></textarea>
            </div>
            <button type="button" class="btn btn-primary" @click="addProduct">Add to Cart</button>
          </form>
        </div>
        <div class="col-md-6">
          <h2>Shopping Cart</h2>
          <ul class="list-group">
            <li class="list-group-item" v-for="(product, index) in cart" :key="index">
              {{ product.name }} - {{ product.price | currency }} - {{ product.brand }} - {{ product.description }}
              <button type="button" class="btn btn-danger btn-sm float-right" @click="removeProduct(index)">Remove</button>

            </li>
          </ul>
          <button type="button" class="btn btn-dark btn-sm float-right" @click="placeOrder(index)">Order!</button>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          price: 0,
          brand: '',
          description: ''
        },
        cart: []
      };
    },
    methods: {
      addProduct() {
        this.cart.push(this.newProduct);
        this.newProduct = {
          name: '',
          price: 0,
          brand: '',
          description: ''
        };
      },
      removeProduct(index) {
        this.cart.splice(index, 1);
      }
    },
    filters: {
      currency(value) {
        return '$' + value.toFixed(2);
      }
    }
  };
  </script>
  
  <style>
  /* Your custom styles here */
  </style>

  
  
  
  
  
  
  