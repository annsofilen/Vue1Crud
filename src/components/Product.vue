<template>
    <div class="container my-5">
        <h4>Products in selected order</h4>
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
                    <td><button class="btn btn-sm btn-dark" @click="updateProduct(product)">Update</button></td>
                    <td><button class="btn btn-sm btn-danger" @click="removeProduct(product.id)">Remove </button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container my-5">
        <h4>Product selected to be updated</h4>
        <form v-if="selectedProduct">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" :placeholder="this.selectedProduct.name" class="form-control" id="name"
                    v-model="newProduct.name">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" :placeholder="this.selectedProduct.price" class="form-control" id="price"
                    v-model="newProduct.price">
            </div>
            <div class="form-group">
                <label for="brand">Brand</label>
                <input type="text" :placeholder="this.selectedProduct.brand" class="form-control" id="brand"
                    v-model="newProduct.brand">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" :placeholder="this.selectedProduct.description" id="description" rows="3"
                    v-model="newProduct.description"></textarea>
            </div>
            <button type="button" class="btn btn-primary" @click="submitUpdate">Update product</button>
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
            },
            selectedProduct: null
        }
    },
    methods: {
        removeProduct(productId) {
            ProductService.deleteProduct(productId)
        },

        updateProduct(product) {
            console.log(product.id)
            this.selectedProduct = product;
        },

        submitUpdate() {
            let updatedObject = this.selectedProduct;
            updatedObject.name = this.newProduct.name;
            updatedObject.brand = this.newProduct.brand;
            updatedObject.price = this.newProduct.price;
            updatedObject.description = this.newProduct.description;
            console.log(updatedObject);
            ProductService.updateProduct(updatedObject)
        }

    },
    mounted() {

    }
};
</script>
  