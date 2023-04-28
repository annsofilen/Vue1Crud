<template>
    <div class="container my-5">
        <h3>Here are all of your orders</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order._id">
                    <td @click="selectOrder(order)" class="text-primary cursor-pointer">{{ order.id }}</td>
                    <td>{{ order.createdAt }}</td>
                    <td><button @click="removeOrder(order.id)" class="btn btn-sm btn-danger">Remove</button></td>
                    <!-- <td>
                        <div v-if="selectedOrder" @click="removeOrder(order.id)">remove</div>
                    </td> -->
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-dark btn-sm float-right" @click="updateMyOrders(index)">Refresh!!</button>

    </div>

    <div>
        <Product :products="this.selectedOrder"></Product>
    </div>
</template>
  
<script>
import OrderService from '../services/OrderService';
import ProductService from '../services/ProductService';
import Product from './Product.vue';

export default {
    components: {
        Product,
    },
    data() {
        return {
            orders: [],
            selectedOrder: [
            
        ]
        };
    },
    mounted() {
        this.updateMyOrders();
    },
    methods: {
        updateMyOrders() {
            OrderService.getEverything()
                .then((res) => {
                    this.orders = res.data.data
                });
            console.log('orders collected ' + this.orders);

        },
        selectOrder(order) {
            //this.selectedOrder = order;

            ProductService.getProductsOfId(order)
                .then((res) => {
                    this.selectedOrder = res.data.data
                    console.log('selected order: ' + JSON.stringify(this.selectedOrder));
                })
        },
        async removeOrder(orderId) {
            console.log('delete: ' + orderId)
            await OrderService.deleteOrder(orderId)
        }
    }
};
</script>