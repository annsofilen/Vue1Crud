<template>
    <div class="container my-5">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>ID</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.brand }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.id }}</td>
                    <td><button class="btn btn-sm btn-dark" @click="updateProduct(product.id)">Update</button></td>
                    <td><button class="btn btn-sm btn-danger" @click="removeProduct(product.id)">Remove </button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container my-5">
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
</template>
  
<script>
import ProductService from '../services/ProductService';
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            newProduct: {
                name: '',
                price: '',
                brand: '',
                description: ''
            }
        }
    },
    methods: {
        removeProduct(productId) {
            ProductService.deleteProduct(productId)
        },

        updateProduct(productId) {
            console.log(productId)

        }

    }, 
    mounted() {
        console.log(this.products)
    }
};
</script>
  