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
                    <td @click="selectOrder">{{ order.id }}</td>
                    <td>{{ order.createdAt }}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-dark btn-sm float-right" @click="updateMyOrders(index)">Refresh!!</button>

    </div>
</template>
  
<script>
import OrderService from '../services/OrderService'

export default {
    data() {
        return {
            orders: []
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
        selectOrder() {

        }
    }
};
</script>