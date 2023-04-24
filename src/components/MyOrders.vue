<template>
    <div class="container my-5">
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
                    <td>{{ order.date }}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-dark btn-sm float-right" @click="updateMyOrders(index)">Refresh!!</button>

    </div>
</template>
  
<script>
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

        },
        selectOrder() {

        }
    }
};
</script>