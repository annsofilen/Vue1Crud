<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css';


import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AuthService from '../services/AuthService';
const store = useStore();
const router = useRouter()

const currentUser = computed(() => {
    return store.state.auth.user;
});

function logOut() {
    store.dispatch('auth/logout');
    router.push('/login');
}
</script>

<template>
    <nav class="navbar navbar-expand-sm bg-light navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-muted" href="#">Ann-Sofi´s Store <i class="bi bi-peace"></i></a>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav mr-auto mt-2 ">
                    <!-- use router-link component for navigation. -->
                    <!-- specify the link by passing the `to` prop. -->
                    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                    <li class="nav-item active">
                        <router-link class="nav-link text-muted" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-muted" to="/About">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-muted" to="/Store">Store</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-muted" to="/MyOrders">My Orders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-muted" to="/Register">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-muted" to="/Login"> Log in</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link text-muted" to="/"  @click="AuthService.logout"> Log out</router-link>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    <p></p>
</template>

<style scoped></style>